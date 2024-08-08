const BannerSection = ({ section, title, category }) => {
    return (
        <section
            className="page_banner_section text-center"
            style={{ backgroundImage: 'url("/images/shapes/bg_pattern_4.svg")' }}
        >
            <div className="container">
                <div className="heading_focus_text text-white">
                    {section}
                    <span className="badge bg-secondary">{category}</span>
                </div>
                <h1 className="page_title mb-0 text-white">{title}</h1>

            </div>
        </section>
    );
}

export default BannerSection;
