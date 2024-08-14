// src/app/not-found.js
"use client"; // Menandai bahwa ini adalah komponen client-side

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/style.module.css';

const NotFoundPage = () => {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <>
      <section
        className={`${styles.page404} calltoaction_section parallaxie`}
      >
        <div className="container text-center">
          <div className="heading_block text-white">
            <h2 className="heading_text">404 - Page Not Found</h2>
            <p className="heading_description mb-0">
              Sorry, the page you are looking for does not exist.
            </p>
          </div>
          <button className="btn btn-primary" onClick={handleGoBack}>
            <span className="btn_label" data-text="Go Back">
              Go Back
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"/>
            </span>
          </button>
          <p className="heading_description mb-0"> Or </p>
          <Link className="btn btn-secondary" href="/">
            <span className="btn_label" data-text="Back To Home!">
              Back To Home!
            </span>
            <span className="btn_icon">
              <i className="fa-solid fa-arrow-up-right"/>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
