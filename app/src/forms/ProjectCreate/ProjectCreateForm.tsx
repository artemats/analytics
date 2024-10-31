'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '@/forms/ProjectCreate/schema'
import axios from 'axios'

type Inputs = {
  name: string
  url: string
}

const ProjectCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    axios.post('/api/project/create', { ...data }).then((response) => {
      console.log('Project created successfully, response: ', response)
    })
  }
  console.log(errors)
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="py-4">
      <Form.Group controlId="name" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          {...register('name', { required: true })}
          type="text"
          autoComplete="off"
        />
        {errors.name?.message ? (
          <small className="text-danger">{errors.name.message}</small>
        ) : null}
      </Form.Group>
      <Form.Group controlId="url" className="mb-3">
        <Form.Label>URL of the site</Form.Label>
        <Form.Control {...register('url')} type="text" autoComplete="off" />
        {errors.url?.message ? (
          <small className="text-danger">{errors.url.message}</small>
        ) : null}
      </Form.Group>
      <Button type="submit">Create project</Button>
    </Form>
  )
}

export default ProjectCreateForm
