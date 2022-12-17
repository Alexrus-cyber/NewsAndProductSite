import React from "react";
import styles from "./SuperBoard.module.css";
import {NavLink} from "react-router-dom";
import cart from "../../../assets/img/telega.png";
import iphone from "../../../assets/img/iPhone.png";

export const SuperBoard = () => {
    return (
        <div className={styles.superBoard}>
            <div className={styles.title}>
                <h1 className={styles.title1}>
                    There is something else for you
                </h1>
            </div>
            <div className={styles.downCont}>
                <div className={styles.buttonShopCont}>
                    <div className={styles.buttonShop}>
                        <div className={styles.allProdIcon}>
                            <NavLink to={"/"} className={styles.allProduct}>
                                <p style={{
                                    textTransform: "uppercase",
                                    marginBottom: 10,
                                    display: "flex",
                                    justifyContent: "start",
                                    fontSize: 10,
                                    fontWeight: 700,
                                    color: "#acaeb2"
                                }}>Shop</p>
                                <p style={{fontWeight: 700}}>All products</p>
                            </NavLink>
                            <div className={styles.icon}>
                                <NavLink className={styles.icon} style={{borderLeft: "none"}} to={"/"}>
                                    <img className={styles.iconCart} src={cart} alt={"iconF"}></img>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.iphone}>
                    <img className={styles.img} src={iphone} alt={"F"}></img>
                </div>
            </div>
        </div>
    )
}