import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef, Component } from 'react';
import SliderStyle from 'react-slick';

import imageSlider from '../../../assets/image/categories/cat-1.jpg';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('slider_item')}>
            <img src={props.image} alt={props.title} />
            <h5 className={cx('post_desc')}>
                <a href="/shop">{props.desc}</a>
            </h5>
        </div>
    );
}
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 1000,
            cssEase: "linear"
        };
        return (
            <div className={cx('wrapper', 'grid', 'wipe')}>
//             <div className={cx('slider', 'row')}>
                <h2> Multiple items </h2>
                <SliderStyle {...settings}>
                    <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
                    <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
                    <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
                    <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
                </SliderStyle>
            </div>
        );
    }
}
// function Slider() {

//     return (
//         <div className={cx('wrapper', 'grid', 'wipe')}>
//             <div className={cx('slider', 'row')}>
//                     <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
//                     <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
//                     <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
//                     <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
//             </div>
//         </div>
//     );
// }

// export default Slider;
