import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import { AstraGroupLogo } from './AstraGroupLogo'
import { ButtonLink } from './Button'

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
      className="relative scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="courses-title">
          Training Courses
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Take a look at the full range of training courses CHS offers.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          All participants receive an ASTRA Group Services – RTO 31544 Statement
          of Attainment for any of our completed nationally recognised units of
          competency.
        </p>
        <div className="mt-12 flex w-full justify-center">
          <ButtonLink href="/courses#dates">View our course dates</ButtonLink>
        </div>
      </Container>

      {/* Training courses with see more */}
      <div className="relative mt-16 bg-white px-4 sm:px-6 lg:px-8 ">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {units.slice(0, isExpanded ? undefined : 3).map((course, i) => (
              <Link key={course.name} href={`/courses/${slugify(course.name)}`}>
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
                  className="flex cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg"
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
                      className="bg-t relative h-48 w-full object-cover"
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
                  <div className="flex flex-1 flex-col justify-between bg-white p-6 transition duration-300 ease-in-out hover:bg-slate-100">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-orange-600">
                        <a className="hover:underline">{course.code}</a>
                      </p>
                      <a className="mt-2 block">
                        <p className="text-xl font-semibold text-slate-900">
                          {course.name}
                        </p>
                        <p className="mt-3 text-base text-slate-500">
                          {course.summaryDescription}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#">
                          <span className="sr-only">{course.duration}</span>
                          <div className="relative flex h-12 w-12 items-center justify-center p-1">
                            <AstraGroupLogo className="h-12 w-12" />
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
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
                onClick={() => setIsExpanded(true)}
              >
                See more courses
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
        </div>
      </div>
    </section>
  )
}
