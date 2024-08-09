import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/style.module.css';
import caseStudiesData from '@/app/data/aboutcaseSection.json'; // Assuming the JSON data is saved here

const AboutCase = () => {
  return (
    <section className={`${styles.about_and_case_section} about_and_case_section section_space section_decoration bg-dark`}>
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-7 order-lg-last">
            <div className="about_image_2">
              <div className="image_wrap">
                <Image width={198} height={240} src="/images/stock/woman-hijab-love-sign.jpeg" alt="Mindkreativ" />
              </div>
              <div className={`${styles.about_funfact_info} about_funfact_info`}>
                <div className="customer_count">
                  <ul className="unordered_list">
                    <li>
                      <Image width={46} height={46} src="/images/stock/boy-indonesia-stock.jpg" alt="Mindkreativ" />
                    </li>
                    <li>
                      <Image width={46} height={46} src="/images/stock/woman-indonesia-stock-2.jpg" alt="Mindkreativ" />
                    </li>
                    <li>
                      <Image width={46} height={46} src="/images/stock/woman-indonesia-stock.jpg" alt="Mindkreativ" />
                    </li>
                    <li>
                      <span>300+</span>
                    </li>
                  </ul>
                </div>
                <div className="about_funfact_counter">
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count={387}>0</span>
                      <span>+</span>
                    </div>
                    <h3 className="funfact_title mb-0">Project Selesai</h3>
                  </div>
                  <div className="funfact_item">
                    <div className="counter_value">
                      <span className="odometer" data-count={98}>0</span>
                      <span>%</span>
                    </div>
                    <h3 className="funfact_title mb-0">Tingkat Kepuasan</h3>
                  </div>
                </div>
                <Link className="btn btn-primary" href="#!">
                  <span className="btn_label" data-text="Klik disini">Review Lain</span>
                  <span className="btn_icon"><i className="fa-solid fa-arrow-up-right" /></span>
                </Link>
                <div className="icon_globe">
                  <Image width={32} height={32} src="/images/icons/icon_global.svg" alt="Icon Globe" />
                </div>
              </div>
              <div className="space_line">
                <Image width={368} height={154} src="/images/shapes/shape_line.webp" alt="Shape Line" />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_content">
              <div className="heading_block mb-0 text-white">
                <div className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex`}>
                  {caseStudiesData.aboutSection.heading}
                </div>
                <h2 className="heading_text" dangerouslySetInnerHTML={{ __html: caseStudiesData.aboutSection.title }}>
                </h2>
                <p className="heading_description mb-0">
                  {caseStudiesData.aboutSection.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-170">
          <div className="heading_block text-center text-white">
            <div className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex`}>
              {caseStudiesData.aboutCaseSection.heading}
            </div>
            <h2 className="heading_text mb-0" dangerouslySetInnerHTML={{ __html: caseStudiesData.aboutCaseSection.title }}>
            </h2>
          </div>
          <div className="case_studies_wrapper">
            {caseStudiesData.caseStudies.map((caseStudy, index) => (
              <div className="case_study_block" key={index}>
                <div className="case_study_image">
                  <Image 
                    width={caseStudy.image.width} 
                    height={caseStudy.image.height} 
                    src={caseStudy.image.src} 
                    alt={caseStudy.image.alt} 
                  />
                </div>
                <div className="case_study_content">
                  <ul className="category_list unordered_list text-uppercase">
                    {caseStudy.categories.map((category, index) => (
                      <li key={index}>
                        <Link href={category.link}>{category.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <h3 className="case_title">
                    <Link href={caseStudy.titleLink}>{caseStudy.title}</Link>
                  </h3>
                  <p>{caseStudy.description}</p>
                  <ul className="icon_list unordered_list">
                    <li>
                      <span className="icon_list_text">
                        <strong className="text-dark">Kategori:</strong>
                        {caseStudy.industry}
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_text">
                        <strong className="text-dark">Daerah:</strong>
                        {caseStudy.country}
                      </span>
                    </li>
                  </ul>
                  <ul className="case_technologies unordered_list" data-text="Stack Digunakan: ">
                    {caseStudy.technologies.map((tech, index) => (
                      <li key={index}>
                        <Image 
                          width={tech.width} 
                          height={tech.height} 
                          src={tech.src} 
                          alt={tech.alt} 
                        />
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
          <div className="btns_group pb-0">
            <Link className="btn btn-primary" href="#!">
              <span className="btn_label" data-text="Selengkapnya">Lihat Portofolio </span>
              <span className="btn_icon"><i className="fa-solid fa-arrow-up-right" /></span>
            </Link>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image width={1371} height={49} src="/images/shapes/shape_space_2.svg" alt="Shape" />
      </div>
    </section>
  );
}

export default AboutCase;
