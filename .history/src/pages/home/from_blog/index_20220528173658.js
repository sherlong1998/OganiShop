import styles from  './FromBlog.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
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
