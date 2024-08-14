"use client";
import axios from 'axios';
import { useState, useEffect } from 'react';
import BannerSection from "../components/BannerSection";
import Trends from "../components/Trends";

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
const timeStamp = Math.floor(Date.now() / 1000);

const TrendPage = () => {
  const [trendingSearches, setTrendingSearches] = useState([]);
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGeo, setSelectedGeo] = useState('US');

  const fetchData = async (geo) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/daily-trends?geo=${geo}&timestamp=${timeStamp}`);
      const searches = response.data.default.trendingSearchesDays.flatMap(day => day.trendingSearches);
      setTrendingSearches(searches);
      const allArticles = searches.flatMap(search => search.articles || []);
      
      // Set articles and save data to Supabase afterward
      setArticles(allArticles);
    } catch (err) {
      console.error('Error:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedGeo);
  }, [selectedGeo]);

  useEffect(() => {
    if (articles.length > 0) {
      const saveDataToSupabase = async () => {
        try {
          const apiResponse = await axios.post('/api/saveTrendsData', articles, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log('Data save response:', apiResponse.data);
        } catch (err) {
          console.error('Error saving data:', err.message);
          setError(err.message);
        }
      };

      saveDataToSupabase();
    }
  }, [articles]);

  const handleBadgeClick = async (query) => {
    
    try {
      setLoading(true);
      const response = await axios.get(`/api/daily-trends?q=${encodeURIComponent(query)}&geo=${selectedGeo}&timestamp=${timeStamp}`);
      const newTrendingSearches = response.data.default.trendingSearchesDays.flatMap(day => day.trendingSearches);
      setTrendingSearches(newTrendingSearches);
      const newArticles = newTrendingSearches.flatMap(search => search.articles || []);
      
      // Set articles and save data to Supabase afterward
      setArticles(newArticles);
    } catch (err) {
      console.error('Error:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

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