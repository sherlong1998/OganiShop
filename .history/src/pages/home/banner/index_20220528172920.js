import styles from  './Banner.module.scss';
import classNames from 'classnames/bind';
import bannerLeft from '../../../assets/image/banner/banner-1.jpg'


let cx = classNames.bind(styles);
function Banner() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('banner')}>
                <img src={bannerLeft} alt="banner left"/>
            </div>
            
        </div>
    );
}

export default Banner;
