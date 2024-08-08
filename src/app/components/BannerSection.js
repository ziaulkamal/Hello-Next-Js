
import styles from '@/styles/style.module.css';
const BannerSection = ({ section, title, category }) => {
    return (
        <section
            className={styles.pageBannerSection}>
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
