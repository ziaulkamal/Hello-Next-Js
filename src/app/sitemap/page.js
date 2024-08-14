import { redirect } from 'next/navigation';

/**
 * Halaman untuk menangani permintaan ke /main.rss.
 * Mengarahkan ke endpoint RSS feed.
 */
export default function MainSitemapPage() {
    const timeStamp = Math.floor(Date.now() / 1000);
    // Mengarahkan ke endpoint /api/rss
    redirect(`/api/sitemap_index?timestamp=${timeStamp}`);
}