import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/style.module.css'
const AboutCase = () => {
  return (
    <section
      className={`${styles.about_and_case_section} about_and_case_section section_space section_decoration bg-dark`}>
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              <div className="image_wrap">
                <Image width={198} height={240}  src="/images/about/about_image_6.webp" alt="Techco - About Image"/>
              </div>
              <div
                className={`${styles.about_funfact_info} about_funfact_info`} >
                <div className="customer_count">
                  <ul className="unordered_list">
                    <li>
                      <Image width={46} height={46}  src="/images/avatar/avatar_1.webp" alt="Customer Avatar"/>
                    </li>
                    <li>
                      <Image width={46} height={46}  src="/images/avatar/avatar_2.webp" alt="Customer Avatar"/>
                    </li>
                    <li>
                      <Image width={46} height={46}  src="/images/avatar/avatar_3.webp" alt="Customer Avatar"/>
                    </li>
                    <li>
                      <span>6k+</span>
                    </li>
                  </ul>
                  <p className="mb-0">Happy Customer</p>
                </div>
                <div className="about_funfact_counter">
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count={6}>
                        0
                      </span>
                      <span>K+</span>
                    </div>
                    <h3 className="funfact_title mb-0">Projects Done</h3>
                  </div>
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count={100}>
                        0
                      </span>
                      <span>%</span>
                    </div>
                    <h3 className="funfact_title mb-0">Results Guaranteed</h3>
                  </div>
                </div>
                <Link className="btn btn-primary" href="about.html">
                  <span className="btn_label" data-text="Learn More">
                    Learn More
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"/>
                  </span>
                </Link>
                <div className="icon_globe">
                  <Image width={32} height={32}  src="/images/icons/icon_global.svg" alt="Icon Globe"/>
                </div>
              </div>
              <div className="space_line">
                <Image width={368} height={154}  src="/images/shapes/shape_line.webp" alt="Shape Line"/>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div
                  className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex`}>
                  About Us
                </div>
                <h2 className="heading_text">
                  Techco
                  <mark> Mission &amp; Goal</mark>
                </h2>
                <p className="heading_description mb-0">
                  At Techco, our mission is to empower businesses through innovative software
                  solutions that streamline operations, foster growth, and drive success. With a
                  commitment to excellence and customer satisfaction we strive.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div
              className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex`}>
              Case Studies
            </div>
            <h2 className="heading_text mb-0">
              Our latest
              <mark> Case </mark>
              Studies
            </h2>
          </div>
          <div className="case_studies_wrapper">
            <div className="case_study_block">
              <div className="case_study_image">
                <Image width={465} height={502}  src="/images/case/case_image_1.webp" alt="Techco - Cases Image"/>
              </div>
              <div className="case_study_content">
                <ul className="category_list unordered_list text-uppercase">
                  <li>
                    <Link href="portfolio.html">Computer Software</Link>
                  </li>
                </ul>
                <h3 className="case_title">
                  <Link href="portfolio_details.html">Astarte Medical</Link>
                </h3>
                <p>
                  Creating software for Astarte Medical involves a meticulous process aimed at
                  addressing their specific needs and objectives. It begins with thorough research
                  and planning to understand the requirements goals of the project.
                </p>
                <ul className="icon_list unordered_list">
                  <li>
                    <span className="icon_list_text">
                      <strong className="text-dark">Industry:</strong>
                      Computer software
                    </span>
                  </li>
                  <li>
                    <span className="icon_list_text">
                      <strong className="text-dark">Country:</strong>
                      Germany, Issum
                    </span>
                  </li>
                </ul>
                <ul className="case_technologies unordered_list" data-text="Core Technologies:">
                  <li>
                    <Image width={30} height={32}  src="/images/case/icon_angular.svg" alt="Angular"/>
                  </li>
                  <li>
                    <Image width={30} height={32}  src="/images/case/icon_elephent.svg" alt="Elephent"/>
                  </li>
                </ul>
                <Link className="btn btn-primary" href="portfolio_details.html">
                  <span className="btn_label" data-text="Read Case">
                    Read Case
                  </span>
                  <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"/>
                  </span>
                </Link>
              </div>
            </div>

          </div>
          <div className="btns_group pb-0">
            <Link className="btn btn-primary" href="portfolio.html">
              <span className="btn_label" data-text="View More Cases Study">
                View More Cases Study
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"/>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image width={1371} height={49}  src="/images/shapes/shape_space_2.svg" alt="Techco Shape"/>
      </div>
    </section>

  );
}

export default AboutCase;