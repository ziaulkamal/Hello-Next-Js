"use client";
import React from 'react';
import styles from '@/styles/Table.module.css'; // Sesuaikan path jika diperlukan
import he from 'he'; // Import library he untuk mendekode entitas HTML

const geoOptions = [
  { value: 'US', label: 'United States' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'TW', label: 'Taiwan' },
  { value: 'JP', label: 'Japan' },
  { value: 'KR', label: 'South Korea' },
  { value: 'CN', label: 'China' },
  { value: 'IN', label: 'India' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'AU', label: 'Australia' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'MX', label: 'Mexico' },
  { value: 'BR', label: 'Brazil' },
  { value: 'AR', label: 'Argentina' },
  { value: 'CL', label: 'Chile' },
  { value: 'CO', label: 'Colombia' },
  { value: 'PE', label: 'Peru' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'EG', label: 'Egypt' },
  { value: 'RU', label: 'Russia' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'IL', label: 'Israel' },
  { value: 'PK', label: 'Pakistan' },
  { value: 'PH', label: 'Philippines' },
  { value: 'TH', label: 'Thailand' },
  { value: 'VN', label: 'Vietnam' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'SG', label: 'Singapore' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'IE', label: 'Ireland' },
  { value: 'BE', label: 'Belgium' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'SE', label: 'Sweden' },
  { value: 'NO', label: 'Norway' },
  { value: 'DK', label: 'Denmark' },
  { value: 'FI', label: 'Finland' },
  { value: 'PL', label: 'Poland' },
  { value: 'PT', label: 'Portugal' },
  { value: 'AT', label: 'Austria' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'GR', label: 'Greece' },
  { value: 'HU', label: 'Hungary' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'SK', label: 'Slovakia' },
  { value: 'RO', label: 'Romania' },
  { value: 'BG', label: 'Bulgaria' },
  { value: 'HR', label: 'Croatia' },
  { value: 'SI', label: 'Slovenia' },
  { value: 'LT', label: 'Lithuania' },
  { value: 'LV', label: 'Latvia' },
  { value: 'EE', label: 'Estonia' },
  { value: 'UA', label: 'Ukraine' },
  { value: 'BY', label: 'Belarus' },
  { value: 'MD', label: 'Moldova' },
  { value: 'ME', label: 'Montenegro' },
  { value: 'RS', label: 'Serbia' },
  { value: 'BA', label: 'Bosnia and Herzegovina' },
  { value: 'MK', label: 'North Macedonia' },
  { value: 'AL', label: 'Albania' },
  { value: 'XK', label: 'Kosovo' },
  { value: 'LT', label: 'Lithuania' },
  { value: 'TR', label: 'Turkey' },
  { value: 'CY', label: 'Cyprus' },
  { value: 'MT', label: 'Malta' },
  { value: 'IS', label: 'Iceland' },
  { value: 'LU', label: 'Luxembourg' },
  { value: 'LI', label: 'Liechtenstein' },
  { value: 'MC', label: 'Monaco' },
  { value: 'AD', label: 'Andorra' },
  { value: 'SM', label: 'San Marino' },
  { value: 'VA', label: 'Vatican City' },
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
    <section className="blog_details_section section_space bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            {/* Badge Buttons */}
            <div className={styles.badgesContainer}>
              {limitedBadges.map((query, index) => (
                <button
                  key={index}
                  onClick={() => onBadgeClick(query.query)}
                  className={`btn ${styles.badgeButton}`}
                >
                  {he.decode(query.query)}
                </button>
              ))}
            </div>

            {/* Controls Container */}
            <div className={styles.controlsContainer}>
              {/* Geo Selector */}
              <div className={styles.geoSelectContainer}>
                <select value={selectedGeo} onChange={(e) => onGeoChange(e.target.value)} className={`form-select ${styles.geoSelect}`}>
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

            {/* Articles Table */}
            <div className={styles.tableContainer}>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <table className={`table ${styles.table}`}>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Time Ago</th>
                        <th>Source</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentArticles.length > 0 ? (
                        currentArticles.map((article, index) => (
                          <tr key={index}>
                            <td>
                              <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {he.decode(article.title) || 'No Title'}
                              </a>
                            </td>
                            <td>{article.timeAgo || 'No Time Ago'}</td>
                            <td>{article.source || 'No Source'}</td>
                            <td>
                              {article.image ? (
                                <a href={article.image.newsUrl} target="_blank" rel="noopener noreferrer">
                                  <img src={article.image.imageUrl} alt={article.title} className={styles.articleImage} />
                                </a>
                              ) : (
                                'No Image'
                              )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4">No articles found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>

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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
