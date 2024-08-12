const fs = require('fs');
const path = require('path');

// Nama file yang harus diproses (diinput secara manual)
const inputFileName = 'cara-optiomasi-website-seo-2024'; // Ganti dengan nama file input Anda (tanpa ekstensi .json)

// Path file input dan output
const inputFilePath = path.join(__dirname, 'public', 'gemini_result', `${inputFileName}.json`);
const outputFilePath = path.join(__dirname, 'public', 'gemini_result', `${inputFileName}_formatted.json`);

// Fungsi untuk menggabungkan atribut JSON
function formatAndSaveData(inputFileName) {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);

            const result = {
                title: "",
                slug: "",
                data: "",
                keywords: ""
            };

            let combinedData = [];

            Object.keys(jsonData).forEach(key => {
                const item = jsonData[key];

                if (item.title) {
                    result.title = item.title;
                }
                if (item.slug) {
                    result.slug = item.slug;
                }
                if (item.data) {
                    combinedData.push(item.data);
                }
                if (item.keywords) {
                    result.keywords = item.keywords.join(', '); // Menggabungkan array keywords menjadi string, jika diperlukan
                }
            });

            // Gabungkan semua data menjadi satu string
            if (combinedData.length > 0) {
                result.data = combinedData.join(' '); // Menggabungkan semua data menjadi satu string
            }

            // Tulis hasil ke file output
            fs.writeFile(outputFilePath, JSON.stringify(result, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                } else {
                    console.log('File successfully processed and saved to', outputFilePath);
                }
            });

        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
        }
    });
}

// Eksekusi fungsi
formatAndSaveData(inputFileName);
