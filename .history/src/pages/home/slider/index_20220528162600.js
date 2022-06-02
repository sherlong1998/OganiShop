import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

import imageSlider from '../../../assets/image/categories/cat-1.jpg';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('slider_item', 'l-3', 'col')}>
            <img src={props.image} alr={props.title} />
            <h5 className={cx('post_desc')}><a href="#">{pr}</a></h5>
        </div>
    );
}

function Slider() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe')}>
            <div className={cx('slider', 'row')}>
                <PostItem image={imageSlider} title="image slider" />
                <PostItem image={imageSlider} title="image slider" />
                <PostItem image={imageSlider} title="image slider" />
                <PostItem image={imageSlider} title="image slider" />
            </div>
        </div>
    );
}

export default Slider;
