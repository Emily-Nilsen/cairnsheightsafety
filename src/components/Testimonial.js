import Image from 'next/image'

import { Container } from '../components/Container'
import { GridPattern } from '../components/GridPattern'
import { StarRating } from '../components/StarRating'

export function CallToAction({ id, about, children }) {
  return (
    <aside
      id={id}
      aria-labelledby={`${id}-title`}
      className="relative py-16 bg-slate-100 sm:py-32"
    >
      <h3 id={`${id}-title`} className="sr-only">
        Cairns Height Safety training courses and services
      </h3>
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <Container size="xs" className="relative">
        <figure>
          <div className="flex text-slate-900 sm:justify-center">
            {/* <StarRating /> */}
          </div>
          <blockquote className="mt-10 text-4xl font-medium tracking-tight font-display text-slate-900 sm:text-center">
            {children}
          </blockquote>
          <figcaption className="flex items-center mt-1 sm:justify-center">
            <div className="">
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 mt-8 text-base font-medium leading-6 tracking-tight transition duration-300 ease-in-out bg-white border rounded-full shadow hover:bg-t border-slate-300 text-slate-900 hover:bg-slate-700 hover:text-white"
              >
                {about.name}
              </a>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  )
}
