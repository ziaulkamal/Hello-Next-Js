import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/style.module.css';

const ServiceSection = () => {
  return (
    <section
      className="service_section pt-175 pb-80 bg-light section_decoration xb-hidden">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className={`${styles.headingFocusFrontPage} heading_focus_text has_underline d-inline-flex`}>
            Our Services
          </div>
          <h2 className="heading_text mb-0">
            How We Can
            <mark> Help </mark>
            You
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="service_block_2">
              <div className="service_icon">
                <Image width={62} height={62}  src="/images/icons/icon_code.svg" alt="- Service icon"/>
              </div>
              <h3 className="service_title">
                <Link href="service_details.html">Custom Software Development</Link>
              </h3>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    Software architecture design
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    System integration services
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">Data migration services</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">Legacy app modernization</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_block_2">
              <div className="service_icon">
                <Image width={62} height={63} 
                  src="/images/icons/icon_programming_tree.svg"
                  alt="- Service icon"/>
              </div>
              <h3 className="service_title">
                <Link href="service_details.html">
                  Audit &amp; IT Consulting Services
                </Link>
              </h3>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">TechGuard Audit</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    CyberSafe Audit &amp; IT Consulting
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    AssuranceEdge &amp; IT Consulting
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    IT Sentry Audit &amp; IT Consulting
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_block_2">
              <div className="service_icon">
                <Image width={58} height={56}  src="/images/icons/icon_monitor_2.svg" alt="- Service icon"/>
              </div>
              <h3 className="service_title">
                <Link href="service_details.html">
                  Web Application Design and Development
                </Link>
              </h3>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    Web app development services
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    Web portal development services
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    Website development services
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">Offshore web development</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_block_2">
              <div className="service_icon">
                <Image width={41} height={62}  src="/images/icons/icon_phone.svg" alt="- Service icon"/>
              </div>
              <h3 className="service_title">
                <Link href="service_details.html">Mobile App Design and Development</Link>
              </h3>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    Android development services
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    iOS app development services
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    Mobile application design services
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    Enterprise mobile app development
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_block_2">
              <div className="service_icon">
                <Image width={62} height={62}  src="/images/icons/icon_bug.svg" alt="- Service icon"/>
              </div>
              <h3 className="service_title">
                <Link href="service_details.html">Best UI/UX Design Services</Link>
              </h3>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    PixelPerfection UI/UX Design
                  </span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">DesignCraft UI/UX Design</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">CreativeWave UI/UX Design</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">
                    InterfaceGenius UI/UX Design
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_block_2">
              <div className="service_icon">
                <Image width={74} height={63} 
                  src="/images/icons/icon_programming.svg"
                  alt="- Service icon"/>
              </div>
              <h3 className="service_title">
                <Link href="service_details.html">Maintenance and Customer Support</Link>
              </h3>
              <ul className="icon_list unordered_list_block">
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">CareCraft Maintenance</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">FixItPro Maintenance</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">TechCare Maintenance</span>
                </li>
                <li>
                  <span className="icon_list_icon">
                    <i className="fa-regular fa-circle-dot"/>
                  </span>
                  <span className="icon_list_text">AssistEdge Maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image width={190} height={609}  src="/images/shapes/shape_line_5.svg" alt="Shape"/>
      </div>
      <div className="decoration_item shape_image_2">
        <Image width={270} height={201}  src="/images/shapes/shape_line_6.svg" alt="Shape"/>
      </div>
      <div className="decoration_item shape_image_3">
        <Image width={1636} height={49}  src="/images/shapes/shape_space_1.svg" alt="Shape"/>
      </div>
      <div className="decoration_item shape_image_4">
        <Image width={265} height={364}  src="/images/shapes/shape_angle_1.webp" alt="Shape Angle"/>
      </div>
      <div className="decoration_item shape_image_5">
        <Image width={265} height={269}  src="/images/shapes/shape_angle_2.webp" alt="Shape Angle"/>
      </div>
    </section>

  );
}

export default ServiceSection;