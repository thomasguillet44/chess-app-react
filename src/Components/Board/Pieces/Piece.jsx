const Piece = ({line, column, element}) => {
    return <div className={"piece " + element + " p-" +line+column} draggable="true"></div>
}

export default Piece;