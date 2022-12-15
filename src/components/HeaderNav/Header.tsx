import styles from "./HeaderNav.module.css"
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export const Header = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    return (
        <div className={scrolled ? styles.headerScrolled : styles.header}>
            <div className={styles.container}>
                <div className={styles.navigateButtonsContainer}>
                    <button className={scrolled ? styles.buttonClose + ' ' + styles.dark : styles.buttonClose + ' '+ styles.light}>X</button>
                    <NavLink className={scrolled ? styles.link + ' ' + styles.dark :  styles.link + ' '+ styles.light} to={"/"}>Products</NavLink>
                    <NavLink className={scrolled ? styles.link + ' ' + styles.dark :  styles.link + ' '+ styles.light} to={"/"}>App</NavLink>
                    <NavLink className={scrolled ? styles.link + ' ' + styles.dark :  styles.link + ' '+ styles.light} to={"/"}>About</NavLink>
                    <NavLink className={scrolled ? styles.link + ' ' + styles.dark :  styles.link + ' '+ styles.light} to={"/"}>FAQ</NavLink>

                </div>
                <div className={styles.registerButtonsContainer}>
                    <div className={styles.ButtonsContainerReg}>
                        <NavLink to={"/"} className={scrolled ? styles.logIn + ' ' + styles.dark : styles.logIn + ' ' + styles.light}>Log in</NavLink>
                        <NavLink to={"/"} className={scrolled ? styles.signUp + ' ' + styles.dark : styles.signUp + ' ' + styles.light}>Sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}