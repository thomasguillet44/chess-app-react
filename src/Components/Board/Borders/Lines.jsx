import './Lines.css'

const Lines = ({lines}) => {
    return <div className="lines">
        {
            lines.map(i => <span key={i}>{i}</span>)
        }
    </div>
}

export default Lines;