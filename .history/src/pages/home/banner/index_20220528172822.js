import styles from  './Banner.module.scss';
import classNames from 'classnames/bind';
import banner


let cx = classNames.bind(styles);
function Banner() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('banner')}>
                <img />
            </div>
            
        </div>
    );
}

export default Banner;
