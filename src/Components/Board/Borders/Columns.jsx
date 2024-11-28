import "./Columns.css"

const Columns = ({columns}) => {
    return <div className="columns">
        {
            columns.map(i => <span key={i}>{String.fromCharCode(i+96)}</span>)
        }
    </div>
}

export default Columns;