import React, { Component } from "react";

import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
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

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

function Slider() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe')}>
            <div className={cx('slider', 'row')}>
                <SliderStyle {...settings}>
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
