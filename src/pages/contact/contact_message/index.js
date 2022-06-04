import styles from './ContactMessage.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);
function ContactMessage() {
    return (
        <div className={cx(styles.wrapper,"grid","wipe")}>
            <div className={cx(styles.contact_message)}>
                <h2>Leave Message</h2>
                <div className={cx(styles.contact_message_content)}>
                    <div className={cx(styles.contact_message_content_message)}>
                        <input type="text" placeholder="Your name" />
                        <input type="text" placeholder="Your Email" />
                    </div>
                    <textarea placeholder="Your message"></textarea>
                    <button type="submit" class="site-btn">
                        SEND MESSAGE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactMessage;
