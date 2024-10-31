import FormLayout from '@/ui/FormLayout/FormLayout'
import SignInForm from '@/forms/SignInForm/SignInForm'

export default function SignIn() {
  return (
    <FormLayout>
      <h1 className="text-center">Sign in</h1>
      <SignInForm />
    </FormLayout>
  )
}
