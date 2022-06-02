import styles from './BlogSidebar.module.scss';
import classNames from 'classnames/bind';
import imageNews from '../../../assets/image/blog/sidebar/sr-1.jpg';

let cx = classNames.bind(styles);

function BlogSidebar() {
    return (
        <div className={cx('wrapper', 'col', 'l-4')}>
            <div className={cx('blog_sidebar')}>
                <div className={cx('blog_sidebar_input')}>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className={cx('blog_sidebar_menu')}>
                    <h4>Categories</h4>
                    <ul>
                        <li>
                            <a href="/blog">All</a>
                        </li>
                        <li>
                            <a href="/blog">Beauty (20)</a>
                        </li>
                        <li>
                            <a href="/blog">Food (5)</a>
                        </li>
                        <li>
                            <a href="/blog">Life Style (9)</a>
                        </li>
                        <li>
                            <a href="/blog">Travel (10)</a>
                        </li>
                    </ul>
                </div>
                <div className={cx(styles.blog_sidebar_news)}>
                    <h4>Last Product</h4>
                    <div className={cx(styles.blog_sidebar_news_item)}>
                        <img src={imageNews} alt="recent news" />
                        <div className={cx(styles.blog_sidebar_news_item_text)}>
                            <h6>
                                09 Kinds Of Vegetables
                                <br /> Protect The Liver
                            </h6>
                            <span>MAR 05, 2019</span>
                        </div>
                    </div>
                    <div className={cx(styles.blog_sidebar_news_item)}>
                        <img src={imageNews} alt="recent news" />
                        <div className={cx(styles.blog_sidebar_news_item_text)}>
                            <h6>
                                Tips You To Balance
                                <br /> Nutrition Meal Day
                            </h6>
                            <span>MAR 05, 2019</span>
                        </div>
                    </div>
                    <div className={cx(styles.blog_sidebar_news_item)}>
                        <img src={imageNews} alt="recent news" />
                        <div className={cx(styles.blog_sidebar_news_item_text)}>
                            <h6>
                                4 Principles Help You Lose <br />
                                Weight With Vegetables
                            </h6>
                            <span>MAR 05, 2019</span>
                        </div>
                    </div>
                </div>
                <div className={cx(styles.blog_sidebar_search_by)}>
                    <h4>Popular size</h4>
                    <div className={styles.blog_sidebar_search_by_item}>
                        <label for="large">
                            <span>Apple</span>
                            <input type="radio" id="Apple" />
                        </label>
                    </div>
                    <div className={styles.blog_sidebar_search_by_item}>
                        <label for="large">
                            <span>Beauty</span>
                            <input type="radio" id="Apple" />
                        </label>
                    </div>
                    <div className={styles.blog_sidebar_search_by_item}>
                        <label for="large">
                            <span>Vegetables</span>
                            <input type="radio" id="Apple" />
                        </label>
                    </div>
                    <div className={styles.blog_sidebar_search_by_item}>
                        <label for="large">
                            <span>Fruits</span>
                            <input type="radio" id="Apple" />
                        </label>
                    </div>
                    <div className={styles.blog_sidebar_search_by_item}>
                        <label for="large">
                            <span>Apple</span>
                            <input type="radio" id="Apple" />
                        </label>
                    </div>
                    <div className={styles.blog_sidebar_search_by_item}>
                        <label for="large">
                            <span>Apple</span>
                            <input type="radio" id="Apple" />
                        </label>
                    </div>
                    <div className={styles.blog_sidebar_search_by_item}>
                        <label for="large">
                            <span>Apple</span>
                            <input type="radio" id="Apple" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSidebar;
