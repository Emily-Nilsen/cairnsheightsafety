import Image from 'next/image'
import { useState } from 'react'
import { Container } from './Container'
import { ButtonLink } from './Button'
import { SectionHeading } from './SectionHeading'
import { ServicesCTA } from './ServicesCTA'
import { motion, AnimatePresence } from 'framer-motion'
import calculateYearsOfExperience from '../../utils/calculateYears'
import services from '../../assets/services'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 3,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0, 1, 0],
    transition: {
      duration: 6,
      type: 'fade',
      ease: 'easeOut',
    },
  },
}
const itemLast = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      type: 'fade',
      ease: 'easeIn',
    },
  },
}

export function Services() {
  let [isExpanded, setIsExpanded] = useState(false)

  const turbineImages = [
    {
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133828/Cairns%20Height%20Safety/chs_img_38_iv2ggz.jpg',
    },
    {
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668789460/Cairns%20Height%20Safety/image_02_fljfvj.webp',
    },
    {
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Cairns%20Height%20Safety/CHS_replacement_2_katy6b.webp',
    },
    {
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668789459/Cairns%20Height%20Safety/image_01_xtdfuf.webp',
    },
    {
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Cairns%20Height%20Safety/CHS_replacement_1_u8mzsc.webp',
    },
    {
      image:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1668789459/Cairns%20Height%20Safety/image_05_rz8yf5.webp',
    },
  ]

  const yearsOfExperience = calculateYearsOfExperience(1996)

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="services-title">
          Services
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Cairns Height Safety offers Industrial Rope Access services.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          CHS has over {yearsOfExperience} years of experience within the Rope
          Access industry, and we offer you the following services:
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          className=" relative grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.slice(0, isExpanded ? undefined : 4).map((service, i) => (
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
              <div className="bg-t relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg">
                {service.image ? (
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
                      unoptimized
                    />
                  </motion.div>
                ) : (
                  <>
                    <ol>
                      {turbineImages.map((img, i) => (
                        <motion.li
                          key={i}
                          variants={item}
                          exit={{ opacity: 1 }}
                        >
                          <div className="">
                            <Image
                              src={img.image}
                              alt=""
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              className="rounded-lg"
                              unoptimized
                            />
                          </div>
                        </motion.li>
                      ))}
                      <motion.li
                        key={i}
                        variants={itemLast}
                        exit={{ opacity: 1 }}
                      >
                        <div className="">
                          <Image
                            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133828/Cairns%20Height%20Safety/chs_img_38_iv2ggz.jpg"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="rounded-lg"
                            unoptimized
                          />
                        </div>
                      </motion.li>
                    </ol>
                  </>
                )}
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
        </motion.ol>
        {!isExpanded && (
          <div className="mt-16 flex justify-center">
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
    </section>
  )
}
