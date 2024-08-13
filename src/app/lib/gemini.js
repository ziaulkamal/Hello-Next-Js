import { getTokenAndUpdateHit } from '@/app/lib/geminTokenService';
import axios from 'axios';

// Function to call the Gemini API
async function callGeminiAPI(prompt) {
    try {
        // Ambil token dan endpoint dari layanan token
        const { token, endpoint } = await getTokenAndUpdateHit();

        // Define API key and endpoint
        const API_KEY = token;
        const API_URL = endpoint;

        const response = await axios.post(
            API_URL,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 100,
                    topP: 1,
                    maxOutputTokens: 2000,
                    stopSequences: []
                },
                safetySettings: [
                    { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    key: API_KEY
                }
            }
        );

        // Debugging: Log the full response to understand its structure
        console.log('Full API Response:', JSON.stringify(response.data, null, 2));

        // Return full response for further processing
        return response.data;

    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

// Retry mechanism
async function retryFunction(fn, retries = 3, delay = 2000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            console.error(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
            if (attempt === retries) {
                throw error;
            }
            await sleep(delay);
        }
    }
}

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to generate session data with retry
async function generateSessionDataWithRetry(prompt, lang, tone, sessionType, retries = 3) {
    let sessionPrompt;
    switch (sessionType) {
        case 1:
            sessionPrompt = `Create a JSON object with the following structure for an article about ${prompt}: { "title": "create new title, and use ${lang} ", "slug": "a-slug-for-the-title" }. only get object without include opening and say thats a json, long of title must be 140 character`;
            break;
        case 2:
            sessionPrompt = `relate with before prompt, avoid using existing context, Create a comprehensive article into a JSON object, Please ensure that the response does not include json\n at the start or at the end, inside paragraph must include heading tag html formatted for an article about ${prompt} based on the title, lang formatted ${lang}, with tone writing ${tone}. make sure data inside the right place, do not insert more attribute inside data object, The format should be: { "data": "html formatted with opening <h1> if it is a heading and each heading has 2 to 3 paragraphs, Each paragraph contains a 1000 words, H1: Should clearly define the article’s main topic." }. only get object without include opening and say thats a json`;
            break;
        case 3:
            sessionPrompt = `relate with before prompt, avoid using existing context, Create a comprehensive article into a JSON object, Please ensure that the response does not include json\n at the start or at the end, inside paragraph must include heading tag html formatted for an article about ${prompt} based on the title, lang formatted ${lang}, with tone writing ${tone}. Make sure data inside the right place, do not insert more attribute inside data object, The format should be: { "data": "html formatted with opening <h2> if it is a heading and each heading has 2 to 3 paragraphs, Each paragraph contains a 1000 words, H2: Organize content into significant sections. and if there is a table or other HTML element, it must be attached as well" }. only get object without include opening and say thats a json`;
            break;
        case 4:
            sessionPrompt = `relate with before prompt, avoid using existing context, Create a comprehensive article into a JSON object, Please ensure that the response does not include json\n at the start or at the end, inside paragraph must include heading tag html formatted for an article about ${prompt} based on the title, lang formatted ${lang}, with tone writing ${tone}. Make sure data inside the right place, do not insert more attribute inside data object, The format should be: { "data": "html formatted with opening <h3> if it is a heading and each heading has 2 to 3 paragraphs, Each paragraph contains a 1000 words, H3: Break down each H2 section into more detailed topics.. and if there is a table or other HTML element, it must be attached as well" }. only get object without include opening and say thats a json`;
            break;
        case 5:
            sessionPrompt = `relate with before prompt, avoid using existing context, Create a comprehensive article into a JSON object, Please ensure that the response does not include json\n at the start or at the end, inside paragraph must include heading tag html formatted for an article about ${prompt} based on the title, lang formatted ${lang}, with tone writing ${tone}. Make sure data inside the right place, do not insert more attribute inside data object, The format should be: { "data": "html formatted with opening <h4> if it is a heading and each heading has 2 to 3 paragraphs, Each paragraph contains a 1000 words, H4: Provide in-depth information within each H3 section. and if there is a table or other HTML element, it must be attached as well" }. only get object without include opening and say thats a json`;
            break;
        case 6:
            sessionPrompt = `relate with before prompt, avoid using existing context, Create a comprehensive article into a JSON object, Please ensure that the response does not include json\n at the start or at the end, inside paragraph must include heading tag html formatted for an article about ${prompt} based on the title, lang formatted ${lang}, with tone writing ${tone}. Make sure data inside the right place, do not insert more attribute inside data object, The format should be: { "data": "html formatted with opening <h5> if it is a heading and each heading has 2 to 3 paragraphs, Each paragraph contains a 1000 words, H5: Include specific details or examples relevant to H4. and if there is a table or other HTML element, it must be attached as well" }. only get object without include opening and say thats a json`;
            break;
        case 7:
            sessionPrompt = `Create a JSON object with keywords related to the article on ${prompt}. The format should be: { "keywords": ["keyword1", "keyword2", "keyword3", ...] }. only get object without include opening and say thats a json`;
            break;
        default:
            throw new Error('Invalid session type');
    }

    const fetchSessionData = async () => {
        const response = await callGeminiAPI(sessionPrompt);
        if (!response.candidates || response.candidates.length === 0 ||
            !response.candidates[0].content || 
            !response.candidates[0].content.parts || 
            response.candidates[0].content.parts.length === 0 ||
            !response.candidates[0].content.parts[0].text) {
            throw new Error('No valid data found in session response.');
        }
        return response;
    };

    return retryFunction(() => fetchSessionData(), retries);
}

// Function to format session data
function formatSessionData(response) {
    if (response.candidates && response.candidates.length > 0 &&
        response.candidates[0].content &&
        response.candidates[0].content.parts &&
        response.candidates[0].content.parts.length > 0 &&
        response.candidates[0].content.parts[0].text) {

        try {
            // Clean the text to handle invalid characters
            const cleanedText = response.candidates[0].content.parts[0].text.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
            return JSON.parse(cleanedText);
        } catch (error) {
            console.warn('Failed to format session data:', error);
            return {}; // Return an empty object if parsing fails
        }
    } else {
        console.warn('No valid parts found in session data.');
        return {}; // Return an empty object if no valid data found
    }
}

// Function to convert string to slug
function stringToSlug(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export {
    generateSessionDataWithRetry,
    formatSessionData,
    stringToSlug
};
