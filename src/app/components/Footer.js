// src/app/components/Footer.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/style.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.siteFooter} site_footer footer_layout_2 section_decoration`}>
      <div className="decoration_item shape_image_1">
        <Image width={1371} height={49}  src="/images/shapes/shape_space_2.svg" alt="Shape" />
      </div>
      <div className="container">
        <div className="footer_main_content">
          <div className="row justify-content-lg-between">
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Company</h3>
                <ul className="icon_list unordered_list_block">
                  <li><Link href="#!">About</Link></li>
                  <li><Link href="#!">Our achievements</Link></li>
                  <li><Link href="#!">Our partners</Link></li>
                  <li><Link href="#!">Our locations</Link></li>
                  <li><Link href="#!">Careers</Link></li>
                  <li><Link href="#!">Contacts</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Expertise</h3>
                <ul className="icon_list unordered_list_block">
                  <li><Link href="#!">Cloud solutions</Link></li>
                  <li><Link href="#!">Data warehouse</Link></li>
                  <li><Link href="#!">Data management</Link></li>
                  <li><Link href="#!">BI services</Link></li>
                  <li><Link href="#!">Big data</Link></li>
                  <li><Link href="#!">Data science</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Industries</h3>
                <ul className="icon_list unordered_list_block">
                  <li><Link href="#!">Insurance</Link></li>
                  <li><Link href="#!">Banking</Link></li>
                  <li><Link href="#!">Fintech</Link></li>
                  <li><Link href="#!">Logistics</Link></li>
                  <li><Link href="#!">Retail</Link></li>
                  <li><Link href="#!">Healthcare</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer_widget pe-lg-3">
                <h2 className="footer_info_title">Newsletter</h2>
                <p>Sign up to Techco weekly newsletter to get the latest updates.</p>
                <form className="footer_newslatter_2" action="#">
                  <label htmlFor="footer_mail_input">
                    <Image width={18} height={16}  src="/images/icons/icon_mail_2.svg" alt="Mail SVG Icon" />
                  </label>
                  <input id="footer_mail_input" type="email" name="email" placeholder="Enter your email" />
                  <button type="submit">Send</button>
                </form>
                <ul className="social_icons_block unordered_list">
                    <li> <Link href="#!"> <i className="fa-brands fa-facebook-f"></i> </Link> </li>
                    <li> <Link href="#!"> <i className="fa-brands fa-twitter"></i> </Link> </li>
                    <li> <Link href="#!"> <i className="fa-brands fa-linkedin-in"></i> </Link> </li>
                    <li> <Link href="#!"> <i className="fa-brands fa-youtube"></i> </Link> </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.siteFooterCopyright} footer_bottom`}>
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            Copyright © 2024 Techco, All rights reserved.
          </p>
          <ul className="icon_list unordered_list">
            <li><Link href="#!"><span className="icon_list_icon"><i className="fa-solid fa-circle"></i></span><span className="icon_list_text">Terms of Up</span></Link></li>
            <li><Link href="#!"><span className="icon_list_icon"><i className="fa-solid fa-circle"></i></span><span className="icon_list_text">Privacy Policy</span></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
