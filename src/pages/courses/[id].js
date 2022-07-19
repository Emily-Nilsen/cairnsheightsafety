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

export default function Unit({ course }) {
  const router = useRouter()

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-slate-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-orange-600">
              {course.code}
            </h2>
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
                  <CameraIcon
                    className="h-5 w-5 flex-none text-slate-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Some info here?</span>
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
              <h3>How we helped</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et.
                Consectetur pretium in volutpat, diam. Montes, magna cursus
                nulla feugiat dignissim id lobortis amet. Laoreet sem est
                phasellus eu proin massa, lectus. Diam rutrum posuere donec
                ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
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
                  <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-orange-600 shadow-sm transition duration-300 ease-in-out hover:bg-slate-50">
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
