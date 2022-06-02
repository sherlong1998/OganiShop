import styles from './HeaderBot.module.scss';
import { BiMenu } from 'react-icons/bi';
import { BsChevronDown, BsFillTelephoneFill } from 'react-icons/bs';

function HeaderBot() {
    return (
        <div className={`${styles.header_bot} grid wipe row`}>
            <div className={`${styles.hero_title} l-3 col`}>
                <div className={`${styles.hero_title__name}`}>
                    <BiMenu />
                    <span>All Departments</span>
                    <BsChevronDown />
                </div>
                <ul className={`${styles.hero_title__list}`}>
                    <li>Fresh Meat</li>
                    <li>Vegetables</li>
                    <li>Fruits & Nut Gifts</li>
                    <li>Fresh Berries</li>
                    <li>Ocean Foods</li>
                    <li>Butter & Eggs</li>
                    <li>Fast food</li>
                    <li>Fresh Onion</li>
                    <li>Papayaya & Crisps</li>
                    <li>Oatmeal</li>
                    <li>Fresh Bananas</li>
                </ul>
            </div>
            <div className={`${styles.hero_search} l-9 m-9 c-9`}>
                <div className={`${styles.hero_search__top}`}>
                    <div className={`${styles.hero_search__top_}col l-8 m-8 c-8`}>
                        <div className={`${styles.hero_search__top__categories} `}>
                            <span>All Categories</span>
                            <BsChevronDown />
                        </div>
                        <div className={`${styles.hero_search__top__input}`}>
                            <input type="text" placeholder="What do you need?" />
                            <button type="submit">search</button>
                        </div>
                    </div>
                    <div className={`${styles.hero_search__top__contact}col l-4 m-4 c-4`}>
                        <span className={styles.phone_icon}><BsFillTelephoneFill/></span>
                        <div>
                            <h4>+1 (234) 567-8901</h4>
                            <span>support 24/7 time</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeaderBot;
