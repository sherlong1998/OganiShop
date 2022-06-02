import BlogBanner from './blog_banner';
import BlogContent from './blog_content';
import BlogSidebar from './blog_sidebar';

var classNames = require('classnames');

function () {
    return (
        <div>
            <Banner />
            <div className = "grid wipe row">
                <Sidebar/>
                <Content/>
            </div>
        </div>
    );
}

export default ;
export default Blog;