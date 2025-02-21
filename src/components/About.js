import Image from 'next/image'
import { motion } from 'framer-motion'
import { GridPattern } from './GridPattern'
import { SectionHeading } from './SectionHeading'
import calculateYearsOfExperience from '../../utils/calculateYears'

export function About() {
  const yearsOfExperience = calculateYearsOfExperience(1996)

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: 'fade',
            }}
            className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72"
          >
            <Image
              src="/images/David_profile_large_zyofff.webp"
              layout="fill"
              alt="Dave Whitfield"
              objectFit="cover"
              objectPosition="center"
              unoptimized
            />
          </motion.div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="4" id="about-title">
              About Us
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-orange-600">Dave Whitfield –</span>{' '}
              Owner of Cairns Height Safety.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              With over {yearsOfExperience} years of experience in the Height
              Safety and Rope Access industry, Dave Whitfield leads Cairns
              Height Safety in providing top-notch Rope Access Services and
              IMMOOS cable system solutions.
            </p>

            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Contact us to learn more about our expert services and how we can
              support your safety requirements.
            </p>
            <motion.p
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                type: 'fade',
              }}
              className="mt-8"
            >
              <a
                href="https://www.facebook.com/cairnsheightsafety"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-base font-medium tracking-tight text-orange-600"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-10 w-10 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-4">Follow us on Facebook</span>
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
