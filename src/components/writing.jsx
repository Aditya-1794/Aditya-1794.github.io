import './writing.css'

function Writing({title, link, date}) {
	return (
		<div className="writingRow">
			<a className="writingTitle" href={link} target="_blank" rel="noreferrer">
				{title}
			</a>
			<span className="writingDate">{date}</span>
		</div>
	)
}

export default Writing
