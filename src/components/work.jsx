import { useId } from 'react'
import './work.css'

function Work({emoji, title, link, description_long, outcome}) {
  const detailsId = useId()

  return (
    <div className="workContainer">
      <div className="workRow">
        <div className="workTitleWrap">
          <span
            className="workTitle"
            tabIndex={0}
            aria-describedby={detailsId}
          >
            <span className="workEmoji" aria-hidden="true">{emoji}</span>
            {title}
          </span>
          <div className="workPopover" id={detailsId} role="tooltip">
            <ul className="workDetails">
              {description_long.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        </div>
        {link ? (
          <a className="workOutcome" href={link} target="_blank" rel="noreferrer">
            {outcome}
          </a>
        ) : (
          <span className="workOutcome">{outcome}</span>
        )}
      </div>
    </div>
  )
}

export default Work
