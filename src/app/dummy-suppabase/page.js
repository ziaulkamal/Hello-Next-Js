"use client";

import { useEffect } from 'react';
import supabase from '../lib/supabaseClient';

const InsertDummyDataPage = () => {
  useEffect(() => {
    const insertData = async () => {
      try {
        const { data, error } = await supabase
          .from('users')
          .insert([
            { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
            { name: 'Bob Smith', email: 'bob.smith@example.com' },
            { name: 'Charlie Brown', email: 'charlie.brown@example.com' }
          ]);

        if (error) {
          console.error('Error inserting data:', error.message);
        } else {
          console.log('Data inserted successfully:', data);
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      }
    };

    insertData();
  }, []);

  return (
    <div>
      <h1>Insert Dummy Data</h1>
      <p>Check the console for insertion results.</p>
    </div>
  );
};

export default InsertDummyDataPage;
