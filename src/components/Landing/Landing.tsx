import styles from "./Landing.module.css"
import {SuperBoard} from "./SuperBoard/SuperBoard";
import {Board} from "./Board/Board";
import {MiniBoard} from "./MiniBoard/MiniBoard";
import {IBoard} from "../../Types/Types";
import {FC} from "react";

export interface IPropsLanding {
    data: Array<IBoard>
}
export interface IPropsBoard {
    id: number
    upperTitle: string
    downTitle?: string
    img?: string
    button?: "btnArrow" | "btnBuy" | null
    colorScheme?: "Green" | "Purple" | null;
}

export const Landing: FC<IPropsLanding> = ({data}) => {
    return (
        <div className={styles.land}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {data.filter((el)=> el.nameBoard === "superBoard").map((el) => <SuperBoard img={el.img} colorScheme={el.colorScheme}
                                                                                             upperTitle={el.upperTitle} button={el.button} id={el.id}
                                                                                             downTitle={el.downTitle} key={el.id}/>)}

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
                            {data.filter((el)=> el.nameBoard === "miniBoard").map((el) => <MiniBoard img={el.img} colorScheme={el.colorScheme}
                                                         upperTitle={el.upperTitle} button={el.button} id={el.id}
                                                         downTitle={el.downTitle} key={el.id}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}