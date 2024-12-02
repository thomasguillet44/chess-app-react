import './Pieces.css'
import Piece from './Piece'
import { useState, useRef, useEffect } from 'react'
import { createState, createNewPosition } from '../../../utils'

const Pieces = () => {
    
    const [state, setState] = useState(createState());

    const ref = useRef();

    useEffect(() => {
        console.log('State updated:', state);
    }, [state]);

    const onDrop = e => {
        //getBoudingClientRect : renvoie l'écart entre le board et le bord de la page        
        //clientX : renvoie la position de la souris en pixel selon X 
        //clientY : renvoie la position de la souris en pixel selon y

        const {width, top, left} = ref.current.getBoundingClientRect();
        const sizeCase = width/8;

        const y = Math.floor((e.clientX - left)/sizeCase);
        const x = 7 - Math.floor((e.clientY - top)/sizeCase);

        const [element,line,column] = e.dataTransfer.getData('text').split(',');

        // on crée une nouvelle position à partie de l'état courant pour apres venir modifier le changement qui vient
        // d'avoir lieu
        const newPosition = createNewPosition(state);

        newPosition[line.trim()][column.trim()] = '';
        newPosition[x][y] = element;

        setState(newPosition);
    }

    //map(x => tatata) prend en compte que la valeur 
    //map((x,i) => tatata) prend en compte la valeur en premier parametre, et le rang en second
    //on empeche le dragover de se propage pour pas qu'il ecrase le ondrop qui nous interesse
    return <>
        <div className="pieces"
            ref={ref}
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}>

            {state.map((line,l) => line.map((columns, c) => 
            state[l][c] ? <Piece key={`${l}-${c}-${state[l][c]}`} 
                                    line={l} 
                                    column={c}
                                    element={state[l][c]}/> : null))}
        </div>
    </>
}


export default Pieces;