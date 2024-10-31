import SignUpForm from '@/forms/SIgnUpForm/SignUpForm'
import FormLayout from '@/ui/FormLayout/FormLayout'

export default function SignUp() {
  return (
    <FormLayout>
      <h1 className="text-center">Sign up</h1>
      <SignUpForm />
    </FormLayout>
  )
}
