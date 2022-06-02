import styles from './BlogSidebar.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function BlogSidebar() {
    return (
        <div className={cx('wrapper', 'col', 'l-4')}>
            <div className={cx('blog_sidebar')}>
                <div className={cx('blog_sidebar_menu')}></div>
                <div className={cx('shop_sidebar_price')}></div>
                <div className={cx('shop_sidebar_color')}></div>
                <div className={cx('shop_sidebar_size')}></div>
                <div className={cx('shop_sidebar_product')}></div>
            </div>
        </div>
    );
}
export default BlogSidebar;
