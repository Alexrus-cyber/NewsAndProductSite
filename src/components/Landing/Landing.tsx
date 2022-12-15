import styles from "./Landing.module.css"
import {SuperBoard} from "./SuperBoard/SuperBoard";
import {Board} from "./Board/Board";

export const Landing = () => {
    return (
        <div className={styles.land}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <SuperBoard/>
                </div>
                <div className={styles.right}>
                    <div className={styles.boardContainer}>
                        <Board/>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            background: "#000",
                            height: "50%",
                            marginTop: "5%",
                            borderRadius: 50
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}