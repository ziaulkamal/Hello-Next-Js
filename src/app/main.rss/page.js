import { redirect } from 'next/navigation';

/**
 * Halaman untuk menangani permintaan ke /main.rss.
 * Mengarahkan ke endpoint RSS feed.
 */
export default function MainRssPage() {
    // Mengarahkan ke endpoint /api/rss
    redirect('/api/rss');
}