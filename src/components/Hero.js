import Image from 'next/image'
import Link from 'next/link'
import { ButtonLink } from '../components/Button'
import { GridPattern } from '../components/GridPattern'
import { StarRating } from '../components/StarRating'
import coverImage from '../images/cover.png'

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-slate-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="shadow-none relative -top-32 -left-20 z-20 mx-auto flex w-64 overflow-hidden rounded-none md:w-80 lg:absolute lg:w-auto">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657674143/Cairns%20Height%20Safety/CHS_logo_v4_xsnp5d.svg"
              alt="Cairns Height Safety logo"
              layout="intrinsic"
              width={414}
              height={625}
              priority
              className="overflow-hidden"
            />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100" />
          <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <div className="flex justify-center text-orange-600 lg:justify-start">
              {/* <StarRating /> */}
            </div>
            <blockquote className="mt-2">
              <p className="font-display text-xl font-medium text-slate-900">
                All participants receive a 3M Australia Statement of Attainment
                for any of our completed nationally recognised units of
                competency.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-sm text-slate-500">
              <div className="relative flex h-10 w-40 items-center justify-center">
                <Image
                  width={577}
                  height={297}
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657313729/Cairns%20Height%20Safety/3M_long_logo_o23jpc.svg"
                  alt="3M Australia"
                  objectFit="contain"
                  layout="intrinsic"
                  objectPosition="center"
                  unoptimized={true}
                />
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              We provide nationally accredited Height Safety and Rescue
              training.
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Cairns Height Safety also offers Industrial Rope Access services.
            </p>
            <div className="mt-8 flex space-x-4">
              <ButtonLink href="#courses" color="orange">
                Training Courses
              </ButtonLink>
              <ButtonLink href="#services" variant="outline" color="orange">
                Rope Access Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
