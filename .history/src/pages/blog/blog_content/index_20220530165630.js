import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function BlogContent() {
    return (
        <div className={cx('wrapper','col','l-8')}>
            <div className={cx('blog_content')}>
                <div className={cx('blog_content_item')}>
                    <img></img>
                </div>
            </div>
        </div>
    );
}
export default BlogContent;
