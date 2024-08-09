import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/style.module.css';
import blogData from '@/app/data/blogSection.json'; // Import JSON data

const BlogSection = () => {
  const { section } = blogData;

  return (
    <section className={`${styles.headingFocusFrontPage} blog_section blog_section_space section_decoration`}>
      <div className="container">
        <div className="heading_block text-center">
          <div className="heading_focus_text has_underline d-inline-flex">
            {section.heading.title}
          </div>
          <h2 className="heading_text mb-0" dangerouslySetInnerHTML={{ __html: section.heading.subtitle }}>
          </h2>
        </div>
        <div className="row justify-content-center">
          {section.posts.map((post, index) => (
            <div className="col-lg-4" key={index}>
              <div className="blog_post_block layout_2">
                <div className="blog_post_image">
                  <Link className="image_wrap" href={post.link}>
                    <Image width={410} height={326} src={post.image} alt={`Blog Post Image ${index + 1}`} />
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>
                <div className="blog_post_content p-0">
                  <h3 className="blog_post_title mb-0">
                    <Link href={post.link}>
                      {post.title}
                    </Link>
                  </h3>
                  <ul className="post_meta unordered_list">
                    <li>
                      <Link href="#!">
                        <i className="fa-regular fa-circle-user" />
                        By
                        <b>{post.author}</b>
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <Image width={18} height={16} src="/images/icons/icon_calendar.svg" alt="Icon Calendar" />{" "}
                        {post.date}
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <i className="fa-regular fa-comment-lines" />
                        {post.comments}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {section.decoration.map((item, index) => (
        <div className={`decoration_item shape_image_${index + 1}`} key={index}>
          <Image width={item.width} height={item.height} src={item.image} alt={item.alt} />
        </div>
      ))}
    </section>
  );
}

export default BlogSection;
