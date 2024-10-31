'use client'

import { Button, Form } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@/forms/SIgnUpForm/schema'
import axios from 'axios'

type Inputs = {
  email: string
  name: string
  password: string
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axios.post('/api/registration', { ...data }).then((response) => {
        console.log('response', response)
      })
    } catch (error) {
      console.error(`Error on registration - ${error}`)
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
      <Form.Group controlId="name" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control {...register('name')} type="text" />
        {errors.name?.message ? (
          <small className="text-danger">{errors.name.message}</small>
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
        <Button type="submit">Sign up</Button>
      </div>
    </Form>
  )
}

export default SignUpForm
