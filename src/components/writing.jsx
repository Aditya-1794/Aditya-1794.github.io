import './writing.css'

function Writing({title, date, onOpen, active}) {
	return (
		<div className="writingRow">
			<button className="writingTitle" type="button" onClick={onOpen} aria-expanded={active} aria-controls={active ? 'article-reader' : undefined}>
				{title}
			</button>
			<span className="writingDate">{date}</span>
		</div>
	)
}

export default Writing
