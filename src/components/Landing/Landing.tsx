import styles from "./Landing.module.css"
import {SuperBoard} from "./SuperBoard/SuperBoard";
import {Board} from "./Board/Board";
import {MiniBoard} from "./MiniBoard/MiniBoard";
import {IMiniBoard} from "../../Types/Types";
import {FC} from "react";

export interface IPropsLanding {
    miniBoard: IMiniBoard,
    data: Array<IMiniBoard>
}

export const Landing: FC<IPropsLanding> = ({miniBoard, data}) => {
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
                            justifyContent: "center",
                            width: "100%",
                            height: "50%",
                            marginTop: "5%",
                            borderRadius: 50,
                            columnGap: 20
                        }}>
                            {data.map((el) => <MiniBoard img={el.img} colorScheme={el.colorScheme}
                                                         upperTitle={el.upperTitle} button={el.button} id={el.id}
                                                         downTitle={el.downTitle} key={el.id} miniBoard={miniBoard}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}