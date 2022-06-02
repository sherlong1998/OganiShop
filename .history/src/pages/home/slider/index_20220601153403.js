import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
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

function Slider() {
    const ref = useRef({});

    const next = () => {
        ref.current.slickNext();
    };

    const previous = () => {
        ref.current.slickPrev();
    };
    const settings = {
        className: 'section-outstanding__slider',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        rows: 2,
        responsive: [
            {
                breakpoint: 1198,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
        ],
    };
    return (
        <div className={cx('wrapper', 'grid', 'wipe')}>
            <div className={cx('slider', 'row')}>
            <SliderStyleee ref={ref} {...settings}>
                </SliderStyle>
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food" />
            </div>
        </div>
    );
}

export default Slider;
