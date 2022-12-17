import React from "react";
import styles from "./Board.module.css"
import arrow from "../../../assets/img/arrow.png"
import planet from "../../../assets/img/planet.png"

export const Board = () => {
    return (
        <div className={styles.board}>
            <div className={styles.titleContainer}>
                <div className={styles.upperTitleContainer}>
                    <p className={styles.upperTitle}>World of Hearing Technology</p>
                </div>
                <div className={styles.downTitleContainer}>
                    <p className={styles.downTitle}>View our blog</p>
                </div>
            </div>
            <div className={styles.arrowContainer}>
                <div className={styles.arrowUpper}>
                    <img className={styles.image} src={arrow} alt={"f"}/>
                </div>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={planet} alt={"f"}/>
                </div>
            </div>
        </div>
    )
}