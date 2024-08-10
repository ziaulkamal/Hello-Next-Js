// src/app/lib/googleTrendsClient.js

import GoogleTrends from 'google-trends-api';

const googleTrendsClient = {
  // AutoComplete: Returns results from the "Add a search term" input box
  async fetchAutoComplete(term) {
    try {
      const data = await GoogleTrends.autoComplete({ keyword: term });
      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching autocomplete data:', error);
      throw new Error('Error fetching autocomplete data');
    }
  },

  // Daily Trends: Highlights searches that jumped significantly in traffic in the past 24 hours
  async fetchDailyTrends(geo = 'US') {
    try {
      const today = new Date();
      const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1); // 1 day ago

      const data = await GoogleTrends.dailyTrends({
        trendDate: startDate,
        geo
      });
      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching daily trends:', error);
      throw new Error('Error fetching daily trends');
    }
  },

  // Interest Over Time: Numbers represent search interest relative to the highest point
  async fetchInterestOverTime(keyword, startTime = new Date(new Date().setMonth(new Date().getMonth() - 1))) {
    try {
      const data = await GoogleTrends.interestOverTime({
        keyword,
        startTime
      });
      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching interest over time:', error);
      throw new Error('Error fetching interest over time');
    }
  },

  // Interest By Region: Popularity of the term in different regions
  async fetchInterestByRegion(keyword, startTime = new Date(new Date().setMonth(new Date().getMonth() - 1)), geo = 'US') {
    try {
      const data = await GoogleTrends.interestByRegion({
        keyword,
        startTime,
        geo
      });
      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching interest by region:', error);
      throw new Error('Error fetching interest by region');
    }
  },

  // Real-Time Trends: Highlight trending stories across Google surfaces
  async fetchRealTimeTrends(geo = 'US') {
    try {
      const data = await GoogleTrends.realTimeTrends({ geo });
      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching real-time trends:', error);
      throw new Error('Error fetching real-time trends');
    }
  },

  // Related Queries: Users searching for your term also searched for these queries
  async fetchRelatedQueries(keyword) {
    try {
      const data = await GoogleTrends.relatedQueries({ keyword });
      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching related queries:', error);
      throw new Error('Error fetching related queries');
    }
  },

  // Related Topics: Users searching for your term also searched for these topics
  async fetchRelatedTopics(keyword) {
    try {
      const data = await GoogleTrends.relatedTopics({ keyword });
      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching related topics:', error);
      throw new Error('Error fetching related topics');
    }
  }
};

export default googleTrendsClient;
