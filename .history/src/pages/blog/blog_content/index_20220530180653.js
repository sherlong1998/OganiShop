import styles from './BlogContent.module.scss';
import classNames from 'classnames/bind';
import imageBlog from '../../../assets/image/blog/blog-1.jpg';
let cx = classNames.bind(styles);

function PostItem(props) {
    return (
        <div className={cx('blog_content_item', 'col', 'l-6')}>
            <img src={props.image} alt={props.title} />
            <div className={cx('blog_content_item_text')}>
                <span>{props.date}</span>   
                <h3>{props.title_content}</h3>
                <p>{props.desc}</p>
                <a>
                    read more
                </a>
            </div>
        </div>
    );
}

function BlogContent() {
    return (
        <div className={cx('wrapper', 'col', 'l-8')}>
            <div className={cx('blog_content', 'row')}>
                <PostItem
                    image={imageBlog}
                    title="image blog"
                    date="May 4, 2019"
                    title_content="Cooking tips make cooking simple"
                    desc="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
                />
                <PostItem
                    image={imageBlog}
                    title="image blog"
                    date="May 4, 2019"
                    title_content="Cooking tips make cooking simple"
                    desc="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
                />
                <PostItem
                    image={imageBlog}
                    title="image blog"
                    date="May 4, 2019"
                    title_content="Cooking tips make cooking simple"
                    desc="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
                />
                <PostItem
                    image={imageBlog}
                    title="image blog"
                    date="May 4, 2019"
                    title_content="Cooking tips make cooking simple"
                    desc="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
                />
                <PostItem
                    image={imageBlog}
                    title="image blog"
                    date="May 4, 2019"
                    title_content="Cooking tips make cooking simple"
                    desc="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
                />
                <PostItem
                    image={imageBlog}
                    title="image blog"
                    date="May 4, 2019"
                    title_content="Cooking tips make cooking simple"
                    desc="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"
                />
            </div>
            <div className={cx('shop_content_pagination')}>
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                </div>
        </div>
    );
}
export default BlogContent;
