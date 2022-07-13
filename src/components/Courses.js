import { useState } from 'react'
import Image from 'next/image'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

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
    about: {
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
    about: {
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
    about: {
      name: '5 days',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Post Fall Recovery',
    href: '#',
    category: { name: 'PUASAR022A', href: '#' },
    description:
      'This course covers workers who work at heights in industrial sectors and are required to perform a rescue of a workmate from an industrial structure using a pre-engineered rescue kit.',
    hours: '16 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_46_moygx5.jpg',
    cost: '900',
    about: {
      name: '2 days',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Height Safety Equipment Inspection',
    href: '#',
    category: { name: 'MEM15004B', href: '#' },
    description:
      'This course covers inspecting products, keeping records and providing feedback on the product’s conformance to the relevant specifications.',
    hours: '40 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_44_roaohp.jpg',
    cost: '??',
    about: {
      name: '5 days',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Tower Crane Rescue and Evacuation',
    href: '#',
    category: { name: 'MEM15004B', href: '#' },
    description:
      'This course equips candidates with the necessary skills to respond to emergencies that may occur while working on Tower Cranes.',
    hours: '8 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_46_moygx5.jpg',
    cost: '290',
    about: {
      name: '1 day',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Perform Inspection',
    href: '#',
    category: { name: '???', href: '#' },
    description:
      'This unit covers inspecting products, keeping records and providing feedback on the product’s conformance to the relevant specifications.',
    hours: '4 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657133830/Cairns%20Height%20Safety/chs_img_44_roaohp.jpg',
    cost: '??',
    about: {
      name: '1 day',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Bridge/Rooftop Rescue',
    href: '#',
    category: { name: '???', href: '#' },
    description:
      'This course equips candidates with the necessary skills to recover a casualty from a bridge, rooftop, or other structures where overhead anchorage structures are unavailable in the event of an emergency.',
    hours: '8 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132247/Cairns%20Height%20Safety/chs_img_33_tlfgxz.jpg',
    cost: '??',
    about: {
      name: '1 day',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Jump Form Rescue',
    href: '#',
    category: { name: '???', href: '#' },
    description:
      'This course teaches candidates the necessary skills to perform the recovery of a casualty from Jump Forms in the event of an emergency.',
    hours: '8 hours',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132247/Cairns%20Height%20Safety/chs_img_33_tlfgxz.jpg',
    cost: '??',
    about: {
      name: '1 day',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export function Courses() {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="courses"
      aria-labelledby="courses-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="courses-title">
          Training Courses
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Take a look at all the training courses CHS offers.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          All participants receive a 3M Australia Statement of Attainment for
          any of our completed nationally recognised units of competency.
        </p>
      </Container>

      {/* Training courses with see more */}
      <div className="relative mt-16 bg-slate-50 px-4 sm:px-6 lg:px-8 ">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.slice(0, isExpanded ? undefined : 3).map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="relative h-48 w-full object-cover">
                    <Image
                      className=""
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
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
                      <a href={post.about.href}>
                        <span className="sr-only">{post.about.name}</span>
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
                        <a href={post.about.href} className="hover:underline">
                          Duration: {post.about.name}
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
