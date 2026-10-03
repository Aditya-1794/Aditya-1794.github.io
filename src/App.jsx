import './App.css'

import Work from './components/work'
import Writing from './components/writing'
import SkillsScroller from './components/skills-scroller'

function App() {
  return (
    <main className="intro-column">
      {/* TODO: make inline links for "Georgia Tech," "IEEE MIT URTC," and "projects" */}
      {/* TODO: make my name a cool font that stands out */}
      <p className="lighter">👋 Hey there! I'm <span className="intro-name">Aditya</span>, a CS student at Georgia Tech. 🐝</p>
      <p>Previously, I worked on research involving designing interpretable ML pipelines for image based medical diagnosis.</p>
      <p>Now, I'm working on building fundamentals to pursue AI safety-related research, as well as building cool projects.</p>
      <hr />

      <p className="lighter">Projects</p>
      <Work
        emoji="🔬"
        title="IEEE MIT URTC"
        link="https://ieeexplore.ieee.org/document/11533016"
        description_long={[
          'Developed a ResNet-style CNN in Keras to classify four Alzheimer’s stages from 2D brain MRIs using OASIS and ADNI datasets',
          'Improved accuracy from 78% to 94% using residual blocks, regularization, dropout, and augmentation',
          'Integrated Grad-CAM explainability to identify artifact-driven overfitting, guide model redesign, and validate attention on clinically relevant brain regions with professional medical review',
          'Presented and published at the IEEE MIT Undergraduate Research Technology Conference (URTC)',
        ]}
        outcome="Interpretable Alzheimer's MRI Classifier"
      />
      <Work
        emoji="🔬"
        title="Fedele Lab @ GT"
        description_long={[
          'Developing a real-time computer vision pipeline that uses YOLO-based object tracking, nonlinear dimensionality reduction (LLE), and Stable Diffusion to transform tracked motion into generative visual outputs',
          'Improving tracking stability by fine-tuning YOLO and experimenting with motion-feature extraction to better capture movement speed and direction',
          'Exploring new representations and processing methods for live visual motion, with an emphasis on real-time inference and human-AI creative applications',
        ]}
        outcome="Real-Time Artistic Generative Motion"
      />
      <Work
        emoji="🔬"
        title="Vanderbilt Journal"
        link="https://www.vanderbilt.edu/youngscientistjournal/article/a-comparative-analysis-of-low-parameter-cnn-performance-on-malaria-detection-from-blood-smear-microscopy/"
        description_long={[
          'Trained MobileNetV2 and EfficientNetB0 in Keras on 15,031 blood-smear images to classify parasitized vs. uninfected cells',
          'Achieved 96% accuracy with MobileNetV2, focusing on reducing CPU and memory usage',
          'Published research in the Vanderbilt Young Scientist Journal',
        ]}
        outcome="Efficient Malaria Cell Classifier"
      />
      <Work
        emoji="🍎"
        title="FruitShare.org"
        link="https://fruitshare.org"
        description_long={[
          'Founded a nonprofit that has recovered and donated 5,000+ lbs of surplus fruit from 50+ homeowners across 10 cities, leading volunteer operations, community outreach, and growth strategy',
          'Engineered fruitshare.org using React, Spring Boot, and PostgreSQL to manage sign-ups, donation tracking, and fruit-recovery workflows for volunteers and donors via REST APIs, automated emails, and a CRM',
          'Incorporated community feedback into the website’s design and features to ensure accessibility across all ages',
        ]}
        outcome="Surplus Fruit Recovery Network"
      />
      <Work
        emoji="🏆"
        title="1st · HackGT 13"
        link="https://devpost.com/software/ripple-vepi8b"
        description_long={[
          'Built Ripple, an infrastructure resilience simulator that models cascading impacts of MARTA disruptions across Atlanta communities and essential services and develops optimal infrastructure strengthening plans. Placed 1st out of 52 teams.',
          'Designed a geospatial data pipeline with MARTA GTFS, U.S Census, OpenStreetmap, and CMS to model city infrastructure, calculate the complex impact of disruptions, and facilitate an algorithm that calculates optimal spots to build new facilities',
          'Integrated Grok and Gemini into the deterministic simulation engine to translate and visualize natural-language disaster scenarios as structured infrastructure disruptions',
        ]}
        outcome="Ripple: Atlanta Infrastructure Simulator"
      />
      <Work
        emoji="🏆"
        title="2nd · Hack Cupertino"
        link="https://devpost.com/software/upcycle-r9lt5o"
        description_long={[
          'Built Upcycle, a full-stack sustainability website that generates personalized craft ideas from user-entered scrap materials across easy, medium, and hard difficulty levels',
          'Integrated Cohere LLM API to generate craft titles, materials, instructions, and difficulty ratings from dynamic user prompts',
          'Implemented React and Supabase for user authentication, saved crafts, and cleanly formatted LLM-generated responses',
        ]}
        outcome="Upcycle: AI Scrap-to-Craft Generator"
      />

      <SkillsScroller />

      <br />
      <p className="lighter">Writing</p>
      <Writing title="Placeholder for a piece" link="https://www.google.com" date="Oct 3 2026" />

    </main>
  )
}

export default App
