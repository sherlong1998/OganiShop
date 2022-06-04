import styles from './FromBlog.module.scss';
import classNames from 'classnames/bind';

import imageBlog1 from '../../../assets/image/fromblog/blog-1.jpg';
import imageBlog2 from '../../../assets/image/fromblog/blog-2.jpg';
import imageBlog3 from '../../../assets/image/fromblog/blog-3.jpg';

let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('from_blog_item', 'col', 'l-4','m-12')}>
            <img src={props.image} alt={props.title} />
            <div className={cx('from_blog_text')}>
                <span>{props.date}</span>
                <h3>{props.title_content}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

function FromBlog() {
    return (
        <div className={cx('wrapper', 'grid', 'wipe', 'row')}>
            <div className={cx('from_blog')}>
                <div className={cx('from_blog_title')}>
                    <h2>From The Blog</h2>
                </div>
                <div className={cx('from_blog_content','row')}>
                    <PostItem
                        image={imageBlog1}
                        title="image blog"
                        date="May 4, 2019"
                        title_content="Cooking tips make cooking simple"
                        desc="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
                    />
                    <PostItem
                        image={imageBlog2}
                        title="image blog"
                        date="May 4, 2019"
                        title_content="Cooking tips make cooking simple"
                        desc="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
                    />
                    <PostItem
                        image={imageBlog3}
                        title="image blog"
                        date="May 4, 2019"
                        title_content="Cooking tips make cooking simple"
                        desc="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
                    />
                </div>
            </div>
        </div>
    );
}

export default FromBlog;
