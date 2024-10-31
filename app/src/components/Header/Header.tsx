'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import styles from './Header.module.scss'

const Header = () => {
  const { data: session, status } = useSession()

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/" as={Link}>
          Analytics
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href={`/projects/${session?.user.id}`} as={Link}>
            Projects
          </Nav.Link>
        </Nav>
        {session && status === 'authenticated' ? (
          <div className={styles['avatar']}>
            <div className={styles['avatar-thumb']}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </div>
            <p className="m-0 mx-2">{session.user.name}</p>
            <Button variant="secondary" onClick={() => signOut()}>
              Sign Out
            </Button>
          </div>
        ) : (
          <Nav>
            <Link href="/sign-in" className="me-2">
              <Button className="d-inline-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                Sign In
              </Button>
            </Link>
            <Nav.Link href="/sign-up" as={Link} className="ms-2">
              Sign Up
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}

export default Header
