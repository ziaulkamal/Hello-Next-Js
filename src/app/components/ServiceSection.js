import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/style.module.css';
import serviceData from '@/app/data/serviceSection.json';  // Pastikan path ini sesuai dengan struktur folder Anda

const ServiceSection = () => {
  return (
    <section className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
      <div className="container">
        <div className="heading_block text-center">
          <div className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex`}>
            {serviceData.heading}
          </div>
          <h2 className="heading_text mb-0" dangerouslySetInnerHTML={{ __html: serviceData.title }}>

          </h2>
        </div>
        <div className="row">
          {serviceData.services.map((service, index) => (
            <div className="col-lg-4" key={index}>
              <div className="service_block_2">
                <div className="service_icon">
                  <Image
                    width={service.icon.width}
                    height={service.icon.height}
                    src={service.icon.src}
                    alt={service.icon.alt}
                  />
                </div>
                <h3 className="service_title">
                  <Link href={service.link}>
                    {service.title}
                  </Link>
                </h3>
                <ul className="icon_list unordered_list_block">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <span className="icon_list_icon">
                        <i className="fa-regular fa-circle-dot"/>
                      </span>
                      <span className="icon_list_text">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {serviceData.decorations.map((decoration, index) => (
        <div className={`decoration_item ${decoration.className}`} key={index}>
          <Image
            width={decoration.width}
            height={decoration.height}
            src={decoration.src}
            alt={decoration.alt}
          />
        </div>
      ))}
    </section>
  );
}

export default ServiceSection;
