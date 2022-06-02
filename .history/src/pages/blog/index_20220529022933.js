import BlogBanner from './blog_banner';
import BlogContent from './blog_content';
import BlogSidebar from './blog_sidebar';

var classNames = require('classnames');

function Blog() {
    return (
        <div>
            <BlogBanner />
            <div className = "grid wipe row">
                <BlogSidebar/>
                <BlogContent/>
            </div>
        </div>
    );
}

export default Blog;
export default Blog;