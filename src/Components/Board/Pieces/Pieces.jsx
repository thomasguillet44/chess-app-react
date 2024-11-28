import './Pieces.css'
import Piece from './Piece'
import { useState } from 'react'
import { createState } from '../../../utils'

const Pieces = () => {

    const [state, setState] = useState(createState());

    //map(x => tatata) prend en compte que la valeur 
    //map((x,i) => tatata) prend en compte la valeur en premier parametre, et le rang en second
    return <>
        <div className="pieces">
            {state.map((line,l) => line.map((columns, c) => 
            state[l][c] ? <Piece key={l+'-'+c}
                                    line={l} 
                                    column={c}
                                    element={state[l][c]}/> : null))}
        </div>
    </>
}


export default Pieces;