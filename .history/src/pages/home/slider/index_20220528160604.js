import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

import imageSlider from  '../../../assets/image/categories/cat-1.jpg';

let cx = classNames.bind(styles);

function postItem(props){
    return(
        <div className={cx('slider', 'l-3', 'col')}>
            <img
                src={props.image}
                alr={props.title}
            />
        </div>
    )
}

function Slider() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            postItem
            <div className={cx('slider', 'l-3', 'col')}>{/* Slider */}</div>
            <div className={cx('slider', 'l-3', 'col')}>{/* Slider */}</div>
            <div className={cx('slider', 'l-3', 'col')}>{/* Slider */}</div>
        </div>
    );
}

export default Slider;
