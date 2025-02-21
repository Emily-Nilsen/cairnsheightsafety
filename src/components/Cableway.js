import Image from 'next/image'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { motion } from 'framer-motion'
import { PlayIcon } from '@heroicons/react/solid'

const resources = [
  {
    title: 'IMMOOS cable carriages',
    description:
      'As a complete supplier of rescue equipment, IMMOOS delivers various types of cable rescue carriages. IMMOOS pays special attention to simple handling and efficient use in their design.',
    image: function FigmaImage() {
      return (
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            type: 'fade',
          }}
          className="bg-t absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657591550/Cairns%20Height%20Safety/IMMOOS/IMG_1899_cvfenl.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            unoptimized={true}
          />
        </motion.div>
      )
    },
  },
  {
    title: 'IMMOOS self-propelled evacuation carriage',
    description:
      'Watch a short film demonstrating the operation of an IMMOOS self-propelled evacuation carriage Type SS1.',
    image: function VideoPlayerImage() {
      return (
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: 'fade',
          }}
          className="bg-t absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657591553/Cairns%20Height%20Safety/IMMOOS/Tower_head_tn30fn.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            unoptimized={true}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://youtu.be/WdVBxRvtQwY"
            >
              <PlayIcon
                className="h-12 w-12 cursor-pointer text-white opacity-80 transition duration-300 ease-in-out hover:text-orange-500 hover:opacity-100"
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.div>
      )
    },
  },
  {
    title: 'IMMOOS self-driven carriage Type SS1 mGB',
    description:
      'Self-driven carriage with automatic centrifugal brake, dead man’s brake and hand brake.',
    image: function DiscordImage() {
      return (
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            type: 'fade',
          }}
          className="bg-t absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657591535/Cairns%20Height%20Safety/IMMOOS/IMG_2341_ajjoek.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            unoptimized={true}
          />
        </motion.div>
      )
    },
  },
]

export function Cableway() {
  return (
    <section
      id="cableway"
      aria-labelledby="cableway-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="cableway-title">
          IMMOOS Cableway
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Cairns Height Safety is the Australian supplier of IMMOOS cable
          carriages.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          As a complete rescue equipment supplier, IMMOOS delivers various cable
          rescue carriages.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Current regulations require every cable railway company to consider a
          potential rescue.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Safety equipment engineers must also consider simplicity and, above
          all, the safety of the required tasks for rescue personnel. Only then
          can it be possible to perform a successful rescue in time.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          IMMOOS is a company that thinks about cableway rescues every day. As
          such, IMMOOS engineers pay special attention to ensuring that all
          equipment is simple to handle and easy to use. The 2-roller running
          gear results in smooth and stable running on the main cable. All
          devices are also certified and meet the requirements of the directive
          (EU) <span className="font-medium text-slate-900">2016/424</span>{' '}
          relating to{' '}
          <span className="font-medium text-orange-600">
            Cableway Installations
          </span>
          , and the EN standard{' '}
          <span className="font-medium text-slate-900">1909</span>{' '}
          <span className="font-medium text-orange-600">
            Recovery and Evacuation
          </span>
          .
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          However, it takes more than just good rescue equipment for a
          trouble-free rescue, especially to rescue all people in a cableway
          system within a specified time. Good planning, organisation, optimal
          rescue equipment, and trained personnel strongly influence a rescue’s
          success.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
          {resources.map((resource, i) => (
            <motion.li
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                initialDelay: 0.3,
                duration: 0.7,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
              key={i}
              // key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
