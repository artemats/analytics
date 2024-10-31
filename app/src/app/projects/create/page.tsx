import FormLayout from '@/ui/FormLayout/FormLayout'
import ProjectCreateForm from '@/forms/ProjectCreate/ProjectCreateForm'

export default function ProjectCreate() {
  return (
    <FormLayout>
      <h1>New project</h1>
      <ProjectCreateForm />
    </FormLayout>
  )
}
