import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import slugify from 'slugify'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import units from '../../assets/units'

export function Courses(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  const slugify = require('slugify')

  return (
    <section
      id="courses"
      aria-labelledby="courses-title"
      className="py-16 scroll-mt-14 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="courses-title">
          Training Courses
        </SectionHeading>
        <p className="mt-8 text-4xl font-bold tracking-tight font-display text-slate-900">
          Take a look at the full range of training courses CHS offers.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          All participants receive a 3M Australia Statement of Attainment for
          any of our completed nationally recognised units of competency.
        </p>
      </Container>

      {/* Training courses with see more */}
      <div className="relative px-4 mt-16 bg-white sm:px-6 lg:px-8 ">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
            {units.slice(0, isExpanded ? undefined : 3).map((course, i) => (
              <Link
                key={course.name}
                href={`/courses/${slugify(course.name)}`}
                passHref
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    initialDelay: 0.3,
                    duration: 0.8,
                    delay: i * 0.5,
                    ease: 'easeOut',
                  }}
                  key={i}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        type: 'fade',
                      }}
                      className="relative object-cover w-full h-48 bg-t"
                    >
                      <Image
                        src={course.imageUrl}
                        alt={course.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        unoptimized={true}
                      />
                    </motion.div>
                  </div>
                  <div className="flex flex-col justify-between flex-1 p-6 transition duration-300 ease-in-out bg-white hover:bg-slate-100">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-orange-600">
                        <a className="hover:underline">{course.code}</a>
                      </p>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-slate-900">
                          {course.name}
                        </p>
                        <p className="mt-3 text-base text-slate-500">
                          {course.summaryDescription}
                        </p>
                      </a>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">{course.duration}</span>
                          <div className="relative flex items-center justify-center w-10 h-10 p-1 bg-orange-100 rounded-full">
                            <Image
                              width={577}
                              height={297}
                              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657313516/Cairns%20Height%20Safety/3M_logo_e8twte.svg"
                              alt="3M Australia"
                              objectFit="contain"
                              layout="intrinsic"
                              objectPosition="center"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-slate-900">
                          <a className="hover:underline">
                            Duration: {course.duration}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-slate-500">
                          <time>{course.hours}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>From ${course.cost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          {!isExpanded && (
            <div className="flex justify-center mt-10">
              <button
                type="button"
                className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
                onClick={() => setIsExpanded(true)}
              >
                See more courses
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
        </div>
      </div>
    </section>
  )
}
