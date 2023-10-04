import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { CourseDataContext } from '@/components/CommonParent'
import { Footer } from '../../components/Footer'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import slugify from 'slugify'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { AstraGroupLogo } from '@/components/AstraGroupLogo'
import units from '../../../assets/units'
import { CourseCalendarHeader } from '@/components/CourseCalendarHeader'
import { WorkSafelyAtHeights } from '@/components/WorkSafelyAtHeights'
import { TowerRescue } from '@/components/TowerRescue'
import notion from '../../../utils/notion'

// export async function getStaticProps() {
//   const databaseIdWorkSafely = process.env.NOTION_WORK_SAFELY_DB_ID
//   const databaseIdTowerRescue = process.env.NOTION_TOWER_RESCUE_DB_ID

//   const responseWorkSafely = await notion.databases.query({
//     database_id: databaseIdWorkSafely,
//   })

//   const responseTowerRescue = await notion.databases.query({
//     database_id: databaseIdTowerRescue,
//   })

//   const workSafelyAtHeights = responseWorkSafely.results.map((entry) => {
//     return {
//       id: entry.id,
//       date: entry.properties['date']?.date?.start || '',
//       href: entry.properties['href']?.rich_text[0]?.plain_text || '',
//     }
//   })

//   const towerRescueDates = responseTowerRescue.results.map((entry) => {
//     return {
//       id: entry.id,
//       startDate: entry.properties['Start Date']?.date?.start || '',
//       endDate: entry.properties['End Date']?.date?.start || '',
//       href: entry.properties['href']?.rich_text[0]?.plain_text || '',
//     }
//   })

//   return {
//     props: {
//       workSafelyAtHeights,
//       towerRescueDates,
//     },
//   }
// }

export default function Courses() {
  const courseData = useContext(CourseDataContext)
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
          content="CHS offers the following courses: RIIWHS204E Work safely at heights, PUASAR022A Participate in a rescue operation, and UETTDRRF02 Perform pole top rescue. "
        />
        <meta
          name="keywords"
          content="Cairns, FNQ, Queensland, Far North Queensland, Tablelands, RIIWHS204E Work safely at heights, PUASAR022A Participate in a rescue operation, UETTDRRF02 Perform pole top rescue, training courses, Gordonvale, Edmonton, Northern Beaches, Atherton, Ravenshoe, Kuranda, Smithfield, Palm Cove, Mossman, Cape Tribulation, Northern Cairns, Cairns City, Esplanade"
        ></meta>
        <link
          rel="canonical"
          href="https://cairnsheightsafety.com/courses"
          key="canonical"
        />
      </Head>
      <section>
        <div className="overflow-hidden bg-slate-50">
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Cairns Height Safety offers the following ASTRA Group Services
                  – RTO 31544 nationally accredited courses.
                </h2>
                <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
                  <figcaption className="mt-6 text-sm text-slate-500">
                    <div className="relative flex h-10 w-40 items-center justify-start">
                      <AstraGroupLogo className="h-12 w-12" />
                    </div>
                  </figcaption>
                </figure>
                <div className="mt-16 rounded-md">
                  <Link href="/" passHref>
                    <a className="shadow hover:bg-t mt-8 inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-base font-medium leading-6 tracking-tight text-slate-900 transition duration-300 ease-in-out hover:bg-slate-700 hover:text-white">
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
                      }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        initialDelay: 0,
                        duration: 0.7,
                        delay: i * 0.1,
                        ease: 'easeIn',
                      }}
                      key={i}
                      className="group cursor-pointer rounded-xl bg-slate-100 p-6 drop-shadow-md transition duration-300 ease-in-out hover:bg-slate-200 hover:drop-shadow-none"
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
                            className="h-6 w-6 text-slate-400 group-hover:text-orange-600"
                            aria-hidden="true"
                          />
                        </dd>
                      </div>
                    </motion.div>
                  </Link>
                ))}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: 'easeOut',
                  }}
                  className="col-span-2"
                >
                  <CourseCalendarHeader />
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease: 'easeOut',
                  }}
                >
                  <WorkSafelyAtHeights />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                    ease: 'easeOut',
                  }}
                >
                  <TowerRescue />
                </motion.div>
              </dl>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}
