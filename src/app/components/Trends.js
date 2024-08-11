import React from 'react';
import Image from 'next/image'; // Next.js Image component for optimized images

import styles from '@/styles/Table.module.css'; // Sesuaikan path jika diperlukan
import he from 'he'; // Import library he untuk mendekode entitas HTML

const geoOptions = [
  { label: 'Indonesia', value: 'ID' },
  { label: 'United States', value: 'US' },
  { label: 'Taiwan', value: 'TW' },
  { label: 'India', value: 'IN' },
  { label: 'Brazil', value: 'BR' },
  { label: 'Japan', value: 'JP' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'Germany', value: 'DE' },
  { label: 'France', value: 'FR' },
  { label: 'Mexico', value: 'MX' },
  { label: 'South Korea', value: 'KR' },
  { label: 'Italy', value: 'IT' },
  { label: 'Canada', value: 'CA' },
  { label: 'Russia', value: 'RU' },
  { label: 'Australia', value: 'AU' },
  { label: 'Turkey', value: 'TR' },
  { label: 'Spain', value: 'ES' },
  { label: 'Netherlands', value: 'NL' },
  { label: 'Saudi Arabia', value: 'SA' },
  { label: 'South Africa', value: 'ZA' },
  { label: 'Argentina', value: 'AR' },
  { label: 'Colombia', value: 'CO' },
  { label: 'Thailand', value: 'TH' },
  { label: 'Malaysia', value: 'MY' },
  { label: 'Philippines', value: 'PH' },
  { label: 'Vietnam', value: 'VN' },
  { label: 'Poland', value: 'PL' },
  { label: 'Sweden', value: 'SE' },
  { label: 'Norway', value: 'NO' },
  { label: 'Denmark', value: 'DK' },
  { label: 'Finland', value: 'FI' },
  { label: 'United Arab Emirates', value: 'AE' },
  { label: 'Singapore', value: 'SG' },
  { label: 'New Zealand', value: 'NZ' },
  { label: 'Ireland', value: 'IE' },
  { label: 'Portugal', value: 'PT' },
  { label: 'Greece', value: 'GR' },
  { label: 'Hungary', value: 'HU' },
  { label: 'Czech Republic', value: 'CZ' },
  { label: 'Romania', value: 'RO' },
  { label: 'Bulgaria', value: 'BG' },
  { label: 'Slovakia', value: 'SK' },
  { label: 'Croatia', value: 'HR' },
  { label: 'Lithuania', value: 'LT' },
  { label: 'Latvia', value: 'LV' },
  { label: 'Estonia', value: 'EE' },
  { label: 'Ukraine', value: 'UA' },
  { label: 'Belarus', value: 'BY' },
  { label: 'Moldova', value: 'MD' },
  { label: 'Serbia', value: 'RS' },
  { label: 'North Macedonia', value: 'MK' },
  { label: 'Albania', value: 'AL' },
  { label: 'Kosovo', value: 'XK' },
  { label: 'Cyprus', value: 'CY' },
  { label: 'Malta', value: 'MT' },
  { label: 'Iceland', value: 'IS' },
  { label: 'Luxembourg', value: 'LU' },
  { label: 'Liechtenstein', value: 'LI' },
  { label: 'Monaco', value: 'MC' },
  { label: 'Andorra', value: 'AD' },
  { label: 'San Marino', value: 'SM' },
  { label: 'Vatican City', value: 'VA' },
];


const Trends = ({
  trendingSearches,
  articles,
  onBadgeClick,
  search,
  onSearchChange,
  isLoading,
  currentPage,
  itemsPerPage,
  onPageChange,
  selectedGeo,
  onGeoChange
}) => {
  // Limit badges to 20
  const limitedBadges = trendingSearches.flatMap(item => item.relatedQueries).slice(0, 20);

  // Filter articles based on search query
  const filteredArticles = articles.filter(article =>
    he.decode(article.title).toLowerCase().includes(search.toLowerCase()) ||
    (article.snippet && he.decode(article.snippet).toLowerCase().includes(search.toLowerCase()))
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const currentArticles = filteredArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>

      <section className="blog_details_section section_space bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              {/* Badge Buttons */}
              <div className={styles.badgesContainer}>
                {limitedBadges.map((query, index) => (
                  <span
                    key={index}
                    onClick={() => onBadgeClick(query.query)}
                    className={`badge ${styles.badge}`}
                  >
                    {he.decode(query.query)}
                  </span>
                ))}
              </div>

              {/* Controls Container */}
              <div className={styles.controlsContainer}>
                {/* Geo Selector */}
                <div className={styles.geoSelectContainer}>
                  <select 
                    value={selectedGeo} 
                    onChange={(e) => onGeoChange(e.target.value)} 
                    className={`form-select ${styles.geoSelect}`}
                  >
                    {geoOptions.map((geo, index) => (
                      <option key={index} value={geo.value}>
                        {geo.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Search Input */}
                <div className={styles.searchContainer}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className={`form-control ${styles.searchInput}`}
                  />
                </div>
              </div>

              {/* Articles Display */}
              <div className={styles.articlesContainer}>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  currentArticles.map((article, index) => (
                    <div key={index} className="blog_post_block image_left_layout">
                      <div className="blog_post_image">
                        {article.image ? (
                          <a 
                            className="image_wrap" 
                            href={article.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Image 
                              src={article.image.imageUrl} 
                              alt={article.title} 
                              width={312} 
                              height={336} 
                              className={styles.articleImage} 
                            />
                          </a>
                        ) : null}
                      </div>
                      <div className="blog_post_content">
                        <div className="post_meta_wrap">
                          <ul className="category_btns_group unordered_list">
                            <li><a href="#!">Technology</a></li>
                          </ul>
                          <ul className="post_meta unordered_list">
                            <li>
                              <a href="#!">
                                <Image 
                                  src="/images/icons/icon_calendar.svg" 
                                  alt="Icon Calendar" 
                                  width={16} 
                                  height={16} 
                                /> {article.timeAgo || 'No Time Ago'}
                              </a>
                            </li>
                            <li>
                              <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                            </li>
                          </ul>
                        </div>
                        <h3 className="blog_post_title">
                          <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {he.decode(article.title) || 'No Title'}
                          </a>
                        </h3>
                        <p>
                          {he.decode(article.snippet) || 'No Description Available'}
                        </p>
                        <a 
                          className="btn btn-dark" 
                          href={article.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <span className="btn_label" data-text="Read More">Read More</span>
                          <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  ))
                )}

                {/* Pagination Controls */}
                <div className={styles.pagination}>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => onPageChange(index + 1)}
                      className={`btn ${currentPage === index + 1 ? styles.activePage : ''}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trends;
