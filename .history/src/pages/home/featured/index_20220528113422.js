import styles from  './Banner.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function Fe() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('Fe','l-9')}>
                {/* Fe */}
            </div>
            
        </div>
    );
}

export default Fe;
