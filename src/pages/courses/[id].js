import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import units from '../../../assets/units'
import { CameraIcon } from '@heroicons/react/solid'
import { motion } from 'framer-motion'
import { AstraGroupLogo } from '@/components/AstraGroupLogo'

export const getStaticProps = async ({ params }) => {
  const slugify = require('slugify')
  const unitList = units.filter((course) => slugify(course.name) === params.id)
  return {
    props: {
      course: unitList[0],
    },
  }
}

export const getStaticPaths = async () => {
  const slugify = require('slugify')
  const paths = units.map((course) => {
    return {
      params: { id: slugify(course.name) },
    }
  })

  return { paths, fallback: false }
}

units.map((course) => ({}))

function removeFirstWord(str) {
  const indexOfSpace = str.indexOf(' ')

  if (indexOfSpace === -1) {
    return ''
  }

  return str.substring(indexOfSpace + 1)
}

export default function Unit({ course }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>
          Cairns Height Safety offers {course.code} {course.name}
        </title>
        <meta name="description" content={course.summaryDescription} />
        <meta name="keywords" content={course.name}></meta>
      </Head>
      <section className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-slate-50 lg:block" />
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="pb-4 text-base text-orange-600">
                <ul role="list">
                  {course.codes.flat().map((code, i) => (
                    <div key={i}>
                      <li>
                        {' '}
                        <span className="font-semibold tracking-wide">
                          {code.split(' ')[0]}
                        </span>{' '}
                        <span className="font-normal text-slate-500">
                          {removeFirstWord(code)}
                        </span>
                      </li>
                    </div>
                  ))}
                </ul>
              </h2>
              <div className="flex items-center rounded-lg bg-orange-50 p-6">
                <div>
                  <p className="font-bold text-orange-600">
                    Course prerequisites
                  </p>
                  <ul role="list">
                    {course.prerequisites.flat().map((prerequisite, i) => (
                      <div key={i}>
                        <li
                          className={
                            course.prerequisites.length > 1
                              ? `ml-5 list-disc text-orange-600`
                              : `text-orange-600`
                          }
                        >
                          {prerequisite}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                {course.name}
              </p>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <figcaption className="mt-3 flex pb-4 text-sm text-slate-500 md:pb-4">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-none p-1">
                      <AstraGroupLogo className="h-12 w-12" />
                    </div>
                    <span className="ml-4 max-w-lg">
                      On successful completion, students will receive an ASTRA
                      Group Services – RTO 31544 Statement of Attainment in{' '}
                      {course.codes.length > 1
                        ? course.multipleCodes
                        : course.codes.flat()}
                      .
                    </span>
                  </figcaption>
                  <div className="aspect-h-12 aspect-w-12 bg-slate-200 lg:aspect-none">
                    <motion.div
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      initial={{ opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        type: 'fade',
                      }}
                    >
                      <Image
                        className="rounded-lg object-cover object-center shadow-lg"
                        src={course.imageUrl}
                        alt={course.name}
                        layout="responsive"
                        width={1184}
                        height={1184}
                        objectFit="cover"
                        objectPosition="center"
                        unoptimized={true}
                      />
                    </motion.div>
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mx-auto max-w-prose text-base lg:max-w-none">
                <p className="text-lg text-slate-500">
                  {course.summaryDescription}
                </p>
                <ul role="list">
                  {course.courseAim
                    ? course.courseAim.flat().map((aim, i) => (
                        <div key={i}>
                          <li className="mt-5 text-slate-500">{aim}</li>
                        </div>
                      ))
                    : null}
                </ul>
              </div>
              <div className="prose prose-orange mx-auto mt-5 text-slate-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <h3>Course objectives</h3>
                <p>
                  By the end of the course, the student will be able to
                  demonstrate{' '}
                  <span className="font-semibold text-orange-600">
                    knowledge
                  </span>{' '}
                  of:
                </p>{' '}
                <ul role="list">
                  {course.knowledgeAims.flat().map((aim, i) => (
                    <div key={i}>
                      <li>{aim}</li>
                    </div>
                  ))}
                </ul>
                <p>
                  The student will also be able to demonstrate the following{' '}
                  <span className="font-semibold text-orange-600">skills</span>:
                </p>{' '}
                <ul role="list">
                  {course.skillAims.flat().map((aim, i) => (
                    <div key={i}>
                      <li>{aim}</li>
                    </div>
                  ))}
                </ul>
                <h3>Course assessment</h3>
                <p>
                  The trainer will assess a student’s competency in this course,
                  both theoretically and practically.
                </p>
                <p>
                  The theory assessment consists of multiple choice and short
                  answer questions.
                </p>
                <p>
                  The practical assessment will require students to demonstrate:
                </p>
                <ul role="list">
                  {course.courseAssessment.flat().map((aim, i) => (
                    <div key={i}>
                      <li>{aim}</li>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex items-center rounded-lg bg-orange-50 p-6">
                <div>
                  <p className="pb-4 font-bold text-orange-600">
                    Course duration
                  </p>
                  <p className="text-orange-600">
                    {course.hours} over {course.duration}{' '}
                    <span aria-hidden="true">&middot;</span>
                    <span> From ${course.cost}</span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
                <div className="rounded-full">
                  <Link href="/#contact" passHref>
                    <a className="flex w-full items-center justify-center rounded-full border border-transparent bg-orange-600 px-5 py-2 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-orange-500">
                      Enrol in course
                    </a>
                  </Link>
                </div>
                <div className="ml-4 rounded-full">
                  <Link href="/courses" passHref>
                    <a className="flex w-full items-center justify-center rounded-full border border-orange-500 bg-white px-5 py-2 text-base font-medium text-orange-600 shadow-sm transition duration-300 ease-in-out hover:border-slate-700 hover:bg-slate-700 hover:text-white">
                      See all courses
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
