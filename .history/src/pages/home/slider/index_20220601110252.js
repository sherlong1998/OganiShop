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
      return (
        <div>
          <h2> Multiple items </h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }

function Slider() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe')}>
            <div className={cx('slider', 'row')}>
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food"/>
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food"/>
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food"/>
                <PostItem image={imageSlider} title="image slider" desc="Fresh Food"/>
            </div>
        </div>
    );
}

export default Slider;
