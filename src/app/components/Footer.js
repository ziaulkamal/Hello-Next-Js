import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/style.module.css';
import footerData from '@/app/data/footerSection.json'; // Import JSON data

const Footer = () => {
  const { footer, decoration } = footerData;

  return (
    <footer className={`${styles.siteFooter} site_footer footer_layout_2 section_decoration`}>
      {decoration.map((item, index) => (
        <div className="decoration_item shape_image_1" key={index}>
          <Image width={item.width} height={item.height} src={item.image} alt={item.alt} />
        </div>
      ))}
      <div className="container">
        <div className="footer_main_content">
          <div className="row justify-content-lg-between">
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Startup</h3>
                <ul className="icon_list unordered_list_block">
                  {footer.company.map((item, index) => (
                    <li key={index}><Link href={item.link}>{item.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Pengetahuan</h3>
                <ul className="icon_list unordered_list_block">
                  {footer.expertise.map((item, index) => (
                    <li key={index}><Link href={item.link}>{item.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer_widget">
                <h3 className="footer_info_title">Inovasi</h3>
                <ul className="icon_list unordered_list_block">
                  {footer.industries.map((item, index) => (
                    <li key={index}><Link href={item.link}>{item.name}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer_widget pe-lg-3">
                <h2 className="footer_info_title">Langganan Mail</h2>
                <p>{footer.newsletter.description}</p>
                <form className="footer_newslatter_2" action="#">
                  <label htmlFor="footer_mail_input">
                    <Image width={18} height={16} src="/images/icons/icon_mail_2.svg" alt="Mail SVG Icon" />
                  </label>
                  <input id="footer_mail_input" type="email" name="email" placeholder="Enter your email" />
                  <button type="submit">{footer.newsletter.buttonText}</button>
                </form>
                <ul className="social_icons_block unordered_list">
                  {footer.socialIcons.map((icon, index) => (
                    <li key={index}><Link href={icon.link}><i className={`fa-brands ${icon.icon}`}></i></Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.siteFooterCopyright} footer_bottom`}>
        <div className="container d-md-flex align-items-md-center justify-content-md-between">
          <p className="copyright_text m-0">
            {footer.copyright.text}
          </p>
          <ul className="icon_list unordered_list">
            {footer.copyright.links.map((link, index) => (
              <li key={index}><Link href={link.link}><span className="icon_list_icon"><i className="fa-solid fa-circle"></i></span><span className="icon_list_text">{link.text}</span></Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
