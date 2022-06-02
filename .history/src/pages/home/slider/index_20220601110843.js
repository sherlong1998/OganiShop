import React, { Component } from 'react';

import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import SliderStyle from 'react-slick';

import imageSlider from '../../../assets/image/categories/cat-1.jpg';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('slider_item', 'l-3', 'm-6', 'col')}>
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
        };
        return (
            <div>
                <h2> Multiple items </h2>
                <SliderStyle {...settings}>
                import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
                </SliderStyle>
            </div>
        );
    }
}
