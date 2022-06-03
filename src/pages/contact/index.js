import ContactBanner from './contact_banner';
import ContactInfo from './contact_info';
import ContactMap from './contact_map';
import ContactMessage from './contact_message';
import { Fragment } from 'react';

function Contact() {
    return (
        <Fragment>
            <ContactBanner />
            <ContactInfo />
            <ContactMap />
            <ContactMessage />
        </Fragment>
    );
}

export default Contact;
