import styles from './ContactInfo.module.scss';
import classNames from 'classnames/bind';
import {FaPhoneAlt,FaMapMarkerAlt,FaRegClock} from  'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
let cx = classNames.bind(styles);
function ContactInfo() {
    return <div className={cx(styles.wrapper,"grid","wipe")}>
        <div className={cx(styles.contact_info, "row")}>
                    <div className={cx(styles.contact__widget,"l-3")}>
                        <span><FaPhoneAlt/></span>
                        <h4>Phone</h4>
                        <p>+01-3-8888-6868</p>
                    </div>
                    <div className={cx(styles.contact__widget,"l-3")}>
                    <span><FaMapMarkerAlt/></span>
                        <h4>Address</h4>
                        <p>60-49 Road 11378 New York</p>
                    </div>
                    <div className={cx(styles.contact__widget,"l-3")}>
                    <span><FaRegClock/></span>
                        <h4>Open time</h4>
                        <p>10:00 am to 23:00 pm</p>
                    </div>
                    <div className={cx(styles.contact__widget,"l-3")}>
                    <span><AiOutlineMail/></span>
                        <h4>Email</h4>
                        <p>hello@colorlib.com</p>
                    </div>
        </div>
    </div>;
}

export default ContactInfo;
