import styles from './Featured.module.scss';
import classNames from 'classnames/bind';
import imageFeatured from '../../../assets/image/featured/feature-1.jpg';
let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('featured_item', 'col', 'l-3')}>
            <img src={props.image} alt={props.title} />
            <div className="featured__item__text">
                <h6>
                    <a href="#">Crab Pool Security</a>
                </h6>
                <h5>$30.00</h5>
            </div>
        </div>
    );
}

function Featured() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('featured')}>
                <div className={cx('featured_top')}>
                    <div className={cx('featured_title')}>
                        <h2>Featured Product</h2>
                    </div>
                    <div className={cx('featured_controls')}>
                        <ul>
                            <li class="active" data-filter="*">
                                All
                            </li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
                <div className={cx('featured_product', 'row')}>
                    <PostItem image={imageFeatured} title="image featured" />
                    <PostItem image={imageFeatured} title="image featured" />
                    <PostItem image={imageFeatured} title="image featured" />
                    <PostItem image={imageFeatured} title="image featured" />
                    <PostItem image={imageFeatured} title="image featured" />
                    <PostItem image={imageFeatured} title="image featured" />
                    <PostItem image={imageFeatured} title="image featured" />
                    <PostItem image={imageFeatured} title="image featured" />
                </div>
            </div>
        </div>
    );
}

export default Featured;
