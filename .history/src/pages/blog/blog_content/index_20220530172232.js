import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';
import imageBlog from '../../../assets/image/blog/blog-1.jpg';
let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('from_blog_item', 'col', 'l-6')}>
            <img src={props.image} alt={props.title} />
            <div className={cx('from_blog_text')}>
                <span>{props.date}</span>
                <h3>{props.title_content}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

function BlogContent() {
    return (
        <div className={cx('wrapper', 'col', 'l-8')}>
            <div className={cx('blog_content', 'row')}>
               
            </div>
        </div>
    );
}
export default BlogContent;
