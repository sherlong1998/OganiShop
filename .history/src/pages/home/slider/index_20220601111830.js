import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import{useState} from 'react'
import SliderStyle from "react-slick";


import imageSlider from '../../../assets/image/categories/cat-1.jpg';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('slider_item', 'l-3','m-6', 'col')}>
            <img src={props.image} alt={props.title} />
            <h5 className={cx('post_desc')}><a href="/shop">{props.desc}</a></h5>
        </div>
    );
}

function Slider() {
    const [nav2, setNav2] = useState();
    return (
        <div className={cx('wrapper', 'grid', 'wipe')}>
            <div className={cx('slider', 'row')}>
            <SliderStyle
        asNavFor={nav1}
        const [nav2, setNav2] = useState();
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food"/>
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food"/>
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food"/>
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food"/>
            
            </SliderStyle>
            </div>
        </div>
    );
}

export default Slider;
