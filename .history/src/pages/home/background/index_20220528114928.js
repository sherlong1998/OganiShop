import styles from  './Background.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Background() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('banner','l-9')}>
                {/* banner */}
            </div>
            
        </div>
    );
}

export default Background;
