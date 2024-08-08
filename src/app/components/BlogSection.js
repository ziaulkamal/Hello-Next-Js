import Image from "next/image";
import Link from "next/link";

import styles from '@/styles/style.module.css';

const BlogSection = () => {
  return (
    <section className={`${styles.headingFocusFrontPage} blog_section blog_section_space section_decoration`}>
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            >
            Our Articles
          </div>
          <h2 className="heading_text mb-0">
            Latest
            <mark> Articles</mark>
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="blog_post_block layout_2">
              <div className="blog_post_image">
                <Link className="image_wrap" href="blog_details.html">
                  <Image width={410} height={326}  src="/images/blog/blog_post_image_12.webp" alt="Blog Post Image 1"/>
                  <i className="fa-solid fa-arrow-up-right"/>
                </Link>
              </div>
              <div className="blog_post_content p-0">
                <h3 className="blog_post_title mb-0">
                  <Link href="blog_details.html">
                    How Our Software Solutions Drive Insights.
                  </Link>
                </h3>
                <ul className="post_meta unordered_list">
                  <li>
                    <Link href="#!">
                      <i className="fa-regular fa-circle-user"/>
                      By
                      <b>Alex</b>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <Image width={18} height={16} src="/images/icons/icon_calendar.svg" alt="Icon Calendar"/>{" "}
                      11/12/2024
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fa-regular fa-comment-lines"/>
                      24
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_post_block layout_2">
              <div className="blog_post_image">
                <Link className="image_wrap" href="blog_details.html">
                  <Image width={410} height={326} src="/images/blog/blog_post_image_13.webp" alt="Blog Post Image 1"/>
                  <i className="fa-solid fa-arrow-up-right"/>
                </Link>
              </div>
              <div className="blog_post_content p-0">
                <h3 className="blog_post_title mb-0">
                  <Link href="blog_details.html">
                    Exploring Emerging Trends in Software Development.
                  </Link>
                </h3>
                <ul className="post_meta unordered_list">
                  <li>
                    <Link href="#!">
                      <i className="fa-regular fa-circle-user"/>
                      By
                      <b>Alex</b>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <Image width={18} height={16} src="/images/icons/icon_calendar.svg" alt="Icon Calendar"/>{" "}
                      11/12/2024
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fa-regular fa-comment-lines"/>
                      24
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_post_block layout_2">
              <div className="blog_post_image">
                <Link className="image_wrap" href="blog_details.html">
                  <Image width={410} height={326} src="/images/blog/blog_post_image_14.webp" alt="Blog Post Image 1"/>
                  <i className="fa-solid fa-arrow-up-right"/>
                </Link>
              </div>
              <div className="blog_post_content p-0">
                <h3 className="blog_post_title mb-0">
                  <Link href="blog_details.html">
                    How Software Integration Can Improve Workflow.
                  </Link>
                </h3>
                <ul className="post_meta unordered_list">
                  <li>
                    <Link href="#!">
                      <i className="fa-regular fa-circle-user"/>
                      By
                      <b>Alex</b>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <Image width={18} height={16} src="/images/icons/icon_calendar.svg" alt="Icon Calendar"/>{" "}
                      11/12/2024
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fa-regular fa-comment-lines"/>
                      24
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <Image width={204} height={337}  src="/images/shapes/shape_line_7.svg" alt="Techco Shape"/>
      </div>
      <div className="decoration_item shape_image_2">
        <Image width={265} height={363}  src="/images/shapes/shape_angle_4.webp" alt="Techco Shape Angle"/>
      </div>
    </section>

  );
}

export default BlogSection;