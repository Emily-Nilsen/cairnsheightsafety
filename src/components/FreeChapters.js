import Link from 'next/link'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Pattern } from '../components/Pattern'

export function FreeChapters() {
  return (
    <section
      id="free-chapters"
      aria-labelledby="free-chapters-title"
      className="scroll-mt-14 bg-orange-600 sm:scroll-mt-32"
    >
      <h2 id="free-chapters-title" className="sr-only">
        IMMOOS Cableway Training
      </h2>
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute left-0 -top-32 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              IMMOOS equipment training
            </h2>
            <p className="mt-4 text-lg tracking-tight text-orange-200">
              Cairns Height Safety provides training in the operation and
              maintenance of IMMOOS devices. Feel free to contact us anytime for
              more information.
            </p>
          </div>
          <form className="lg:pl-16">
            <Link href="/#contact" passHref>
              <h3 className="cursor-pointer text-base font-medium tracking-tight text-white transition duration-300 ease-in-out hover:text-orange-100">
                Contact us for more information &rarr;
              </h3>
            </Link>
          </form>
        </Container>
      </div>
    </section>
  )
}
