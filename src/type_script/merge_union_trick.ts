//@ts-ignore
type Column = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H"
type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

type Cell = `${Column}${Row}`
const chessBoardCell: Cell = "E8"
