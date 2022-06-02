import { useState, useEffect } from 'react';
import styles from './Featured.module.scss';
import classNames from 'classnames/bind';
import imageFeatured from '../../../assets/image/featured/feature-1.jpg';
import imageFeatured1 from '../../../assets/image/featured/feature-2.jpg';
let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('featured_item', 'col', 'l-3', 'm-6', 'c-12')}>
            <img src={props.image} alt={props.title} />
            <div className={cx('featured_item_text')}>
                <h6>
                    <a href="/">{props.desc}</a>
                </h6>
                <h5>{props.price}</h5>
            </div>
        </div>
    );
}

const menu = [
    {
        id: 1,
        image: imageFeatured,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
    },
    {
        id: 1,
        image: imageFeatured1,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
    },
    {
        id: 1,
        image: imageFeatured,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
    },
    {
        id: 1,
        image: imageFeatured,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
    },
    {
        id: 1,
        image: imageFeatured,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
    },
    {
        id: 1,
        image: imageFeatured,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
    },
    {
        id: 1,
        image: imageFeatured,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
    },
    {
        id: 1,
        image: imageFeatured,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
    },
    {
        id: 1,
        image: imageFeatured,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
    },
];

function Featured() {

    const [item, setItems] = useState('');

    const featureMenu = ["All","Orange","Fresh Meat","Vegetable","Fas"]
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('featured')}>
                <div className={cx('featured_top')}>
                    <div className={cx('featured_title')}>
                        <h2>Featured Product</h2>
                    </div>
                    <div className={cx('featured_controls')}>
                        <ul>
                            <li>All</li>
                            <li>Oranges</li>
                            <li>Fresh Meat</li>
                            <li>Vegetables</li>
                            <li>Fastfood</li>
                        </ul>
                    </div>
                </div>
                <div className={cx('featured_product', 'row')}>
                    {menu.map((props, index) => (
                        <PostItem image={props.image} title={props.title} desc={props.desc} price={props.price} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Featured;
