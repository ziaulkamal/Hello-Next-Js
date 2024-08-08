import Image from "next/image";
import styles from '@/styles/style.module.css'

const FAQSection = () => {
  return (
    <section className="faq_section section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex`}>
            F.A.Q.
          </div>
          <h2 className="heading_text mb-0">
            Need a
            <mark> Support?</mark>
          </h2>
        </div>
        <div className="faq_accordion accordion" id="faq_accordion">
          <div className="accordion-item">
            <div
              className="accordion-button"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_six"
              aria-expanded="true"
              aria-controls="collapse_six">
              Q. How to choose a software development company?
            </div>
            <div
              id="collapse_six"
              className="accordion-collapse collapse show"
              data-bs-parent="#faq_accordion">
              <div className="accordion-body">
                <div className="text_a">A.</div>
                <p>
                  A custom software development company is a vendor that builds unique software
                  from scratch. Also, such vendors provide a range of other useful services like
                  software upgrades,Here is an extended list of services:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Web and mobile app development
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Software architecture
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          IT consulting and audit
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Legacy system modernization
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Cloud computing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">QA and testing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Business analysis</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">IT staffing services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-button collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_seven"
              aria-expanded="false"
              aria-controls="collapse_seven">
              Q. What is a custom software development company?
            </div>
            <div
              id="collapse_seven"
              className="accordion-collapse collapse"
              data-bs-parent="#faq_accordion">
              <div className="accordion-body">
                <div className="text_a">A.</div>
                <p>
                  A custom software development company is a vendor that builds unique software
                  from scratch. Also, such vendors provide a range of other useful services like
                  software upgrades,Here is an extended list of services:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Web and mobile app development
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Software architecture
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          IT consulting and audit
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Legacy system modernization
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Cloud computing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">QA and testing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Business analysis</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">IT staffing services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-button collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_eight"
              aria-expanded="false"
              aria-controls="collapse_eight">
              Q. Why do businesses need custom software development?
            </div>
            <div
              id="collapse_eight"
              className="accordion-collapse collapse"
              data-bs-parent="#faq_accordion">
              <div className="accordion-body">
                <div className="text_a">A.</div>
                <p>
                  A custom software development company is a vendor that builds unique software
                  from scratch. Also, such vendors provide a range of other useful services like
                  software upgrades,Here is an extended list of services:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Web and mobile app development
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Software architecture
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          IT consulting and audit
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Legacy system modernization
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Cloud computing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">QA and testing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Business analysis</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">IT staffing services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-button collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_nine"
              aria-expanded="false"
              aria-controls="collapse_nine">
              Q. How much does custom software development cost?
            </div>
            <div
              id="collapse_nine"
              className="accordion-collapse collapse"
              data-bs-parent="#faq_accordion">
              <div className="accordion-body">
                <div className="text_a">A.</div>
                <p>
                  A custom software development company is a vendor that builds unique software
                  from scratch. Also, such vendors provide a range of other useful services like
                  software upgrades,Here is an extended list of services:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Web and mobile app development
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Software architecture
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          IT consulting and audit
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Legacy system modernization
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Cloud computing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">QA and testing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Business analysis</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">IT staffing services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-button collapsed"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_ten"
              aria-expanded="false"
              aria-controls="collapse_ten">
              Q. Why custom software development is important?
            </div>
            <div
              id="collapse_ten"
              className="accordion-collapse collapse"
              data-bs-parent="#faq_accordion">
              <div className="accordion-body">
                <div className="text_a">A.</div>
                <p>
                  A custom software development company is a vendor that builds unique software
                  from scratch. Also, such vendors provide a range of other useful services like
                  software upgrades,Here is an extended list of services:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Web and mobile app development
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Software architecture
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          IT consulting and audit
                        </span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">
                          Legacy system modernization
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Cloud computing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">QA and testing</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">Business analysis</span>
                      </li>
                      <li>
                        <span className="icon_list_icon">
                          <i className="fa-solid fa-circle fa-fw"/>
                        </span>
                        <span className="icon_list_text">IT staffing services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image width={1636} height={49}  src="/images/shapes/shape_space_4.svg" alt="Techco Shape"/>
      </div>
      <div className="decoration_item shape_image_2">
        <Image width={265} height={270}  src="/images/shapes/shape_angle_3.webp" alt="Techco Shape Angle"/>
      </div>
    </section>
  );
}

export default FAQSection;