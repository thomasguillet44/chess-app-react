import './Board.css';
import Lines from './Borders/Lines'
import Columns from './Borders/Columns'

const Board = () => {
    //x est la valeur du tableau, i le rang
    const lines = Array(8).fill().map((x,i) => 8-i);
    const columns = Array(8).fill().map((x,i) => String.fromCharCode(i+97));

    const getCellClassName = (i,j) => {
        if ((i+j)%2 == 0) {
            return 'light-cell';
        } else {
            return 'dark-cell';
        }
    }

    return <>    
    <div className="board">

        <Lines lines={lines}></Lines>
        <div className='cells'>
            {lines.map((line,i) => 
                columns.map((column,j) => 
                    <div className={getCellClassName(i,j)} key={line+column}>{line}{column}</div>
                )
            )}
        </div>  
        <Columns columns={columns}></Columns>
                        
    </div>
    
    </>
   
};

export default Board;