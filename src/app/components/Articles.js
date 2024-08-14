import Image from "next/image";
import SocialShare from "./SocialShare";
import Link from "next/link";
import SocialAuthor from "./SocialAuthor";
import CommentArea from "./CommentArea";
import WidgetArea from "./WidgetArea";

const Articles = ({ title, date, author, content, slug, thumbnail, keywords, category }) => {
    // Fungsi untuk mendapatkan paragraf ketiga dari konten
    function getThirdParagraph(text) {
        if (!text) {
            return '';
        }
        const paragraphs = text.split(/\r?\n\r?\n/);
        return paragraphs[2] || ' ';
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min); // Membulatkan ke atas untuk memastikan min termasuk
        max = Math.floor(max); // Membulatkan ke bawah untuk memastikan max termasuk
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCategory(category) {
        return category || "No Category";
    }

    function getDate(date) {
        if (!date) {
            const today = new Date();
            return formatDate(today);
        }
        const parsedDate = new Date(date);
        return formatDate(parsedDate);
    }

    function formatDate(date) {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return date.toLocaleDateString('en-US', options);
    }

    function getAuthor(author) {
        return author || 'Admin';
    }

    const thirdParagraph = getThirdParagraph(content);
    const randComment = getRandomInt(10, 100);
    const randViews = getRandomInt(10, 100);
    const setAuthor = getAuthor(author);
    const setDate = getDate(date);
    const setCategory = getCategory(category);

    // Mengecek ekstensi file yang valid
    const isValidImageUrl = (url) => {
        const validExtensions = ['jpg', 'jpeg', 'svg', 'png'];
        const extension = url.split('.').pop().toLowerCase();
        return validExtensions.includes(extension);
    };

    // Mengambil gambar acak dari array thumbnail, dengan pengecekan ekstensi
    const getRandomImageUrl = () => {
        if (thumbnail && thumbnail.length > 0 && thumbnail[0].length > 0) {
            const images = thumbnail[0].filter(image => isValidImageUrl(image.url));
            if (images.length > 0) {
                const randomIndex = getRandomInt(0, images.length - 1);
                return images[randomIndex].url;
            }
        }
        return '/images/blog/default_image.webp';
    };

    // Fungsi untuk menyisipkan gambar acak di bawah tag heading
    const insertImagesBelowHeadings = (htmlContent) => {
        let imageUrls = [];
        if (thumbnail && thumbnail.length > 0 && thumbnail[0].length > 0) {
            const images = thumbnail[0].filter(image => isValidImageUrl(image.url));
            while (images.length > 0) {
                const randomIndex = getRandomInt(0, images.length - 1);
                imageUrls.push(images[randomIndex].url);
                images.splice(randomIndex, 1); // Hapus gambar yang sudah digunakan
            }
        } else {
            imageUrls.push('/images/blog/default_image.webp');
        }

        let imageIndex = 0;
        return htmlContent.replace(/<(h[1-6])[^>]*>(.*?)<\/\1>/gi, (match, p1, p2) => {
            const imageUrl = imageUrls[imageIndex] || '/images/blog/default_image.webp';
            imageIndex = (imageIndex + 1) % imageUrls.length;
            return `${match}<div class="details_item_image"><img src="${imageUrl}" alt="${title}"/></div>`;
        });
    };

    const modifiedContent = insertImagesBelowHeadings(content);
    const firstImageUrl = getRandomImageUrl();

    return (
        <section className="blog_details_section section_space bg-light">
            <div className="container">
                <div className="details_item_image">
                    <img src={firstImageUrl} alt={title} />
                </div>
                <div className="post_meta_wrap mb-4">
                    <ul className="category_btns_group unordered_list">
                        <li>
                            <Link href="#">{setCategory}</Link>
                        </li>
                    </ul>
                    <ul className="post_meta unordered_list">
                        <li>
                            <Image width={18} height={16} src="/images/icons/icon_calendar.svg" alt="Icon Calendar"/>
                            {date}
                        </li>
                    </ul>
                </div>
                <h2 className="details_item_title">
                    {title}
                </h2>
                <div className="htmlThirdParagraph" dangerouslySetInnerHTML={{ __html: thirdParagraph }}></div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <ul className="post_meta unordered_list">
                            <li>
                                <a href="#!">
                                    <Image width={16} height={20} src="/images/icons/icon_user.svg" alt="Icon User"/>
                                    by {setAuthor}
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <Image width={20} height={20} src="/images/icons/icon_chat.svg" alt="Icon Chat"/>
                                    {randComment} Comments
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <Image width={18} height={16} src="/images/icons/icon_eye.svg" alt="Icon Eye"/>
                                    {randViews}k Views
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="post_meta unordered_list justify-content-md-end">
                            <li>
                                <a href="#!">
                                    <Image width={18} height={18} src="/images/icons/icon_link.svg" alt="Icon Link"/>
                                    Copy Link
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <Image width={16} height={20} src="/images/icons/icon_bookmark.svg" alt="Bookmark Chat"/>
                                    Bookmark
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="mb-0"/>
                <div className="section_space pb-0 pt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <content className="details_item_info_title mb-5" dangerouslySetInnerHTML={{ __html: modifiedContent }}>
                            </content>
                            <div className="keywords"><strong>Keywords : </strong><span>{keywords}</span></div>
                            <SocialAuthor />
                            <div className="other_posts_nav">
                                <a href="#!">
                                    <i className="fa-regular fa-arrow-left-long"/>
                                    <span>
                                        <strong>Exploring IT Solutions with Techco</strong>
                                        <small>Dec 24, 2024</small>
                                    </span>
                                </a>
                                <a href="blog.html">
                                    <i className="fa-solid fa-grid-2"/>
                                </a>
                                <a href="#!">
                                    <span>
                                        <strong>Exploring IT Solutions with Techco</strong>
                                        <small>Dec 24, 2024</small>
                                    </span>
                                    <i className="fa-regular fa-arrow-right-long"/>
                                </a>
                            </div>
                            {/* <CommentArea /> */}
                        </div>
                        <WidgetArea />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Articles;
