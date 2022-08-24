import Head from 'next/head'

import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '../../components/Footer'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import slugify from 'slugify'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import units from '../../../assets/units'

export default function Courses(props) {
  const slugify = require('slugify')

  return (
    <>
      <Head>
        <title>
          Cairns Height Safety offers numerous 3M Australia nationally
          accredited Height Safety and Rescue training courses
        </title>
        <meta
          name="description"
          content="CHS offers the following courses: RIIWHS204E Work safely at heights, PUASAR022A Participate in a rescue operation, PUASAR032A Undertake vertical rescue, PUASAR022 Participate in a rescue operation, PUATEA001 Work in a team, PUATEA002 Work autonomously, RIIRIS201E Conduct local risk control, MEM15004 Perform inspection, and UETTDRRF02 Perform pole top rescue. "
        />
      </Head>
      <section>
        <div className="overflow-hidden bg-slate-50">
          <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Cairns Height Safety offers the following 3M Australia
                  nationally accredited courses.
                </h2>
                <figure className="relative max-w-md mx-auto text-center lg:mx-0 lg:text-left">
                  <figcaption className="mt-6 text-sm text-slate-500">
                    <div className="relative flex items-center justify-center w-40 h-10">
                      <Image
                        width={577}
                        height={297}
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657313729/Cairns%20Height%20Safety/3M_long_logo_o23jpc.svg"
                        alt="3M Australia"
                        objectFit="contain"
                        layout="intrinsic"
                        objectPosition="center"
                        className=""
                      />
                    </div>
                  </figcaption>
                </figure>
                <div className="mt-16 rounded-md">
                  <Link href="/" passHref>
                    <a className="inline-flex items-center px-5 py-3 mt-8 text-base font-medium leading-6 tracking-tight transition duration-300 ease-in-out bg-white border rounded-full shadow hover:bg-t border-slate-300 text-slate-900 hover:bg-slate-700 hover:text-white">
                      Back to CHS home
                    </a>
                  </Link>
                </div>
              </div>

              <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
                {units.map((course, i) => (
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
                        duration: 0.7,
                        delay: i * 0.3,
                        ease: 'easeOut',
                      }}
                      key={i}
                      className="p-6 transition duration-300 ease-in-out cursor-pointer group rounded-xl bg-slate-100 drop-shadow-md hover:bg-slate-200 hover:drop-shadow-none"
                    >
                      <dt>
                        <p className="font-medium text-orange-600">
                          {course.code}
                        </p>
                        <p className="mt-2 text-lg font-medium leading-6 text-slate-900">
                          {course.name}
                        </p>
                      </dt>
                      <div className="flex items-center justify-between">
                        <dd className="mt-2 text-base text-slate-500">
                          From ${course.cost} &middot; {course.duration}
                        </dd>
                        <dd className="mt-2 text-base">
                          <ArrowNarrowRightIcon
                            className="w-6 h-6 text-slate-400 group-hover:text-orange-600"
                            aria-hidden="true"
                          />
                        </dd>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}
