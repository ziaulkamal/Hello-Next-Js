// src/app/[category]/[slug]/page.js

import fs from 'fs';
import path from 'path';
import BannerSection from '@/app/components/BannerSection'; // Sesuaikan path jika perlu
import Articles from '@/app/components/Articles';
import NotFoundPage from '@/app/not-found';

async function getArticleData(category, slug) {
    const filePath = path.join(process.cwd(), 'src/app/data/articles.json');
    const jsonData = fs.readFileSync(filePath);
    const articles = JSON.parse(jsonData);
    return articles.find((article) => article.category === category && article.slug === slug);
}

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Fungsi untuk mengubah string menjadi sentence case
function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default async function ArticlePage({ params }) {
    const { category, slug } = params;

    const article = await getArticleData(category, slug);

    if (!article) {
        return <NotFoundPage />;
    }

    return (
        <>
            <BannerSection 
                section={toSentenceCase(article.section)} 
                title={toTitleCase(article.title)} 
                category={toSentenceCase(article.category)} 
            />
            <Articles />
        </>
    );
}
