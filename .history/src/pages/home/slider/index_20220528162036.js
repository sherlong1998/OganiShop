import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

import imageSlider from  '../../../assets/image/categories/cat-1.jpg';

let cx = classNames.bind(styles);

function PostItem(props){
    return(
        <div className={cx('slider_item', 'l-3', 'col')}>
            <img
                src={props.image}
                alr={props.title}
            />
        </div>
    )
}

function Slider() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe','row')}>
            <div className={cx('slider',)}></div>
            <PostItem
                image={imageSlider}
                title="image slider"
            />
            <PostItem
                image={imageSlider}
                title="image slider"
            />
            <PostItem
                image={imageSlider}
                title="image slider"
            />
            <PostItem
                image={imageSlider}
                title="image slider"
            />
        </div>
    );
}

export default Slider;
