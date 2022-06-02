import React from 'react'
import styles from  "./HeaderTop.module.scss"
import pic from "./image/language.png"
import {FaTwitter,FaLinkedinIn,FaPinterestP,FaUserAlt} from 'react-icons/fa'
import { HiMail} from "react-icons/hi"
import {BsFacebook,BsChevronDown} from "react-icons/bs"

function HeaderTop (){
  return (
    <div className ={styles.header}>
       <div className={`${styles.header__top} grid wipe row`}>
        <div className={`${styles.header__top__left}`}>
            <ul>
                <li><HiMail />hello@colorlib.com</li>
                <li><span>|</span></li>
                <li>Free Shipping for all Order of  $99</li>
            </ul>
        </div>
        <div className={`${styles.header__top__right}`}>
          <ul>
            <li><a href="/"><BsFacebook/></a></li>
            <li><a href="/"><FaTwitter/></a></li>
            <li><a href="/"><FaLinkedinIn/></a></li>
            <li><a href="/"><FaPinterestP/></a></li>
          </ul>
          <span>|</span>
          <div>
            <img src={pic} alt="language"/>
            <span>English  <BsChevronDown/></span>
          </div>
          <span>|</span>
          <div className={styles.user}><FaUserAlt/><span>Login</span></div>
        </div>
    </div>
    </div>
  )
}

export default HeaderTop