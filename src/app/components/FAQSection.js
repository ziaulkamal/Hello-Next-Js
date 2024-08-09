import Image from "next/image";
import styles from '@/styles/style.module.css'
import faqData from '@/app/data/faqData.json'

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
            Butuh
            <mark> Bantuan?</mark>
          </h2>
        </div>
        <div className="faq_accordion accordion" id="faq_accordion">
          {faqData.faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <div
                className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                role="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse_${index}`}
                aria-expanded={index === 0}
                aria-controls={`collapse_${index}`}>
                Q. {faq.question}
              </div>
              <div
                id={`collapse_${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                data-bs-parent="#faq_accordion">
                <div className="accordion-body">
                  <div className="text_a">A.</div>
                  <p>{faq.answer}</p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="icon_list unordered_list_block">
                        {faq.services.slice(0, 4).map((service, idx) => (
                          <li key={idx}>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"/>
                            </span>
                            <span className="icon_list_text">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="icon_list unordered_list_block">
                        {faq.services.slice(4).map((service, idx) => (
                          <li key={idx}>
                            <span className="icon_list_icon">
                              <i className="fa-solid fa-circle fa-fw"/>
                            </span>
                            <span className="icon_list_text">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image width={1636} height={49} src="/images/shapes/shape_space_4.svg" alt="Shape"/>
      </div>
      <div className="decoration_item shape_image_2">
        <Image width={265} height={270} src="/images/shapes/shape_angle_3.webp" alt="Shape Angle"/>
      </div>
    </section>
  );
}

export default FAQSection;
