import Link from 'next/link'
import { Container } from './Container'
import { GridPattern } from './GridPattern'

export function CallToAction({ id, about, children, href }) {
  return (
    <aside
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative bg-slate-100 py-16 sm:py-32"
    >
      <h3 id={`${id}-title`} className="sr-only">
        Cairns Height Safety training courses and services
      </h3>
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <Container size="xs" className="relative">
        <figure>
          <div className="flex text-slate-900 sm:justify-center"></div>
          <blockquote className="mt-10 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center">
            {children}
          </blockquote>
          <figcaption className="mt-1 flex items-center sm:justify-center">
            <div className="shadow hover:bg-t mt-8 inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-base font-medium leading-6 tracking-tight text-slate-900 transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white">
              <Link href={href}>{about.name}</Link>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  )
}
