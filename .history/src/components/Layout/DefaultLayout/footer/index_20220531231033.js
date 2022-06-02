import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);


function Footer() {
    return ( 
    <div className = {cx(styles.wrapper)}>
        <div className = {cx(styles.footer)}>
        
        </div>
    </div>
        );
}

export default Footer;