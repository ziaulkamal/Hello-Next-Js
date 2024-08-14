import BannerSection from '@/app/components/BannerSection'; // Sesuaikan path jika perlu
import Articles from '@/app/components/Articles';
import NotFoundPage from '@/app/not-found';

async function fetchArticleData(slug) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/loadData/single_ai?slug=${slug}`);
        if (!response.ok) {
            throw new Error('Article not found');
        }
        const data = await response.json();
        console.log('Fetched article data:', data); // Debugging
        return data;
    } catch (error) {
        console.error('Error fetching article data:', error);
        return null;
    }
}

// Fungsi untuk mengubah string menjadi title case
function toTitleCase(str) {
    if (!str) return ''; // Periksa jika str adalah undefined atau null
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Fungsi untuk mengubah string menjadi sentence case
function toSentenceCase(str) {
    if (!str) return ''; // Periksa jika str adalah undefined atau null
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default async function ArticlePage({ params }) {
    const { slug } = params;

    // Ambil data artikel dan gambar berdasarkan slug
    const data = await fetchArticleData(slug);

    // Jika data tidak valid, tampilkan halaman NotFound
    if (!data.article || !data.article.title || !data.article.content) {
        return <NotFoundPage />;
    }

    const { article, images } = data;
    const { title, content, keyword, updated_at, total_hit } = article;

    return (
        <>
            <BannerSection 
                section={toSentenceCase('articles')} 
                title={toTitleCase(title)} 
                category={toSentenceCase('Google Trends')} 
            />
            <Articles
                title={title}
                date={new Date(updated_at).toLocaleDateString()} // Format tanggal jika perlu
                author={'Mind AI'}
                content={content}
                slug={slug}
                thumbnail={images}
                keywords={keyword}
                category={'Google Trends'}
            />
        </>
    );
}
