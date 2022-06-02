import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';
import imageBlog from '../../../'
let cx = classNames.bind(styles);

function BlogContent() {
    return (
        <div className={cx('wrapper','col','l-8')}>
            <div className={cx('blog_content','row')}>
                <div className={cx('blog_content_item','l-6','col')}>
                    <img></img>
                </div>
                <div className={cx('blog_content_item','l-6','col')}>
                    <img></img>

                </div>
            </div>
        </div>
    );
}
export default BlogContent;
