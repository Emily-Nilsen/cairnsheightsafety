import Image from 'next/image'

import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { ServicesCTA } from './ServicesCTA'
import duotoneImage from '../images/screencasts/duotone.svg'
import gridsImage from '../images/screencasts/grids.svg'
import setupImage from '../images/screencasts/setup.svg'
import strokesImage from '../images/screencasts/strokes.svg'

const services = [
  {
    title: 'Wind turbine maintenance',
    description:
      'Get familiar with the Figma UI, the different tools it offers, and the most important features.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133828/Cairns%20Height%20Safety/chs_img_38_iv2ggz.jpg',
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Mould remediation',
    description:
      'Learn how to create a new artboard and configure your grid and rulers for designing icons.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132576/Cairns%20Height%20Safety/chs_img_29_qarxrr.jpg',
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'High-pressure water blasting of high-rise buildings',
    description:
      'Using basic shapes and boolean operations, learn how to design your own notification icon from scratch.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132950/Cairns%20Height%20Safety/chs_img_19_mf6ott.jpg',
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Window cleaning on high-rise buildings',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133829/Cairns%20Height%20Safety/chs_img_43_d9gsa1.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title:
      'Exterior building maintenance of high-rise buildings and structures',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132254/Cairns%20Height%20Safety/chs_img_31_hfrszp.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Installation of roof and abseil anchor systems',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_49_isiixu.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Cleaning of roofs and gutters',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657309086/Cairns%20Height%20Safety/chs_img_28_emntoz.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Minor roof and gutter repairs',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132247/Cairns%20Height%20Safety/chs_img_23_tkpzjo.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Qualified riggers',
    description:
      'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_48_w4fk7q.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
]

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="services-title">
          Services
        </SectionHeading>
        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-slate-900">
          Cairns Height Safety offers Industrial Rope Access services.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          CHS has over 25 years of experience within the Rope Access industry,
          and we offer you the following services:
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol className="grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.title} className="[counter-increment:video]">
              <div
                className="relative flex items-center justify-center px-6 shadow-lg h-44 rounded-2xl"
                style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                }}
              >
                <div className="flex overflow-hidden rounded shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg"
                  />
                </div>
                {/* <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 fill-current stroke-current"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
                    <circle cx="8" cy="8" r="6.25" fill="none" />
                  </svg>
                  <time
                    dateTime={`${service.runtime.minutes}m ${service.runtime.seconds}s`}
                    className="ml-2"
                  >
                    {`${service.runtime.minutes}:${service.runtime.seconds
                      .toString()
                      .padStart(2, '0')}`}
                  </time>
                </div> */}
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {service.title}
              </h3>
              {/* <p className="mt-2 text-sm text-slate-600">{service.description}</p> */}
            </li>
          ))}
        </ol>
      </Container>
      {/* <ServicesCTA /> */}
    </section>
  )
}
