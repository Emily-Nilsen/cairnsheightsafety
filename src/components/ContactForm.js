import Image from 'next/image'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

export function ContactForm() {
  return (
    <div className="relative mx-auto overflow-hidden max-w-7xl bg-slate-50 lg:rounded-3xl lg:drop-shadow-xl">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div>
            <div className="relative object-cover w-full h-56 lg:absolute lg:h-full">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657592537/Cairns%20Height%20Safety/Riley/IMG_1432_atgcs4.jpg"
                alt="Cairns Height Safety"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="mt-8 text-4xl font-bold tracking-tight font-display text-slate-900">
              Let’s work together
            </h2>

            <dl className="mt-8 text-base text-slate-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>18/102 Hartley St</p>
                  <p>Cairns, Queensland</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex items-center">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-slate-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">0412 608 241</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex items-center">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-slate-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">cairnshs@bigpond.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-slate-500">
              Looking for careers?{' '}
              <a href="#" className="font-medium underline text-slate-700">
                View all job openings
              </a>
              .
            </p>
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 mt-9 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
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
                    name="how-can-we-help"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className="block w-full border rounded-md border-slate-200 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
              </div>
              <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium text-slate-700">
                  Expected budget
                </legend>
                <div className="grid grid-cols-1 mt-4 gap-y-4">
                  <div className="flex items-center">
                    <input
                      id="budget-under-25k"
                      name="budget"
                      defaultValue="under_25k"
                      type="radio"
                      className="w-4 h-4 text-orange-600 border-slate-200 focus:ring-orange-500"
                    />
                    <label htmlFor="budget-under-25k" className="ml-3">
                      <span className="block text-sm text-slate-700">
                        Less than $25K
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget-25k-50k"
                      name="budget"
                      defaultValue="25k-50k"
                      type="radio"
                      className="w-4 h-4 text-orange-600 border-slate-200 focus:ring-orange-500"
                    />
                    <label htmlFor="budget-25k-50k" className="ml-3">
                      <span className="block text-sm text-slate-700">
                        $25K – $50K
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget-50k-100k"
                      name="budget"
                      defaultValue="50k-100k"
                      type="radio"
                      className="w-4 h-4 text-orange-600 border-slate-200 focus:ring-orange-500"
                    />
                    <label htmlFor="budget-50k-100k" className="ml-3">
                      <span className="block text-sm text-slate-700">
                        $50K – $100K
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget-over-100k"
                      name="budget"
                      defaultValue="over_100k"
                      type="radio"
                      className="w-4 h-4 text-orange-600 border-slate-200 focus:ring-orange-500"
                    />
                    <label htmlFor="budget-over-100k" className="ml-3">
                      <span className="block text-sm text-slate-700">
                        $100K+
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="sm:col-span-2">
                <label
                  htmlFor="how-did-you-hear-about-us"
                  className="block text-sm font-medium text-slate-700"
                >
                  How did you hear about us?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="how-did-you-hear-about-us"
                    id="how-did-you-hear-about-us"
                    className="block w-full rounded-md border-slate-200 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
