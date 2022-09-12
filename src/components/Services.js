import Image from 'next/image'
import { useState } from 'react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { ServicesCTA } from './ServicesCTA'
import { motion } from 'framer-motion'
import services from '../../assets/services'

export function Services() {
  let [isExpanded, setIsExpanded] = useState(false)

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
          {services.slice(1, isExpanded ? undefined : 5).map((service, i) => (
            <motion.li
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                initialDelay: 0.3,
                duration: 0.5,
                delay: i * 0.2,
                ease: 'easeOut',
              }}
              key={i}
              className="[counter-increment:video]"
            >
              <div className="relative flex items-center justify-center px-6 shadow-lg bg-t h-44 rounded-2xl">
                <motion.div
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    type: 'fade',
                  }}
                  className="flex overflow-hidden rounded shadow-sm"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg"
                    unoptimized={true}
                  />
                </motion.div>
              </div>
              <motion.div
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  type: 'fade',
                }}
              >
                <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
        {!isExpanded && (
          <div className="flex justify-center mt-16">
            <button
              type="button"
              className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
              onClick={() => setIsExpanded(true)}
            >
              See more services
              <svg aria-hidden="true" className="w-6 h-6 ml-2">
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
    </section>
  )
}
