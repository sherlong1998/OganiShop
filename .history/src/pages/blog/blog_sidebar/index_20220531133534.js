import styles from './BlogSidebar.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function BlogSidebar() {
    return (
        <div className={cx('wrapper', 'col', 'l-4')}>
            <div className={cx('blog_sidebar')}>
                <div className={cx('blog_sidebar_input')}>
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className={cx('blog_sidebar_menu')}>
                            <h4>Categories</h4>
                            <ul>
                                <li><a href="/blog">All</a></li>
                                <li><a href="#/">Beauty (20)</a></li>
                                <li><a href="#">Food (5)</a></li>
                                <li><a href="#">Life Style (9)</a></li>
                                <li><a href="#">Travel (10)</a></li>
                            </ul>
                </div>
                <div className={cx('blog_sidebar_news')}></div>
                <div className={cx('blog_sidebar_search_by')}></div>
            </div>
        </div>
    );
}

export default BlogSidebar;
