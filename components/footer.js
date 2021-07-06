import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-2xl font-bold tracking-tighter leading-tight text-left lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {/* Statically Generated with Next.js. */}
          @2021 Ericka Diaz 🌭 
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/erickaldiaz`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
