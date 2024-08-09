import Image from "next/image";
import styles from '@/styles/style.module.css'
import workingProcessData from '@/app/data/workingProcessSection.json';
import technologyTabsData from '@/app/data/technologyTabs.json'; // Assuming the JSON data is saved here
import reviewComments from '@/app/data/reviewComment.json';


const StackTechnology = () => {
  return (
    <section
      className="process_technology_review_section bg-light section_decoration">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="heading_block">
              <div
                className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex`}>
                {workingProcessData.workingProcess.heading}
              </div>
              <h2
                className="heading_text mb-0"
                dangerouslySetInnerHTML={{
                __html: workingProcessData.workingProcess.title
              }}></h2>
            </div>
            <div className="accordion" id="service_process_faq">
              {workingProcessData
                .workingProcess
                .steps
                .map((step) => (
                  <div className="accordion-item" key={step.id}>
                    <div
                      className={`accordion-button ${step.id === 'collapse_one'
                      ? ''
                      : 'collapsed'}`}
                      role="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${step.id}`}
                      aria-expanded={step.id === 'collapse_one'}
                      aria-controls={step.id}>
                      {step.title}
                    </div>
                    <div
                      id={step.id}
                      className={`accordion-collapse collapse ${step.id === 'collapse_one'
                      ? 'show'
                      : ''}`}
                      data-bs-parent="#service_process_faq">
                      <div className="accordion-body">
                        <p className="m-0">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-lg-5">
            <ul className="content_layer_group unordered_list_block text-center">
              {workingProcessData
                .workingProcess
                .steps
                .map((step) => (
                  <li
                    role="button"
                    key={step.id}
                    data-bs-toggle="collapse"
                    data-bs-target={`#${step.id}`}
                    aria-expanded={step.id === 'collapse_one'}
                    aria-controls={step.id}>
                    <span>{step.title}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="section_space">
          <div className="heading_block text-center">
            <div
              className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex`}>
              Teknologi
            </div>
            <h2 className="heading_text mb-0">
              Kami Menggunakan
              <mark> Stack Teknologi</mark>
            </h2>
          </div>
          <div className="tab_block_wrapper">
            <ul className="nav justify-content-center" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_web_platform"
                  type="button"
                  role="tab"
                  aria-selected="true">
                  Web Platform
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_databases"
                  type="button"
                  role="tab"
                  aria-selected="false">
                  Databases
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_cloud_devops"
                  type="button"
                  role="tab"
                  aria-selected="false">
                  Cloud &amp; DevOps
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_mobile_apps"
                  type="button"
                  role="tab"
                  aria-selected="false">
                  Mobile Apps
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab_other_frameworks"
                  type="button"
                  role="tab"
                  aria-selected="false">
                  Framework Lain
                </button>
              </li>
            </ul>
            <div className="tab-content">
              {technologyTabsData
                .tabs
                .map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${tab.id === 'tab_web_platform'
                    ? 'show active'
                    : ''}`}
                    id={tab.id}
                    role="tabpanel">
                    <div className="web_development_technologies row justify-content-center">
                      {tab
                        .technologies
                        .map((tech, index) => (
                          <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                              <div className="iconbox_icon">
                                <Image width={39} height={39} src={tech.icon} alt={tech.alt}/>
                              </div>
                              <div className="iconbox_content">
                                <h3 className="iconbox_title mb-0">{tech.name}</h3>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="deals_winner_customers">
              <h3 className="title_text">
                <mark>2,900+ </mark>
                Antusias Teknologi
              </h3>
              <div className="row">
                <div className="col-6">
                  <div className="review_short_info">
                    <div className="icon">
                      <Image
                        width={39}
                        height={39}
                        src="/images/icons/reddit-color-svgrepo-com.svg"
                        alt="C SVG Icon"/>
                    </div>
                    <ul className="rating_block unordered_list">
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                    </ul>

                  </div>
                </div>
                <div className="col-6">
                  <div className="review_short_info">
                    <div className="icon">
                      <Image
                        width={39}
                        height={39}
                        src="/images/icons/instagram-1-svgrepo-com.svg"
                        alt="C SVG Icon"/>
                    </div>
                    <ul className="rating_block unordered_list">
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                      <li>
                        <i className="fa-solid fa-star fa-fw"/>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="review_onecol_wrapper">
              <div className="review_onecol_carousel swiper">
                <div className="swiper-wrapper">
                  {reviewComments.map((review, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="review_block_2">
                        <h3 className="review_title">{review.title}</h3>
                        <p className="review_commtent">{review.comment}</p>
                        <div className="d-md-flex justify-content-md-between">
                          <div className="review_admin">
                            <div className="review_admin_image">
                              <Image
                                width={345}
                                height={30}
                                src={review.admin.imageSrc}
                                alt={review.admin.name}/>
                            </div>
                            <div className="review_admin_info">
                              <h4 className="review_admin_name">{review.admin.name}</h4>
                              <span className="review_admin_designation">{review.admin.designation}</span>
                              <div className="review_admin_country">
                                <span className="country_text">{review.admin.country}</span>
                              </div>
                            </div>
                          </div>
                          <div className="review_admin_logo">
                            <Image
                              width={300}
                              height={300}
                              src={review.admin.logoSrc}
                              alt="Mindkreativ Reviews Clients"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="carousel_arrows_nav">
                  <button type="button" className="r1cc-swiper-button-prev">
                    <i className="fa-solid fa-arrow-left"/>
                  </button>
                  <button type="button" className="r1cc-swiper-button-next">
                    <i className="fa-solid fa-arrow-right"/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image
          width={39}
          height={39}
          src="/images/shapes/shape_line_2.svg"
          alt="Shape"/>
      </div>
      <div className="decoration_item shape_image_2">
        <Image
          width={39}
          height={39}
          src="/images/shapes/shape_line_3.svg"
          alt="Shape"/>
      </div>
      <div className="decoration_item shape_image_3">
        <Image
          width={39}
          height={39}
          src="/images/shapes/shape_line_4.svg"
          alt="Shape"/>
      </div>
      <div className="decoration_item shape_image_4">
        <Image
          width={39}
          height={39}
          src="/images/shapes/shape_space_3.svg"
          alt="Shape"/>
      </div>
    </section>

  );
}

export default StackTechnology;