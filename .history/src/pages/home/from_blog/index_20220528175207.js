import styles from  './FromBlog.module.scss';
import classNames from 'classnames/bind';

import imageBlog from '../../../assets/'

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('from_blog_item', 'col', 'l-4')}>
            <img src={props.image} alt={props.title} />
            <div className={cx('from_blog_text')}>
                <span>{props.date}</span>
                <h3>
                    {props.title_content}
                </h3>
                <p>{props.desc}</p>
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
                <div className={cx('from_blog_content')}>
                    <PostItem />
                </div>
            </div>
            
        </div>
    );
}

export default FromBlog;
