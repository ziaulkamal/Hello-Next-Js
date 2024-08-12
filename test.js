const path = require('path');
const fs = require('fs');
const axios = require('axios');

// Define API key and endpoint
const API_KEY = 'AIzaSyDxNHLoyaBLdmS5odu_oO7gSXB_cVmubU0'; // Replace with your API key
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// Function to call the Gemini API
async function callGeminiAPI(prompt) {
    try {
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
                    temperature: 0.4,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 6000,
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

        // Ensure the response has the expected structure
        if (
            response.data.candidates &&
            response.data.candidates.length > 0 &&
            response.data.candidates[0].content &&
            response.data.candidates[0].content.parts &&
            response.data.candidates[0].content.parts.length > 0
        ) {
            return response.data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Unexpected response structure from API');
        }
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

// Main function to handle the request and save results
async function main(prompt) {
    try {
        // Define the prompts for each session
        const prompts = [
            `Create a JSON object with the following structure for an article about ${prompt}: { "title": "The title of the article", "slug": "a-slug-for-the-title" }. Ensure the response contains only the JSON formatted text with title and slug.`,

            `Create a JSON object with 5 paragraphs for an article about ${prompt} based on the title. The format should be: { "h1": "Title of h1", "data": { "1" : "text of Paragraph (long sentence 400 words)", "2" : "text of Paragraph (long sentence 400 words)", "3" : "text of Paragraph (long sentence 400 words)", "4" : "text of Paragraph (long sentence 400 words)", "5" : "text of Paragraph (long sentence 400 words)" } }. Ensure the response contains only the JSON formatted text.`,

            `Create a JSON object with 5 paragraphs and a table for an article about ${prompt}. The format should be: { "h2": "Title of h2", "data": { "1" : "text of Paragraph (long sentence 400 words)", "2" : "text of Paragraph (long sentence 400 words)", "3" : "text of Paragraph (long sentence 400 words)", "4" : "text of Paragraph (long sentence 400 words)", "5" : "text of Paragraph (long sentence 400 words)" } }. Ensure the response contains only the JSON formatted text.`,

            `Create a JSON object with 3 paragraphs and a conclusion for an article about ${prompt}. The format should be: { "h3": "Title of h3", "data": { "1" : "text of Paragraph (long sentence 400 words)", "2" : "text of Paragraph (long sentence 400 words)", "3" : "text of Paragraph (long sentence 400 words)", "4" : "text of Paragraph (long sentence 400 words)", "5" : "text of Paragraph (long sentence 400 words)" } }. Ensure the response contains only the JSON formatted text.`,

            `Create a JSON object with keywords related to the article on ${prompt}. The format should be: { "keywords": ["keyword1", "keyword2", "keyword3", ...] }. Ensure the response contains only the JSON formatted text.`
        ];

        // Call API for each session
        const results = await Promise.all(prompts.map(prompt => callGeminiAPI(prompt)));

        // // Flatten the results into a single object
        // const result = {
        //     session_1_title: JSON.parse(results[0]).title,
        //     session_1_slug: JSON.parse(results[0]).slug,
        //     ...JSON.parse(results[1]),
        //     ...JSON.parse(results[2]),
        //     ...JSON.parse(results[3]),
        //     ...JSON.parse(results[4])
        // };

         // Flatten the results into a single object
        const result = results.reduce((acc, text, index) => {
            const sessionKey = `session_${index + 1}`;
            const parsedData = JSON.parse(text);
            // Add each property from the parsed JSON into the result object
            Object.keys(parsedData).forEach(key => {
                acc[`${sessionKey}_${key}`] = parsedData[key];
            });
            return acc;
        }, {});

             // Create the output directory if it doesn't exist
        const outputDir = path.join(__dirname, 'public/gemini_result');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Save the result to a JSON file named with the slug
        const slug = result.session_1_slug || 'default-slug'; // Use slug from session 1 or a default
        const filePath = path.join(outputDir, `${slug}.json`);
        fs.writeFileSync(filePath, JSON.stringify(result, null, 2));

        console.log(`Results saved to ${filePath}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage
const prompt = 'time management techniques'; // Replace with actual prompt
main(prompt);
