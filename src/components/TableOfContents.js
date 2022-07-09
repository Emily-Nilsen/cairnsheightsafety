import { useState } from 'react'
import Image from 'next/image'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

const tableOfContents = {
  'Getting started': {
    'Getting started': 1,
    'Intro to Figma': 15,
    'Setting up your first artboard': 20,
  },
  Fundamentals: {
    'Strokes and fills': 21,
    'End points': 22,
    'Bezier curves': 26,
    'Designing on a grid': 31,
    'Vector shapes': 45,
  },
  'Boolean operations': {
    'Combining shapes': 50,
    'Subtracting shapes': 57,
    'Intersecting shapes': 66,
    Flattening: 78,
  },
  'Optimizing for production': {
    'Preparing for SVG': 82,
    'Configuring your export settings': 88,
    'Minifying and removing metadata': 95,
  },
}

const posts = [
  {
    title: 'Work Safely at Heights',
    href: '#',
    category: { name: 'RIIWHS204D', href: '#' },
    description:
      'This course covers workers who work at heights and are required to attain the level of Height Safety Operator.',
    hours: '8 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133829/Cairns%20Height%20Safety/chs_img_42_pfyeq7.jpg',
    cost: 280,
    author: {
      name: '1 day',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Tower Rescue – Advanced Operator',
    href: '#',
    category: { name: 'PUASAR022A', href: '#' },
    description:
      'This course is designed to provide candidates with the necessary skills and knowledge to perform vertical rope rescue techniques off towers, masts and structures using technical rope rescue equipment.',
    hours: '16 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132247/Cairns%20Height%20Safety/chs_img_33_tlfgxz.jpg',
    cost: '??',
    author: {
      name: '2 days',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Undertake Vertical Rescue',
    href: '#',
    category: { name: 'PUASAR032A', href: '#' },
    description:
      'This unit covers the competency required to undertake vertical rescue in a range of emergency situations in natural and man-made environments.',
    hours: '40 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_46_moygx5.jpg',
    cost: '??',
    author: {
      name: '5 days',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export function TableOfContents() {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Training Courses
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the content covered in the book. Everything you
          need to know is inside.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          “Everything Starts as a Square” is comprised of 240 tightly edited,
          highly visual pages designed to teach you everything you need to know
          about icon design with no unnecessary filler.
        </p>

        {/* Original Table of Contents */}
        <ol className="mt-16 space-y-10 sm:space-y-16">
          {Object.entries(tableOfContents)
            .slice(0, isExpanded ? undefined : 2)
            .map(([title, pages]) => (
              <li key={title}>
                <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                  {title}
                </h3>
                <ol className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:py-7 sm:px-8">
                  {Object.entries(pages).map(([title, pageNumber]) => (
                    <li key={title} className="flex justify-between py-3">
                      <span className="font-medium text-slate-900">
                        {title}
                      </span>
                      <span className="font-mono text-slate-400">
                        <span className="sr-only">on page {pageNumber}</span>
                        <span aria-hidden="true">{pageNumber}</span>
                      </span>
                    </li>
                  ))}
                </ol>
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
              See more
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

      {/* Training courses */}
      <div className="relative mt-16 bg-slate-50 px-4 sm:px-6 lg:px-8 ">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-orange-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-slate-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-slate-500">
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 p-1">
                          <Image
                            width={577}
                            height={297}
                            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657313516/Cairns%20Height%20Safety/3M_logo_e8twte.svg"
                            alt="3M Australia"
                            objectFit="contain"
                            layout="intrinsic"
                            objectPosition="center"
                            className=""
                          />
                        </div>
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-slate-900">
                        <a href={post.author.href} className="hover:underline">
                          Duration: {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-slate-500">
                        <time>{post.hours}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>${post.cost}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
