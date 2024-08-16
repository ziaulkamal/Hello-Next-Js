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

    const cleanAndTruncateContent = (htmlString, maxLength = 140) => {
        // Menghapus tag HTML dengan regex
        const removeHtmlTags = (str) => str.replace(/<\/?[^>]+(>|$)/g, "");

        // Menghapus tag HTML
        const textOnly = removeHtmlTags(htmlString);

        // Mengambil hingga 140 karakter
        const truncateText = (text, length) => {
            if (text.length <= length) return text;
            return text.slice(0, length) + '...'; // Menambahkan elipsis jika teks lebih panjang dari panjang maksimum
        };

        return truncateText(textOnly, maxLength);
    };


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
        <title>{title}</title>
        <meta name="keyword" content={keyword} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={cleanAndTruncateContent(content)} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mindkreativ" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={cleanAndTruncateContent(content)} />
        <meta name="twitter:url" content={`${process.env.NEXT_PUBLIC_API_URL}/${slug}`} />

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
