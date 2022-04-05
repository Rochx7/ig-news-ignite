import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('Home component', () => {
  it('renders corretly', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInDocument()
    expect(screen.getByText('Posts')).toBeInDocument()
  })
})
