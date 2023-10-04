import { useContext, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { CourseDataContext } from './CommonParent' // Adjust the import path as needed
import Image from 'next/image'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import units from '../../assets/units'
import services from '../../assets/services'

units.map((course) => ({}))
services.map((service) => ({}))

export function ContactForm() {
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [imageSrc, setImageSrc] = useState(
    'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Cairns%20Height%20Safety/Contact_Form_mobile_v5nmim.webp'
  )

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // 1024px is the breakpoint for 'lg' in Tailwind
    }

    updateScreenSize() // Initial check
    window.addEventListener('resize', updateScreenSize)

    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [])

  useEffect(() => {
    setImageSrc(
      isLargeScreen
        ? 'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Cairns%20Height%20Safety/Contact_Form_destop_HD_bx0bfi.webp'
        : 'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Cairns%20Height%20Safety/Contact_Form_mobile_v5nmim.webp'
    )
  }, [isLargeScreen])

  // for useEffect
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/fetchNotionData')
      const data = await res.json()
      if (res.ok) {
        setData(data)
      } else {
        setError(data.error)
      }
    }

    fetchData()
  }, [])

  const { workSafelyAtHeights = [], towerRescueDates = [] } =
    useContext(CourseDataContext) || {}

  const renderRadioOptions = (items, name) =>
    items.map((item) => (
      <div key={item.name} className="flex items-center">
        <input
          id={`${name}-${item.name}`}
          name={name}
          defaultValue={item.name}
          type="radio"
          className="h-4 w-4 cursor-pointer border-slate-300 text-orange-600 focus:ring-orange-500"
        />
        <label htmlFor={`${name}-${item.name}`} className="ml-3 cursor-pointer">
          <span className="block text-sm text-slate-700">{item.name}</span>
        </label>
      </div>
    ))

  // Helper function to format date
  function formatDate(dateString) {
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString('en-AU', {
      month: 'short',
      day: 'numeric',
    })
    const year = date.getFullYear()
    return (
      <>
        <span className="font-semibold">{formattedDate}</span>, {year}
      </>
    )
  }

  // Helper function to format date without year
  function formatDateWithoutYear(dateString) {
    const date = new Date(dateString)
    return (
      <span className="font-semibold">
        {date.toLocaleDateString('en-AU', { month: 'short', day: 'numeric' })}
      </span>
    )
  }

  const sortedWorkSafelyAtHeights = [...workSafelyAtHeights].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  )
  const sortedTowerRescueDates = [...towerRescueDates].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  )

  // Filter units to only include "Post Fall Recovery" and "Poletop Rescue"
  const filteredUnits = units.filter(
    (unit) =>
      unit.name === 'Post Fall Recovery' || unit.name === 'Poletop Rescue'
  )

  const formRef = useRef(null)

  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden bg-slate-100 lg:rounded-3xl lg:drop-shadow-xl">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div>
            <motion.div
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: 'fade',
              }}
              className="relative h-56 w-full bg-slate-200 object-cover lg:absolute lg:h-full"
            >
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={imageSrc}
                alt="Cairns Height Safety"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div
        id="enrol"
        className="relative px-4 py-16 sm:px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32"
      >
        <div className="lg:pr-8">
          <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
            <h2 className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
              Let’s work together
            </h2>

            <dl className="mt-8 text-base text-slate-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>18/102 Hartley St</p>
                  <p>Bungalow, QLD 4870</p>
                </dd>
              </div>
              <a href="tel:0412608241" rel="noopener noreferrer">
                <div className="group mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex items-center">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-slate-400 transition duration-300 ease-in-out group-hover:text-orange-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3">0412 608 241</span>
                  </dd>
                </div>
              </a>
              <a
                href="mailto:cairnshs@bigpond.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="group mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex items-center">
                    <MailIcon
                      className="h-6 w-6 flex-shrink-0 text-slate-400 transition duration-300 ease-in-out group-hover:text-orange-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3">cairnshs@bigpond.com</span>
                  </dd>
                </div>
              </a>
            </dl>
            <p className="mt-6 text-base text-slate-500">
              Looking for careers at heights?{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/cairnsheightsafety/?ref=page_internal"
                className="font-medium text-slate-700 underline transition duration-300 ease-in-out hover:text-orange-500 hover:no-underline"
              >
                View all job openings
              </a>
              .
            </p>
            <form
              ref={formRef}
              action="#"
              name="CHS - Contact Form"
              data-netlify="true"
              method="POST"
              className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <input
                type="hidden"
                name="form-name"
                value="CHS - Contact Form"
              />
              <input
                type="hidden"
                name="subject"
                value="Contact Cairns Height Security"
              />
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-slate-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md border-slate-200 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md border-slate-200 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-slate-200 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700"
                >
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-slate-200 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Phone
                  </label>
                  <span
                    id="phone-description"
                    className="text-sm text-slate-500"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="block w-full rounded-md border-slate-200 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how-can-we-help"
                    className="block text-sm font-medium text-slate-700"
                  >
                    How can we help you?
                  </label>
                  <span
                    id="how-can-we-help-description"
                    className="text-sm text-slate-500"
                  >
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how-can-we-help"
                    required
                    maxLength="500"
                    name="how-can-we-help"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className="block w-full rounded-md border border-slate-200 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
              </div>
              <legend className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Would you like to enrol in one of our upcoming courses?
              </legend>

              {/* Collapsible section for Work Safely at Heights */}
              <fieldset className="sm:col-span-2">
                <details>
                  <summary className="cursor-pointer text-sm font-normal text-slate-700">
                    Work Safely at Heights
                  </summary>
                  <div className="mt-4 grid grid-cols-1 gap-y-4">
                    {sortedWorkSafelyAtHeights.map((course, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={`course-WorkSafelyAtHeights-${course.date}`}
                          name="course"
                          value={`Work Safely at Heights - ${course.date}`}
                          type="radio"
                          className="h-4 w-4 cursor-pointer border-slate-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor={`course-WorkSafelyAtHeights-${course.date}`}
                          className="ml-3 cursor-pointer"
                        >
                          <span className="block text-sm text-slate-700">
                            {formatDate(course.date)}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </details>
              </fieldset>

              {/* Collapsible section for Tower Rescue */}
              <fieldset className="sm:col-span-2">
                <details>
                  <summary className="cursor-pointer text-sm font-normal text-slate-700">
                    Tower Rescue - Advanced Operator
                  </summary>
                  <div className="mt-4 grid grid-cols-1 gap-y-4">
                    {sortedTowerRescueDates.map((course, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={`course-TowerRescue-${course.startDate}-${course.endDate}`}
                          name="course"
                          value={`Tower Rescue - ${course.startDate} - ${course.endDate}`}
                          type="radio"
                          className="h-4 w-4 cursor-pointer border-slate-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor={`course-TowerRescue-${course.startDate}-${course.endDate}`}
                          className="ml-3 cursor-pointer"
                        >
                          <span className="block text-sm text-slate-700">
                            {formatDateWithoutYear(course.startDate)} -{' '}
                            {formatDateWithoutYear(course.endDate)},{' '}
                            {new Date(course.endDate).getFullYear()}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </details>
              </fieldset>

              {/* Add this section to the form */}
              {/* <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium text-slate-700">
                  Would you like to enrol in one of our upcoming courses?
                </legend>
                <div className="grid grid-cols-1 mt-4 gap-y-4">
                  {sortedWorkSafelyAtHeights.map((course, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`course-WorkSafelyAtHeights-${course.date}`}
                        name="course"
                        value={`Work Safely at Heights - ${course.date}`}
                        type="radio"
                        className="w-4 h-4 text-orange-600 cursor-pointer border-slate-300 focus:ring-orange-500"
                      />
                      <label
                        htmlFor={`course-WorkSafelyAtHeights-${course.date}`}
                        className="ml-3 cursor-pointer"
                      >
                        <span className="block text-sm text-slate-700">
                          Work Safely at Heights{' '}
                          <svg
                            viewBox="0 0 2 2"
                            className="mx-2 inline h-0.5 w-0.5 fill-current"
                            aria-hidden="true"
                          >
                            <circle cx={1} cy={1} r={1} />
                          </svg>{' '}
                          {formatDate(course.date)}
                        </span>
                      </label>
                    </div>
                  ))}
                  {sortedTowerRescueDates.map((course, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        id={`course-TowerRescue-${course.startDate}-${course.endDate}`}
                        name="course"
                        value={`Tower Rescue - ${course.startDate} - ${course.endDate}`}
                        type="radio"
                        className="w-4 h-4 text-orange-600 cursor-pointer border-slate-300 focus:ring-orange-500"
                      />
                      <label
                        htmlFor={`course-TowerRescue-${course.startDate}-${course.endDate}`}
                        className="ml-3 cursor-pointer"
                      >
                        <span className="block text-sm text-slate-700">
                          Tower Rescue{' '}
                          <svg
                            viewBox="0 0 2 2"
                            className="mx-2 inline h-0.5 w-0.5 fill-current"
                            aria-hidden="true"
                          >
                            <circle cx={1} cy={1} r={1} />
                          </svg>{' '}
                          {formatDateWithoutYear(course.startDate)} -{' '}
                          {formatDateWithoutYear(course.endDate)},{' '}
                          {new Date(course.endDate).getFullYear()}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset> */}

              {/* Course Selection */}
              <fieldset id="other-courses" className="sm:col-span-2">
                <legend className="block text-sm font-medium text-slate-700">
                  Are you interested in enrolling in one of our other CHS
                  courses?
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  {renderRadioOptions(filteredUnits, 'course')}
                </div>
              </fieldset>
              {/* <PickServices /> */}
              <fieldset id="CHS-services" className="sm:col-span-2">
                <legend className="block text-sm font-medium text-slate-700">
                  Would you like a free quote for one our rope access services?
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  {services.map((service) => (
                    <div key={service.title} className="flex items-center">
                      <input
                        id={`service-${service.title}`}
                        name="service"
                        defaultValue={service.title}
                        type="radio"
                        className="h-4 w-4 cursor-pointer border-slate-300 text-orange-600 focus:ring-orange-500 "
                      />
                      <label
                        htmlFor={`service-${service.title}`}
                        className="ml-3 cursor-pointer "
                      >
                        <span className="block cursor-pointer text-sm text-slate-700 ">
                          {service.title}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div className="text-right sm:col-span-2">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => formRef.current.reset()}
                    className="mr-3 inline-flex justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-full border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
