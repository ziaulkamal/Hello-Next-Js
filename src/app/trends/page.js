// src/app/trends/page.js
"use client";
import axios from 'axios';
import { useState, useEffect } from 'react';
import BannerSection from "../components/BannerSection";
import Trends from "../components/Trends";

const geoOptions = [
  { label: 'Indonesia', value: 'ID' },
  { label: 'United States', value: 'US' },
  { label: 'Taiwan', value: 'TW' }
];

const TrendPage = () => {
  const [trendingSearches, setTrendingSearches] = useState([]);
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // Number of items per page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGeo, setSelectedGeo] = useState('US');

  // Fetch data from API based on selected geo
  const fetchData = async (geo) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/daily-trends?geo=${geo}`);
      const searches = response.data.default.trendingSearchesDays.flatMap(day => day.trendingSearches);
      setTrendingSearches(searches);
      const allArticles = searches.flatMap(search => search.articles || []);
      setArticles(allArticles);
      setCurrentPage(1); // Reset to first page when new data is loaded
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedGeo);
  }, [selectedGeo]);

  // Handle badge click
  const handleBadgeClick = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/daily-trends?q=${encodeURIComponent(query)}&geo=${selectedGeo}`);
      const newTrendingSearches = response.data.default.trendingSearchesDays.flatMap(day => day.trendingSearches);
      setTrendingSearches(newTrendingSearches);
      const newArticles = newTrendingSearches.flatMap(search => search.articles || []);
      setArticles(newArticles);
      setCurrentPage(1); // Reset to first page when new data is loaded
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter articles based on search input
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <>
      <BannerSection 
        section="Trends" 
        title="Database Google Trends" 
      />
      <Trends 
        trendingSearches={trendingSearches} 
        articles={filteredArticles} 
        onBadgeClick={handleBadgeClick} 
        search={search} 
        onSearchChange={setSearch} 
        isLoading={loading}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        geoOptions={geoOptions}
        selectedGeo={selectedGeo}
        onGeoChange={setSelectedGeo}
      />
    </>
  );
};

export default TrendPage;
