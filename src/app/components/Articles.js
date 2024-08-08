import Image from "next/image";
import SocialShare from "./SocialShare";
import Link from "next/link";
import SocialAuthor from "./SocialAuthor";
import CommentArea from "./CommentArea";


const Articles = ({ title, date, author, content, slug, thumbnail, keywords, category }) => {
      // Fungsi untuk mendapatkan paragraf ketiga dari konten
    function getThirdParagraph(text) {
        // Jika text tidak ada atau kosong, kembalikan teks default
        if (!text) {
        return '';
        }

        // Membagi teks menjadi paragraf berdasarkan newline
        const paragraphs = text.split(/\r?\n\r?\n/);

        // Mengambil paragraf ketiga jika ada
        return paragraphs[2] || ' ';
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min); // Membulatkan ke atas untuk memastikan min termasuk
        max = Math.floor(max); // Membulatkan ke bawah untuk memastikan max termasuk
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getCategory(category) {
        return category || "No Category";
    }

    function getDate(date) {
        if (!date) {
            const today = new Date();
            return formatDate(today);
        }
        
        const parsedDate = new Date(date);
        return formatDate(parsedDate);
    }

    function formatDate(date) {
        const options = {
            weekday: 'long', // Nama hari dalam minggu
            year: 'numeric', // Tahun dalam format numerik
            month: 'long',   // Nama bulan dalam format panjang
            day: 'numeric'   // Tanggal dalam format numerik
        };
        return date.toLocaleDateString('en-US', options);
    }

    function getAuthor(author) {
        return author || 'Admin';
    }

    // Mendapatkan paragraf ketiga
    const thirdParagraph = getThirdParagraph(content);

    const randComment = getRandomInt(10,100);
    const randViews = getRandomInt(10,100);

    const setAuthor = getAuthor(author);
    const setDate = getDate(date);
    const setCategory = getCategory(category);

  return (
    <section className="blog_details_section section_space bg-light">
      <div className="container">
        <div className="details_item_image">
          <Image width={1290} height={960} src="/images/blog/blog_post_image_8.webp" alt="Techco - Blog Image"/>
        </div>
        <div className="post_meta_wrap mb-4">
          <ul className="category_btns_group unordered_list">
            <li>
              <Link href="#">{setCategory}</Link>
            </li>
          </ul>
          <ul className="post_meta unordered_list">
            <li>
              
                <Image width={18} height={16} src="/images/icons/icon_calendar.svg" alt="Icon Calendar"/>
                {setDate}
              
            </li>
          </ul>
        </div>
        <h2 className="details_item_title">
          {title}
        </h2>
        <p>
          {thirdParagraph}
        </p>
        <div className="row align-items-center">
          <div className="col-md-6">
            <ul className="post_meta unordered_list">
              <li>
                <a href="#!">
                  <Image width={16} height={20} src="/images/icons/icon_user.svg" alt="Icon User"/>
                  by {setAuthor}
                </a>
              </li>
              <li>
                <a href="#!">
                  <Image width={20} height={20} src="/images/icons/icon_chat.svg" alt="Icon Chat"/>
                  {randComment} Comments
                </a>
              </li>
              <li>
                <a href="#!">
                  <Image width={18} height={16} src="/images/icons/icon_eye.svg" alt="Icon Eye"/>
                  {randViews}k Views
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="post_meta unordered_list justify-content-md-end">
              <li>
                <a href="#!">
                  <Image width={18} height={18} src="/images/icons/icon_link.svg" alt="Icon Link"/>
                  Copy Link
                </a>
              </li>
              <li>
                <a href="#!">
                  <Image width={16} height={20} src="/images/icons/icon_bookmark.svg" alt="Bookmark Chat"/>
                  Bookmark
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mb-0"/>
        <div className="section_space pb-0 pt-5">
          <div className="row">
            <div className="col-lg-8">
              <h3 className="details_item_info_title mb-5">
                Revolutionizing Business Efficiency Navigating Growth with Optimal IT
                Infrastructure Enhancement
              </h3>
              <div className="row mb-4">
                <div className="col-md-6 col-sm-6">
                  <div className="details_item_image m-0">
                    <img src="/images/blog/blog_post_image_9.webp" alt="Techco - Blog Image"/>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="details_item_image m-0">
                    <img
                      src="/images/blog/blog_post_image_10.webp"
                      alt="Techco - Blog Image"/>
                  </div>
                </div>
              </div>
              <p>
                Gain exclusive insights into the world of IT solutions with Techco's
                distinguished thought leaders. With years of experience and a deep understanding
                of industry trends, our thought leaders offer invaluable perspectives that
                illuminate the path to technological excellence. From emerging technologies to
                innovative strategies, they provide unique insights that inform and inspire.
                Join us as we delve into the inner workings of IT solutions, exploring the
                challenges.
              </p>
              <p>
                Embark on an illuminating journey into the world of IT solutions with Techco's
                esteemed thought leaders. Delve deep into the inner workings of technology as
                our seasoned experts share their wealth of knowledge and experience. With a
                finger on the pulse of industry trends and a keen eye for innovation, our
                thought leaders offer unparalleled insights that illuminate the path
              </p>
              <h3 className="details_item_info_title">Sample Heading</h3>
              <p>
                they provide a comprehensive and in-depth analysis that goes beyond
                surface-level . Join us as we uncover the secrets of IT solutions, guided by the
                wisdom and expertise of Techco's thought leaders. Prepare to be inspired,
                informed, and empowered to navigate the ever- landscape of technology with
                confidence and clarity. you'll gain access to unparalleled expertise and
                discover new possibilities for success in the ever-evolving world of technology.
              </p>
              <div className="row align-items-center mb-5">
                <div className="col-md-6">
                  <div className="details_item_image m-0">
                    <img
                      src="/images/blog/blog_post_image_11.webp"
                      alt="Techco - Blog Image"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <ul className="icon_list unordered_list_block">
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"/>
                      </span>
                      <span className="icon_list_text">
                        Unveiling Emerging Technologies
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"/>
                      </span>
                      <span className="icon_list_text">
                        Navigating Complex Challenges
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"/>
                      </span>
                      <span className="icon_list_text">
                        Forecasting Future Trends
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"/>
                      </span>
                      <span className="icon_list_text">
                        Driving Innovation Strategies
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"/>
                      </span>
                      <span className="icon_list_text">
                        Exploring Industry Practices
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_icon">
                        <i className="fa-solid fa-circle fa-fw"/>
                      </span>
                      <span className="icon_list_text">
                        Empowering Transformation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="details_item_info_title">
                3 Reasons to investing at this moment
              </h3>
              <p className="mb-2">
                Here are three key reasons emphasizing the importance of optimizing IT
                infrastructure for efficiency and growth:import CommentArea from './CommentArea';

              </p>
              <ul className="icon_list unordered_list_block mb-5">
                <li>
                  <span className="icon_list_text">
                    1. Enhanced Operational Agility
                  </span>
                </li>
                <li>
                  <span className="icon_list_text">
                    2. Resource Optimization &amp; Cost Efficiency
                  </span>
                </li>
                <li>
                  <span className="icon_list_text">
                    3. Scalability and Innovation
                  </span>
                </li>
              </ul>
              <hr className="mt-0 mb-5"/>
              <div className="row">
                <div className="col-md-6">
                  <ul className="tags_list unordered_list">
                    <li>
                      <a href="#!">Solution</a>
                    </li>
                    <li>
                      <a href="#!">Consultants</a>
                    </li>
                    <li>
                      <a href="#!">IT</a>
                    </li>
                  </ul>
                </div>
                <SocialShare />
              </div>
              <SocialAuthor />
              <div className="other_posts_nav">
                <a href="#!">
                  <i className="fa-regular fa-arrow-left-long"/>
                  <span>
                    <strong>Exploring IT Solutions with Techco</strong>
                    <small>Dec 24, 2024</small>
                  </span>
                </a>
                <a href="blog.html">
                  <i className="fa-solid fa-grid-2"/>
                </a>
                <a href="#!">
                  <span>
                    <strong>Exploring IT Solutions with Techco</strong>
                    <small>Dec 24, 2024</small>
                  </span>
                  <i className="fa-regular fa-arrow-right-long"/>
                </a>
              </div>
               {/* <CommentArea /> */}
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ps-lg-5">
                <div className="search_form">
                  <h3 className="sidebar_widget_title">Search</h3>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="search"
                      name="search"
                      placeholder="Search your keyword"/>
                    <button type="submit">
                      <img src="/images/icons/icon_search.svg" alt="Search Icon"/>
                    </button>
                  </div>
                </div>
                <div className="post_list_block">
                  <h3 className="sidebar_widget_title">Related Posts</h3>
                  <ul className="unordered_list_block">
                    <li>
                      <h3 className="post_title">
                        <a href="blog_details.html">
                          Discovering IT Solutions with Experts - Gain Exclusive..
                        </a>
                      </h3>
                      <ul className="post_meta unordered_list">
                        <li>
                          <a href="#!">
                            <img src="/images/icons/icon_calendar.svg" alt="Icon Calendar"/>{" "}
                            11/12/2024
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-regular fa-comment-lines"/>
                            24
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="post_title">
                        <a href="blog_details.html">
                          Insights from Empowering Your Business through..
                        </a>
                      </h3>
                      <ul className="post_meta unordered_list">
                        <li>
                          <a href="#!">
                            <img src="/images/icons/icon_calendar.svg" alt="Icon Calendar"/>{" "}
                            11/12/2024
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-regular fa-comment-lines"/>
                            24
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="post_title">
                        <a href="blog_details.html">
                          Insights into IT Solutions with Transform Your Operations..
                        </a>
                      </h3>
                      <ul className="post_meta unordered_list">
                        <li>
                          <a href="#!">
                            <img src="/images/icons/icon_calendar.svg" alt="Icon Calendar"/>{" "}
                            11/12/2024
                          </a>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="fa-regular fa-comment-lines"/>
                            24
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="post_category_wrap">
                  <h3 className="sidebar_widget_title">Categories</h3>
                  <ul className="post_category_list unordered_list_block">
                    <li>
                      <a href="#!">
                        <i className="fa-solid fa-arrow-up-right"/>
                        <span>Cybersecurity</span>
                        <span>(05)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa-solid fa-arrow-up-right"/>
                        <span>Tech Trends</span>
                        <span>(02)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa-solid fa-arrow-up-right"/>
                        <span>Digital Transformation</span>
                        <span>(02)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa-solid fa-arrow-up-right"/>
                        <span>IT Infrastructure</span>
                        <span>(04)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa-solid fa-arrow-up-right"/>
                        <span>Mobile App</span>
                        <span>(03)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="fa-solid fa-arrow-up-right"/>
                        <span>Cloud Computing</span>
                        <span>(07)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popular_tags">
                  <h3 className="sidebar_widget_title">Popular Tags</h3>
                  <ul className="tags_list unordered_list">
                    <li>
                      <a href="#!">Cybersecurity</a>
                    </li>
                    <li>
                      <a href="#!">TechSolutions</a>
                    </li>
                    <li>
                      <a href="#!">UX Design</a>
                    </li>
                    <li>
                      <a href="#!">App Dev</a>
                    </li>
                    <li>
                      <a href="#!">Data</a>
                    </li>
                    <li>
                      <a href="#!">Solution</a>
                    </li>
                    <li>
                      <a href="#!">Consultants</a>
                    </li>
                    <li>
                      <a href="#!">IT</a>
                    </li>
                    <li>
                      <a href="#!">Optimization</a>
                    </li>
                    <li>
                      <a href="#!">Startup</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Articles;