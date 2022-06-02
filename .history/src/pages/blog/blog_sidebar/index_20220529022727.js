import styles from './BlogSidebar.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function BlogSidebar(){
    return (
        <div className = {cx('wrapper','col','l-3')}>
            <div className = {cx('blog_sidebar')}>
                
            </div>
        </div>
    );
}
export default BlogSidebar;