import { Page } from '../ui'
import { experiences } from '../../data/experiences'
import ExperienceTimeline from './ExperienceTimeline'



export default function Experience() {
  return (
    <Page title="Experience" hideTitle>
      <ExperienceTimeline experiences={experiences} />
    </Page>
  )
}
