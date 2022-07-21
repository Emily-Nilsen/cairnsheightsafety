import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import units from '../../../assets/units'
import { CameraIcon } from '@heroicons/react/solid'

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
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-slate-50 lg:block" />
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
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <div>
                    <Image
                      className="rounded-lg object-cover object-center shadow-lg"
                      src={course.imageUrl}
                      alt={course.name}
                      layout="responsive"
                      width={1184}
                      height={1376}
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 flex text-sm text-slate-500">
                  <div className="relative flex h-10 w-12 items-center justify-center rounded-full bg-orange-100 p-1">
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
                  <span className="ml-4 max-w-lg">
                    On successful completion, students will receive a 3M
                    Statement of Attainment in {course.codes.flat()}.
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-slate-500">
                {course.summaryDescription}
              </p>
              <p className="mt-5 text-slate-500">{course.courseAim}</p>
            </div>
            <div className="prose prose-orange mx-auto mt-5 text-slate-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <h3>Course objectives</h3>
              <p>
                By the end of the course, the student will be able to
                demonstrate{' '}
                <span className="font-semibold text-orange-600">knowledge</span>{' '}
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
                The practical assessment will require students to participate
                in:
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
              <div className="rounded-md">
                <Link href="/#contact" passHref>
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-3 text-base font-medium text-white shadow-sm transition duration-300 ease-in-out hover:bg-orange-500">
                    Enrol in course
                  </a>
                </Link>
              </div>
              <div className="ml-4 rounded-md">
                <Link href="/courses" passHref>
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-slate-100 px-5 py-3 text-base font-medium text-orange-600 shadow-sm transition duration-300 ease-in-out hover:bg-slate-50">
                    See all courses
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
