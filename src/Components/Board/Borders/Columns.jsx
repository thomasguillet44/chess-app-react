import "./Columns.css"

const Columns = ({columns}) => {
    return <div className="columns">
        {
            columns.map(i => <span key={i}>{i}</span>)
        }
    </div>
}

export default Columns;