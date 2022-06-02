import styles from  './Slider.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Slider() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('Slider','l-9')}>
                {/* Slider */}
            </div>
            
        </div>
    );
}

export default Slider;
