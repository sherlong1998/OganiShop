import styles from  './Banner.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Featured() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('Featured','l-9')}>
                {/* Featured */}
            </div>
            
        </div>
    );
}

export default Featured;
