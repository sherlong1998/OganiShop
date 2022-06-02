import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function BlogContent() {
    return (
        <div className={cx('wrapper','col','l-9')}>
            <div className={cx('blog_content')}></div>
        </div>
    );
}
export default BlogContent;
