import styles from './BlogBanner.module.scss';
import classNames from 'classnames/bind';
import bannerImage from '../../../assets/image/breadcrumb.jpg'
let cx = classNames.bind(styles);

function BlogBanner(){
    return (
        <div className = {cx('wrapper')}>
            <div className = {cx('blog_banner')}>
                <img src={bannerImage} alt="banner" />
            </div>
        </div>
    );
}
export default BlogBanner;