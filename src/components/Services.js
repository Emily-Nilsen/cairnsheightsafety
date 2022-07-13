import Image from 'next/image'
import { useState } from 'react'
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
    description: 'Extra info here.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133828/Cairns%20Height%20Safety/chs_img_38_iv2ggz.jpg',
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Mould remediation',
    description: 'Extra info here.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132576/Cairns%20Height%20Safety/chs_img_29_qarxrr.jpg',
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'High-pressure water blasting',
    description: 'From high-rise buildings to residentials.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132950/Cairns%20Height%20Safety/chs_img_19_mf6ott.jpg',
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Window cleaning',
    description: 'From high-rise buildings to residentials.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133829/Cairns%20Height%20Safety/chs_img_43_d9gsa1.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Exterior building maintenance',
    description: 'From high-rise buildings and structures to residentials.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132254/Cairns%20Height%20Safety/chs_img_31_hfrszp.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Installation of roof and abseil anchor systems',
    description: 'Extra info here.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_49_isiixu.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Cleaning of roofs and gutters',
    description: 'Extra info here.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657309086/Cairns%20Height%20Safety/chs_img_28_emntoz.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Minor roof and gutter repairs',
    description: 'Extra info here.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132247/Cairns%20Height%20Safety/chs_img_23_tkpzjo.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Qualified riggers',
    description: 'Extra info here.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_48_w4fk7q.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
  {
    title: 'Installation of Height Safety Systems',
    description:
      'Cairns Height Safety is an Accredited Installer of SAFETYLINK Height Safety Systems.',
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132247/Cairns%20Height%20Safety/chs_img_23_tkpzjo.jpg',
    runtime: { minutes: 28, seconds: 44 },
  },
]

export function Services() {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="services-title">
          Services
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Cairns Height Safety offers Industrial Rope Access services.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          CHS has over 25 years of experience within the Rope Access industry,
          and we offer you the following services:
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol className="grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, isExpanded ? undefined : 4).map((service) => (
            <li key={service.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
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
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </li>
          ))}
        </ol>
        {!isExpanded && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
              onClick={() => setIsExpanded(true)}
            >
              See more services
              <svg aria-hidden="true" className="ml-2 h-6 w-6">
                <path
                  d="m17 14-5 5-5-5M12 18.5V5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </Container>
      {/* <ServicesCTA /> */}
    </section>
  )
}
