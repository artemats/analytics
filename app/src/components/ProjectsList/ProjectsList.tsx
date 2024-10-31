'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { format } from 'date-fns'
import { Button, Table } from 'react-bootstrap'
import { IProject } from '@/utils/types'
import Link from 'next/link'

export default function ProjectsList({ data }: { data: IProject[] }) {
  return (
    <Table striped bordered className="my-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>URL</th>
          <th>Created at</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.length > 0
          ? data.map((project) => (
              <tr key={project._id}>
                <td>1</td>
                <td>{project.name}</td>
                <td>{project.url}</td>
                <td>{format(project.createdAt, 'dd/MM/yyyy HH:mm')}</td>
                <td>
                  <div className="d-flex justify-content-end">
                    <Link href={`/project/${project._id}`}>
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eye-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                      </Button>
                    </Link>
                    <Button variant="danger" className="mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                      </svg>
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </Table>
  )
}
