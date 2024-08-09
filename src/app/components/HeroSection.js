import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/style.module.css';
import heroData from '@/app/data/heroSection.json';

const HeroSection = () => {
  const { heading, title, description, steps, buttons, images } = heroData.heroSection;

  return (
    <section className="software_company_hero_section xb-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content_wrap">
              <div className={`${styles.headingFocusFrontPage} heading_focus_text has_underline text-white d-inline-flex`}>
                {heading}
              </div>
              <h1 className="text-white" dangerouslySetInnerHTML={{ __html: title }} />
              <p>{description}</p>
              <ul className="step_list text-white unordered_list_block">
                {steps.map((step, index) => <li key={index}>{step}</li>)}
              </ul>
              <ul className="btns_group unordered_list p-0 justify-content-start">
                {buttons.map((button, index) => (
                  <li key={index}>
                    {button.type === 'link' ? (
                      <Link className="btn" href={button.href}>
                        <span className="btn_label" data-text={button.label}>
                          {button.label}
                        </span>
                        <span className="btn_icon">
                          <i className={button.icon} />
                        </span>
                      </Link>
                    ) : (
                      <Link className="hotline_block" href={button.href}>
                        <span className="hotline_icon">
                          <i className={button.icon} />
                        </span>
                        <span className="hotline_content">
                          <small>{button.label.small}</small>
                          <strong className="text-white">{button.label.strong}</strong>
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="engine_image">
              {images.engine.map((image, index) => (
                <div key={index} className={`image_wrap_${index + 1}`}>
                  <Image width={image.width} height={image.height} src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {images.shapes.map((shape, index) => (
        <div key={index} className={`shape_image_${index + 1}`}>
          <Image src={shape.src} width={shape.width} height={shape.height} alt={shape.alt} />
        </div>
      ))}
    </section>
  );
}

export default HeroSection;
