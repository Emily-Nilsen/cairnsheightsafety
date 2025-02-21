import Image from 'next/image'
import { ButtonLink } from '../components/Button'
import { GridPattern } from '../components/GridPattern'
import { motion } from 'framer-motion'
import { ImmoosLogo } from './ImmoosLogo'
import calculateYearsOfExperience from '../../utils/calculateYears'

export function Hero() {
  const yearsOfExperience = calculateYearsOfExperience(1996)

  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      {/* Text svg */}
      <div className="absolute -left-6 -top-12 z-30 w-64 overflow-hidden p-14 md:-left-0 md:w-80 lg:left-0 lg:p-8">
        <Image
          src="/svgs/chs-text_tu1pwu.svg"
          alt="Cairns Height Safety logo"
          layout="intrinsic"
          width={207}
          height={313}
          priority
          className="overflow-hidden"
        />
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 -mr-28 rounded-br-6xl bg-slate-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-72">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>

          {/* Logo svg */}
          <motion.div
            initial={{
              opacity: 0,
              y: -200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 5,
              delay: 0.7,
              type: 'spring',
              stiffness: 120,
              ease: 'easeOut',
            }}
            className="shadow-none relative -top-40 left-10 z-20 mx-auto flex w-64 overflow-hidden rounded-none md:-left-0 md:w-80 lg:absolute lg:-left-28 lg:w-auto"
          >
            <Image
              src="/svgs/chs-logo-long_e4sorl.svg"
              alt="Cairns Height Safety logo"
              layout="intrinsic"
              width={414}
              height={625}
              priority
              className="overflow-hidden"
            />
          </motion.div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <figure className="relative mx-auto max-w-md text-left lg:mx-0 lg:text-left">
            <div className="flex justify-center text-orange-600 lg:justify-start"></div>
            <blockquote className="mt-2">
              <p className="font-display text-xl font-medium text-slate-900">
                At Cairns Height Safety, we specialize in providing top-tier
                Rope Access Services and IMMOOS cable system solutions to meet
                all your height safety needs.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-sm text-slate-500">
              <div className="relative flex h-10 w-40 items-center justify-start">
                <ImmoosLogo className="h-auto w-20" />
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              We provide Industrial Rope Access services.
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Cairns Height Safety has over {yearsOfExperience} years of
              experience within the Rope Access industry.
            </p>
            <div className="mt-8 flex space-x-4">
              <ButtonLink href="#services" color="orange">
                Rope Access Services
              </ButtonLink>
              <ButtonLink href="#contact" variant="outline" color="orange">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
