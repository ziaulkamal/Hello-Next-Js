import Image from "next/image";
import Link from "next/link";
import headData from '@/app/data/headSection.json';

const Heads = () => {
  const { logo, menuItems, buttons, reviewLogos, author } = headData.header;

  return (
    <header className="site_header site_header_2">
      <div className="header_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-5">
              <div className="site_logo">
                <Link className="site_link" href="/">
                  {logo.map((img, index) => (
                    <Image
                      key={index}
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                    />
                  ))}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    {menuItems.map((item, index) => (
                      <li key={index} className={item.dropdown ? 'dropdown' : ''}>
                        <Link
                          className={item.dropdown ? 'nav-link' : ''}
                          href={item.href || '#'}
                          id={item.dropdown ? 'company_submenu' : undefined}
                          role={item.dropdown ? 'button' : undefined}
                          data-bs-toggle={item.dropdown ? 'dropdown' : undefined}
                          aria-expanded={item.dropdown ? 'false' : undefined}
                        >
                          {item.label}
                        </Link>
                        {item.dropdown && (
                          <div
                            className="dropdown-menu mega_menu_wrapper"
                            aria-labelledby="company_submenu"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-lg-9">
                                  <div className="megamenu_pages_wrapper mb-5">
                                    <div className="row">
                                      {item.dropdown.map((dropdownItem, idx) => (
                                        <div className="col-lg-3 col-md-6" key={idx}>
                                          <Link className="iconbox_block_2" href={dropdownItem.href}>
                                            <span className="icon_title_wrap">
                                              <small className="iconbox_icon">
                                                <Image
                                                  width={16}
                                                  height={16}
                                                  src={dropdownItem.icon}
                                                  alt={`${dropdownItem.label} Icon`}
                                                />
                                              </small>
                                              <small className="iconbox_title">
                                                {dropdownItem.label}
                                              </small>
                                            </span>
                                            <span className="description mb-0">
                                              {dropdownItem.description}
                                            </span>
                                          </Link>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <ul className="btns_group p-0 unordered_list justify-content-start">
                                    {buttons.map((button, idx) => (
                                      <li key={idx}>
                                        <Link className={button.className} href={button.href}>
                                          <span className="btn_label" data-text={button.label}>
                                            {button.label}
                                          </span>
                                          <span className="btn_icon">
                                            <i className={button.icon} />
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                    {reviewLogos.map((logo, idx) => (
                                      <li key={idx}>
                                        <div className="review_short_info_2">
                                          <div className="review_admin_logo">
                                            <Image
                                              width={logo.width}
                                              height={logo.height}
                                              src={logo.src}
                                              alt={logo.alt}
                                            />
                                          </div>
                                          <div className="review_info_content">
                                            <ul className="rating_block unordered_list">
                                              {[...Array(5)].map((_, i) => (
                                                <li key={i}>
                                                  <i className="fa-solid fa-star fa-fw" />
                                                </li>
                                              ))}
                                            </ul>
                                            <div className="review_counter">
                                              Lebih <b>200+</b> reviews
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <div className="site_author bg-primary">
                                    <div className="author_box">
                                      <div className="author_image bg-light">
                                        <Image
                                          width={1600}
                                          height={1600}
                                          src={author.image}
                                          alt="Mindkreativ CEO"
                                        />
                                      </div>
                                      <div className="author_box_content">
                                        <h3 className="author_name text-white">
                                          {author.name}
                                        </h3>
                                        <span className="author_designation text-white">
                                          {author.designation}
                                        </span>
                                      </div>
                                      <div className="quote_icon">
                                        <Image
                                          width={120}
                                          height={98}
                                          src={author.quoteIcon}
                                          alt="MindKreativ CEO"
                                        />
                                      </div>
                                    </div>
                                    <p className="mb-0 text-white">
                                      {author.quote}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                    <li>
                      <Link href={'career'}>Karir</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars" />
                  </button>
                </li>
                {buttons.map((button, idx) => (
                  <li key={idx}>
                    <Link className={button.className} href={button.href}>
                      <span className="btn_label" data-text={button.label}>
                        {button.label}
                      </span>
                      <span className="btn_icon">
                        <i className={button.icon} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heads;
