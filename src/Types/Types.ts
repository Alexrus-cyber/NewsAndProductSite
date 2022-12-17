
export interface IBoard {
    id: number
    upperTitle: string
    downTitle?: string
    img?: string
    button?: "btnArrow" | "btnBuy" | null
    colorScheme?: "Green" | "Purple" | null
    nameBoard: "superBoard" | "board" | "miniBoard"
}
export interface IBlock {
    id: number,
    dataBoard: Array<IBoard>
}