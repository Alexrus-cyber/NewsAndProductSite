export interface ISuperBoard {
    id: number
    upperTitle: string
    downTitle?: string
    img: string
    button: "btnArrow" | "btnBuy" | null
}

export interface IMiniBoard extends ISuperBoard{
    colorScheme: "Green" | "Purple"
}
export interface INews {
    superBoard: ISuperBoard
    board: ISuperBoard
    miniBoard: IMiniBoard
}