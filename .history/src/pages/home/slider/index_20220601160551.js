import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef, Component } from 'react';
import SliderStyle from 'react-slick';

import imageSlider1 from '../../../assets/image/categories/cat-1.jpg';
import imageSlider2 from '../../../assets/image/categories/cat-2.jpg';
import imageSlider3 from '../../../assets/image/categories/cat-3.jpg';
import imageSlider4 from '../../../assets/image/categories/cat-4.jpg';
import imageSlider5 from '../../../assets/image/categories/cat-5.jpg';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('slider_item', 'col')}>
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
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: 'ease',
        };
        return (
            <div className={cx('wrapper', 'grid', 'wipe')}>
                <div className={cx('slider')}>
                    <SliderStyle {...settings}>
                        <PostItem image={imageSlider1} title="image slider" desc="Fresh Food" />
                        <PostItem image={imageSlider2} title="image slider" desc="Fresh Food" />
                        <PostItem image={imageSlider3} title="image slider" desc="Fresh Food" />
                        <PostItem image={imageSlider4} title="image slider" desc="Fresh Food" />
                        <PostItem image={imageSlider5} title="image slider" desc="Fresh Food" />
                    </SliderStyle>
                </div>
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
