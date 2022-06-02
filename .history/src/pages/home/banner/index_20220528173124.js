import styles from  './Banner.module.scss';
import classNames from 'classnames/bind';
import bannerLeft from '../../../assets/image/banner/banner-1.jpg'
import bannerRight from '../../../assets/image/banner/banner-2.jpg'


let cx = classNames.bind(styles);
function Banner() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('banner')}>
                <img className= src={bannerLeft} alt="banner left"/>
                <img src={bannerRight} alt="banner right"/>
            </div>
            
        </div>
    );
}

export default Banner;
