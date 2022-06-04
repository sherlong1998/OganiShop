import { useState, useEffect } from 'react';
import styles from './Featured.module.scss';
import classNames from 'classnames/bind';
import imageFeatured1 from '../../../assets/image/featured/feature-1.jpg';
import imageFeatured2 from '../../../assets/image/featured/feature-2.jpg';
import imageFeatured3 from '../../../assets/image/featured/feature-3.jpg';
import imageFeatured4 from '../../../assets/image/featured/feature-4.jpg';
import imageFeatured5 from '../../../assets/image/featured/feature-5.jpg';
import imageFeatured6 from '../../../assets/image/featured/feature-6.jpg';
import imageFeatured7 from '../../../assets/image/featured/feature-7.jpg';
import imageFeatured8 from '../../../assets/image/featured/feature-8.jpg';

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
        image: imageFeatured1,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
        type: ['Orange'],
    },
    {
        id: 1,
        image: imageFeatured2,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
        type: ['Fresh Meat', 'Orange'],
    },
    {
        id: 1,
        image: imageFeatured3,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
        type: ['Vegetable'],
    },
    {
        id: 1,
        image: imageFeatured4,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
        type: ['Fastfood'],
    },
    {
        id: 1,
        image: imageFeatured5,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
        type: ['Orange', 'Vegetable'],
    },
    {
        id: 1,
        image: imageFeatured6,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
        type: ['Orange'],
    },
    {
        id: 1,
        image: imageFeatured7,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
        type: ['Vegetable'],
    },
    {
        id: 1,
        image: imageFeatured8,
        title: 'image featured',
        desc: 'Crab Pool Security',
        price: '$30.00',
        type: ['Fastfood'],
    },
];

function Featured() {
    const [items, setItems] = useState([]);
    const [type, setType] = useState('All');
    const contents = ['All', 'Orange', 'Fresh Meat', 'Vegetable', 'Fastfood'];
    useEffect(() => {
        setItems(
            menu.filter((item) => {
                if (type === 'All') return true;
                return item.type.some((element) => element === type);
            }),
        );
    }, [type]);
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('featured')}>
                <div className={cx('featured_top')}>
                    <div className={cx('featured_title')}>
                        <h2>Featured Product</h2>
                    </div>
                    <div className={cx('featured_controls')}>
                        <ul>
                            {contents.map((content) => (
                                <li
                                    key={content}
                                    style={
                                        type === content
                                            ? {
                                                  color: '#7fad39',
                                              }
                                            : {}
                                    }
                                    onClick={() => setType(content)}
                                >
                                    {content}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={cx('featured_product', 'row')}>
                    {items.map((props, index) => (
                        <PostItem
                            key={index}
                            image={props.image}
                            title={props.title}
                            desc={props.desc}
                            price={props.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Featured;
