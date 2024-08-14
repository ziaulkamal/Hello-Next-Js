import BannerSection from "../components/BannerSection";
import WidgetArea from "../components/WidgetArea";


const googleTrends = () => {
    return(
    <>
            <BannerSection 
                section={('articles')} 
                title={'Related Articles'} 
                category={('Google Trends')} 
            />
            <section className="blog_section section_space bg-light">
            <div className="container">
                <div className="blog_onecol_carousel overflow-hidden">
                <div className="b1cc-swiper-pagination p-0" />
                </div>
                <div className="section_space pb-0">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="blog_post_block image_left_layout">
                        <div className="blog_post_content">
                        <div className="post_meta_wrap">
                            <ul className="category_btns_group unordered_list">
                            <li>
                                <a href="#!">Tips &amp; Tricks</a>
                            </li>
                            </ul>
                            <ul className="post_meta unordered_list">
                            <li>
                                <a href="#!">
                                <img
                                    src="assets/images/icons/icon_calendar.svg"
                                    alt="Icon Calendar"
                                />{" "}
                                11/12/2024
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                <i className="fa-regular fa-comment-lines" /> 24
                                </a>
                            </li>
                            </ul>
                        </div>
                        <h3 className="blog_post_title">
                            <a href="blog_details.html">
                            Insider Perspectives on IT Solutions with Techco Thought
                            Leaders.
                            </a>
                        </h3>
                        <p>
                            Dive deep into the world of IT solutions with Techco's esteemed
                            thought leaders. With unrivaled expertise and a passion for
                            innovation,.
                        </p>
                        <a className="btn btn-dark" href="blog_details.html">
                            <span className="btn_label" data-text="Read More">
                            Read More
                            </span>
                            <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right" />
                            </span>
                        </a>
                        </div>
                    </div>

                    <div className="pagination_wrap pb-0">
                        <ul className="pagination_nav unordered_list justify-content-center">
                        <li>
                            <a href="#!">
                            <i className="fa-solid fa-angles-left" />
                            </a>
                        </li>
                        <li className="active">
                            <a href="#!">1</a>
                        </li>
                        <li>
                            <a href="#!">2</a>
                        </li>
                        <li>
                            <a href="#!">3</a>
                        </li>
                        <li>
                            <a href="#!">...</a>
                        </li>
                        <li>
                            <a href="#!">10</a>
                        </li>
                        <li>
                            <a href="#!">
                            <i className="fa-solid fa-angles-right" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>


                </div>
                </div>
            </div>
            </section>
</>
    )
}

export default googleTrends;