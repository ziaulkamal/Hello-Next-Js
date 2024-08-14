"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import BannerSection from "../components/BannerSection";
import WidgetArea from "../components/WidgetArea";
import NotFoundPage from "../not-found";

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomImageUrl = (imagesData) => {
    if (!imagesData || !Array.isArray(imagesData)) return null;
    const filteredImages = imagesData.filter(image => {
        const url = image.url || '';
        return /\.(jpg|jpeg|png|svg)$/i.test(url);
    });
    if (filteredImages.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * filteredImages.length);
    return filteredImages[randomIndex].url;
};

const GoogleTrends = () => {
    const [articles, setArticles] = useState([]);
    const [displayedArticles, setDisplayedArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000)); // Initialize timestamp
    const articlesPerPage = 25;

    const fetchArticles = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/database/collectTrends?timestamp=${timestamp}`);
            const allArticles = response.data;
            setArticles(allArticles);
            setTotalPages(Math.ceil(allArticles.length / articlesPerPage));
            setDisplayedArticles(allArticles.slice(0, articlesPerPage));
        } catch (error) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, [timestamp, currentPage]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimestamp(Math.floor(Date.now() / 1000)); // Update timestamp every 5 minutes
        }, 5 * 60 * 1000); // 5 minutes in milliseconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    useEffect(() => {
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        setDisplayedArticles(articles.slice(startIndex, endIndex));
    }, [currentPage, articles]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    const removeHtmlTags = (htmlString) => {
        return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
    };

    const cleanAndTruncate = (htmlString, maxLength) => {
        const textOnly = removeHtmlTags(htmlString);
        return truncateText(textOnly, maxLength);
    };

    if (error) {
        return <NotFoundPage />;
    }

    return (
        <>
            <BannerSection 
                section={'articles'} 
                title={'Related Articles'} 
                category={'Google Trends'} 
            />
            <section className="blog_section section_space bg-light">
                <div className="container">
                    <div className="section_space pb-0">
                        <div className="row">
                            <div className="col-lg-8">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : displayedArticles.length > 0 ? (
                                    displayedArticles.map((article, index) => (
                                        <div key={index} className="blog_post_block image_left_layout">
                                            {getRandomImageUrl(article.images_data) && (
                                                <div className="blog_post_image" style={{ 
                                                    width: '312px', 
                                                    height: '336px', 
                                                    overflow: 'hidden', 
                                                    position: 'relative'
                                                }}>
                                                    <a className="image_wrap" href={`/googleTrends/${article.slug}`}>
                                                        <img 
                                                            src={getRandomImageUrl(article.images_data)} 
                                                            alt={article.title}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                objectPosition: 'center'
                                                            }}
                                                        />
                                                    </a>
                                                </div>
                                            )}
                                            <div className="blog_post_content">
                                                <div className="post_meta_wrap">
                                                    <ul className="category_btns_group unordered_list">
                                                        <li>
                                                            <a href="#!">Google Trends</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="post_meta unordered_list">
                                                        <li>
                                                            <a href="#!">
                                                                <i className="fa-regular fa-comment-lines" /> {getRandomInt(111,999)}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h3 className="blog_post_title">
                                                    <a href={`/googleTrends/${article.slug}`}>
                                                        {article.title}
                                                    </a>
                                                </h3>
                                                <p>
                                                    {cleanAndTruncate(article.data, 300)}
                                                </p>
                                                <a className="btn btn-dark" href={`/googleTrends/${article.slug}`}>
                                                    <span className="btn_label" data-text="Read More">
                                                        Read More
                                                    </span>
                                                    <span className="btn_icon">
                                                        <i className="fa-solid fa-arrow-up-right" />
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No articles found</p>
                                )}
                                <div className="pagination_wrap pb-0">
                                    <ul className="pagination_nav unordered_list justify-content-center">
                                        <li>
                                            <a 
                                                href="#!" 
                                                onClick={(e) => { 
                                                    e.preventDefault(); 
                                                    handlePageChange(currentPage - 1); 
                                                }}
                                            >
                                                <i className="fa-solid fa-angles-left" />
                                            </a>
                                        </li>
                                        {[...Array(totalPages)].map((_, index) => (
                                            <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                                                <a 
                                                    href="#!" 
                                                    onClick={(e) => { 
                                                        e.preventDefault(); 
                                                        handlePageChange(index + 1); 
                                                    }}
                                                >
                                                    {index + 1}
                                                </a>
                                            </li>
                                        ))}
                                        <li>
                                            <a 
                                                href="#!" 
                                                onClick={(e) => { 
                                                    e.preventDefault(); 
                                                    handlePageChange(currentPage + 1); 
                                                }}
                                            >
                                                <i className="fa-solid fa-angles-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GoogleTrends;
