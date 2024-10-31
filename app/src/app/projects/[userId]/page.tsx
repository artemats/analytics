import ProjectsList from '@/components/ProjectsList/ProjectsList'
import axios from 'axios'

export default async function Projects({
  params: { userId },
}: {
  params: { userId: string }
}) {
  const {
    data: { projects },
  } = await axios.get(`${process.env.NEXTAUTH_URL}/api/projects/${userId}`)

  return (
    <>
      <h1>All my projects</h1>
      <ProjectsList data={projects} />
    </>
  )
}
