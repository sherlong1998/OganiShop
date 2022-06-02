import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import bannerImage from '../../../assets/image/breadcrumb.jpg'
let cx = classNames.bind(styles);

function Blog(){
    return (
        <div className = {cx('wrapper')}>
            <div className = {cx('shop_banner')}>
                <img src={bannerImage} alt="banner" />
            </div>
        </div>
    );
}
export default Blog;