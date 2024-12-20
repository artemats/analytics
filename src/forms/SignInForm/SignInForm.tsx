'use client'

import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@/forms/SignInForm/schema'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Label } from '@/components/ui/label'

type Inputs = {
  email: string
  password: string
}

const SignInForm = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (session?.user) {
      router.push('/')
    }
  }, [router, session])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })
    } catch (error) {
      console.log('Error on sign in', error)
    }
  }
  // TODO: detect fetch error
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Sign In
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input {...register('email')} id="email" autoComplete="new-email" />
          {errors.email?.message ? (
            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            {...register('password')}
            id="password"
            autoComplete="new-password"
            type="password"
          />
          {errors.password?.message ? (
            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
              {errors.password.message}
            </p>
          ) : null}
        </div>
        <Button type="submit">Sign in</Button>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Don’t you have an account?{' '}
        <Link
          href="/sign-up"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign up
        </Link>
      </p>
    </>
  )
}

export default SignInForm
