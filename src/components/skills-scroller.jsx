import './skills-scroller.css'

const skills = [
  'Python',
  'Java',
  'JavaScript',
  'TensorFlow',
  'Keras',
  'CNNs',
  'Transfer Learning',
  'Computer Vision',
  'Grad-CAM',
  'React',
  'Spring Boot',
  'PostgreSQL',
  'Git',
  'GitHub',
  'REST APIs',
]

function SkillsScroller() {
  return (
    <div className="skillsScroller" role="region" aria-label="Technical skills">
      <div className="skillsTrack">
        {[false, true].map((isDuplicate) => (
          <ul className="skillsGroup" key={String(isDuplicate)} aria-hidden={isDuplicate}>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default SkillsScroller