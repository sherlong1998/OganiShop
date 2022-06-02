import React from 'react'
import styles from "./Header.module.scss"
import HeaderTop from "./Header_top/HeaderTop"
import HeaderMenu from "./HeaderMenu/HeaderMenu"
import HeaderBot from "./HeaderBot/HeaderBot"
function Header () {
  return (
    <>
    <HeaderTop/>
    <HeaderMenu/>
    <HeaderBot/>
    </>
  )
}

export default Header