import React, {FC} from "react";
import styles from "./MiniBoard.module.css";
import {IMiniBoard} from "../../../Types/Types";

interface PropsType {
    id: number
    upperTitle: string
    downTitle?: string
    img: string
    button: "btnArrow" | "btnBuy" | null
    colorScheme: "Green" | "Purple";
    miniBoard: IMiniBoard
}

export const MiniBoard: FC<PropsType> = (props) => {
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
                            <img className={styles.img} src={props.img} alt={"arrow"}></img>
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