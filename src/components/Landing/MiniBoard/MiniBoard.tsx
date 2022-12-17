import React, {FC} from "react";
import styles from "./MiniBoard.module.css";
import Arrow from "../../../assets/img/arrow.png"
import {IPropsBoard} from "../Landing";



export const MiniBoard: FC<IPropsBoard> = (props) => {
    const color = props.colorScheme;

    return (
        <div className={color === "Green" ? styles.board + ' ' + styles.green : styles.board + ' ' + styles.purple}>
            <div className={styles.block}>
                <div className={styles.upper}>
                    <div style={{width: 175}}>
                        <div className={styles.upperTitle}>
                            <p style={{fontWeight: 500, width: 110, marginLeft: 20}}>{props.upperTitle}</p>
                        </div>
                    </div>
                    <div style={{width: 175}}>
                        <div className={styles.upperArrow}>
                            {props.button === "btnArrow" ? <img className={styles.img} src={Arrow} alt={"arrow"}/> :
                                <img className={""} src={props.img} alt={"notArrow"}/>}
                        </div>
                    </div>

                </div>
                <div className={styles.down}>
                    <h1 style={{fontSize: 50, fontWeight: 600}}>{props.downTitle}</h1>
                </div>
            </div>
        </div>
    )
}