// src/app/api/install/route.js
import { admin } from '@/app/lib/firebase';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  try {
    const settingsRef = admin.database().ref('setting_app');
    const articlesRef = admin.database().ref('articles');

    // Check and initialize settings
    const settingsSnapshot = await settingsRef.once('value');
    if (!settingsSnapshot.exists()) {
      console.log('Creating default settings...');
      await settingsRef.set({
        secret_key: "null",
        status: false,
        description: "null",
        keyword: "null",
        site_title: 'default',
      });
      console.log('Default settings created.');
    } else {
      console.log('Settings already exist.');
    }

    // Check and initialize articles
    const articlesSnapshot = await articlesRef.once('value');
    if (!articlesSnapshot.exists()) {
      console.log('Creating default article structure with unique IDs...');
      
      const contentId = uuidv4();
      const pageId = uuidv4();

      await articlesRef.set({
        content: {
          id: contentId,
          title: 'Default Content Title',
          date: new Date().toISOString(),
          image_primary: 'default_primary_image_url',
          thumbnail: 'default_thumbnail_image_url',
          keyword: 'default_keyword',
          slug: 'default-content-slug',
        },
        page: {
          id: pageId,
          title: 'Default Page Title',
          date: new Date().toISOString(),
          image_primary: 'default_primary_image_url',
          thumbnail: 'default_thumbnail_image_url',
          keyword: 'default_keyword',
          slug: 'default-page-slug',
        },
      });
      console.log('Default article structure created with unique IDs.');
    } else {
      console.log('Article structure already exists.');
    }

    return new Response(
      JSON.stringify({ message: 'Settings and article structure initialized.' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error initializing settings and articles:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to initialize settings and articles.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
