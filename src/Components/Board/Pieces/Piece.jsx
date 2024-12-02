const Piece = ({line, column, element}) => {

    console.log('Rendering Piece:', { line, column, element });

    // on rajoute un timeout pour laisser le temps a la piece d'etre dans la souris avant de ne
    //plus l'afficher
    const onDragStart = (e) => {
        e.dataTransfer.setData('text/plain', `${element}, ${line}, ${column}`);
        setTimeout(() => {
            e.target.style.display = "none";
        });
    }

    return <div className={"piece " + element + " p-" +line+column} 
    draggable="true"
    onDragStart={onDragStart}></div>
}

export default Piece;