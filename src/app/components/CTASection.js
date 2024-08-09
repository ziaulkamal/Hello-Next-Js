import Image from "next/image";
import styles from '@/styles/style.module.css';
import ctaData from '@/app/data/ctaSection.json';

const CTASection = () => {
  const { heading, contactMethods, supportSteps, form } = ctaData;

  return (
    <section className="contact_section pb-80 bg-light section_decoration">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact_method_box">
              <div className="heading_block">
                <div
                  className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex mb-3`}>
                  You Are Here
                </div>
                <h2 className="heading_text mb-0">{heading.title}</h2>
                <p className="heading_description mb-0">{heading.description}</p>
              </div>
              <ul className="contact_method_list unordered_list_block">
                {contactMethods.map((method, index) => (
                  <li key={index}>
                    <a href={method.link}>
                      <span className="icon">
                        <i className={`fa-solid ${method.icon}`}/>
                      </span>
                      <span className="text">{method.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="support_step unordered_list_block">
                {supportSteps.map((step, index) => (
                  <li key={index}>
                    <span className="serial_number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="instant_contact_form">
              <div className="small_title">
                <i className={`fa-solid ${form.fields.find(field => field.icon === "fa-envelope").icon}`}> </i> Let&apos;s Connect!
              </div>
              <h3 className="form_title">{form.title}</h3>
              <div className="row">
                {form.fields.map((field, index) => (
                  <div className={`col-md-6`} key={index}>
                    <div className="form-group">
                      <label className="input_title" htmlFor={field.id}>
                        <i className={`fa-regular ${field.icon}`}/>
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.id}
                          className="form-control"
                          name={field.name}
                          placeholder={field.placeholder}
                        />
                      ) : (
                        <input
                          id={field.id}
                          className="form-control"
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required=""
                        />
                      )}
                    </div>
                  </div>
                ))}
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    <span className="btn_label" data-text={form.button.text}>
                      {form.button.text}
                    </span>
                    <span className="btn_icon">
                      <i className={`fa-solid ${form.button.icon}`}/>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image width={192} height={616} src="/images/shapes/shape_line_5.svg" alt="Shape"/>
      </div>
      <div className="decoration_item shape_image_2">
        <Image width={298} height={222} src="/images/shapes/shape_line_6.svg" alt="Shape"/>
      </div>
      <div className="decoration_item shape_image_3">
        <Image width={1371} height={49} src="/images/shapes/shape_space_5.svg" alt="Shape"/>
      </div>
    </section>
  );
}

export default CTASection;
