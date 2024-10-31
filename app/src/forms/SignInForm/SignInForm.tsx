'use client'

import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button, Form } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@/forms/SignInForm/schema'

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

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="py-4">
      <Form.Group controlId="email" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control {...register('email')} type="email" autoComplete="off" />
        {errors.email?.message ? (
          <small className="text-danger">{errors.email.message}</small>
        ) : null}
      </Form.Group>
      <Form.Group controlId="password" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          {...register('password')}
          type="password"
          autoComplete="off"
        />
        {errors.password?.message ? (
          <small className="text-danger">{errors.password.message}</small>
        ) : null}
      </Form.Group>
      <div className="text-center">
        <Button type="submit">Sign in</Button>
      </div>
    </Form>
  )
}

export default SignInForm
