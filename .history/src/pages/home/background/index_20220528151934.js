import styles from  './Background.module.scss';
import classNames from 'classnames/bind';

import background from ''

let cx = classNames.bind(styles);
function Background() {
    return ( 
        <div className= {cx('wrapper','grid','wipe','row')}>
            <div className = {cx('background','l-9','m-9',)}>
                
            </div>
            
        </div>
    );
}

export default Background;
