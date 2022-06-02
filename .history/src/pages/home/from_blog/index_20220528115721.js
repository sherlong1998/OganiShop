import styles from  './From.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function From() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('From')}>
                {/* From */}
            </div>
            
        </div>
    );
}

export default From;
