import {GRID, NUMBERS} from "../../typings/index"
import shuffle from "../shuffle"
import {isInRow, isCol} from "../"
const gridExample = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
]

const numbers: NUMBERS[] = [1,2,3,4,5,6,7,8,9]

function fillGrid(grid: GRID){
    let row = 0;
    let col = 0;
    for(let i = 0; i <81; i++){
        row = Math.floor(i/9);
        col = i % 9;
        if(grid[row][col]=== 0){
            shuffle(numbers)

            for(let value of numbers){
                if(!isInRow({grid, row, value})){
                    if(!isCol({col,grid,value})){
                        const square =[[0,0,0],[0,0,0],[0,0,0]];
                        





                        grid[row][col] = value;

                   }

                }             
            }
            break;
        }
    }

    grid[row][col] = 0;

}

export default fillGrid;