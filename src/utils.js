export const createState = () => {
    const position = Array(8).fill('').map(x => Array(8).fill(''))

    position[0][0]='wR';
    position[0][7]='wR';
    position[0][1]='wN';
    position[0][6]='wN';
    position[0][2]='wB';
    position[0][5]='wB';
    position[0][3]='wQ';
    position[0][4]='wK';

    for (let i=0; i<8; i++) {
        position[1][i] = 'wP';
        position[6][i] = 'bP';
    }

    position[7][0]='bR';
    position[7][7]='bR';
    position[7][1]='bN';
    position[7][6]='bN';
    position[7][2]='bB';
    position[7][5]='bB';
    position[7][3]='bQ';
    position[7][4]='bK';

    return position;
}

export const createNewPosition = (position) => {
    const newPosition = Array(8).fill('').map(x => Array(8).fill(''))

    for (let line = 0; line < 8; line++) {
        for (let column = 0; column < 8; column++) {
            newPosition[line][column] = position[line][column]
        }
        
    }

    return newPosition;

}