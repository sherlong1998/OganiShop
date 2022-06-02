import styles from './Blog.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function Blog(){
    return (
        <div className = {cx('wrapper','col','l-3')}>
            <div className = {cx('shop_sidebar')}>
                
            </div>
        </div>
    );
}
export default Blog;