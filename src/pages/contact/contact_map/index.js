import styles from "./ContactMap.module.scss"
import imageMap from '../../../assets/image/map.png'


import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function ContactMap() {
    return <div className={cx('wrapper')}>
    <div className={cx('contact_map')}>
        <img src={imageMap} alt="map"/>
    </div>
</div>;
}

export default ContactMap;