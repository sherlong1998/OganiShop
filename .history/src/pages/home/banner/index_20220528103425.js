import styles from  './Banner.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Banner() {
    return ( 
        <div className= {cx('wrapper','grid','row')}>

        </div>
    );
}

export default Banner;
