import styles from  './FromBlog.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('featured_item', 'col', 'l-3')}>
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
function FromBlog() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('from_blog')}>
                <div className= {cx('from_blog_title')}>
                    <h2>From The Blog</h2>
                </div>

            </div>
            
        </div>
    );
}

export default FromBlog;
