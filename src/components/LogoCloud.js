import Image from 'next/image'
import { motion } from 'framer-motion'
// To use the interceptor
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const topRow = [
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657315548/Cairns%20Height%20Safety/JCU_slate_logo_u2v3tg.svg',
    alt: 'James Cook University',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657315537/Cairns%20Height%20Safety/Zoom_slate_logo_qokjpj.svg',
    alt: 'Zoom',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657315533/Cairns%20Height%20Safety/Skyrail_slate_logo_kojct2.svg',
    alt: 'Skyrail Rainforest Cableway',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659092005/Cairns%20Height%20Safety/Taronga_Zoo_1_w90zxl.svg',
    alt: 'Taronga Zoo Sky Safari',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659080752/Cairns%20Height%20Safety/Worley_xmgzxp.svg',
    alt: 'Worley Power Services',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659084498/Cairns%20Height%20Safety/Hilton_n258r5.svg',
    alt: 'Hilton Hotels & Resorts',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659129518/Cairns%20Height%20Safety/Holiday_Inn_1_yplpjv.svg',
    alt: 'Holiday Inn',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659096824/Cairns%20Height%20Safety/AMSA_hj8tnj.svg',
    alt: 'Australian Maritime Safety Authority',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659094766/Cairns%20Height%20Safety/Oasis_cz2hbx.svg',
    alt: 'Oasis at Palm Cove',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659096488/Cairns%20Height%20Safety/Capta_Group_j64ahf.svg',
    alt: 'Capta Group',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659174211/Cairns%20Height%20Safety/Paradise_On_The_Beach_i0gsqc.svg',
    alt: 'Paradise on the Beach',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657315548/Cairns%20Height%20Safety/JCU_slate_logo_u2v3tg.svg',
    alt: 'James Cook University',
  },
]

const bottomRow = [
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657531808/Cairns%20Height%20Safety/Courthouse_guj7fr.svg',
    alt: 'Cairns Courthouse',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657531208/Cairns%20Height%20Safety/mantra_gzdlrq.svg',
    alt: 'Mantra',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657531206/Cairns%20Height%20Safety/peppers_tlhvuv.svg',
    alt: 'Peppers',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659079818/Cairns%20Height%20Safety/Aquarius_ba3hle.svg',
    alt: 'Aquarius',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659128898/Cairns%20Height%20Safety/Ramsay_Health_v8sfyx.svg',
    alt: 'Ramsay Health Care',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659129216/Cairns%20Height%20Safety/Doubletree_by_Hilton_segaj8.svg',
    alt: 'Doubletree by Hilton',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659092796/Cairns%20Height%20Safety/Shantara_kuzgdw.svg',
    alt: 'Shantara Port Douglas',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659096003/Cairns%20Height%20Safety/Cairns_Regional_Council_qz6wow.svg',
    alt: 'Cairns Regional Council',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659177708/Cairns%20Height%20Safety/Cairns_Tower_mn3wj5.svg',
    alt: 'Cairns Corporate Tower',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659302698/Cairns%20Height%20Safety/Crystalbrook_Collection_egckyv.svg',
    alt: 'Crystalbrook Collection - Hotels and Resorts',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659303319/Cairns%20Height%20Safety/DPI_mstpof.svg',
    alt: 'Department of Agriculture & Fisheries',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1657531808/Cairns%20Height%20Safety/Courthouse_guj7fr.svg',
    alt: 'Cairns Courthouse',
  },
]

export function LogoCloud() {
  // Specify a number between 0 and 1
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const topReel = useAnimation()
  const bottomReel = useAnimation()

  // Top Reel
  useEffect(() => {
    if (inView) {
      topReel.start({
        x: '-300vw',
        transition: {
          delay: 0,
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
        },
      })
    }
    if (!inView) {
      topReel.start({ x: 0 })
    }
  }, [inView, topReel])

  // Bottom Reel
  useEffect(() => {
    if (inView) {
      bottomReel.start({
        x: '-300vw',
        transition: {
          delay: 0.5,
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        },
      })
    }
    if (!inView) {
      bottomReel.start({ x: 0 })
    }
  }, [inView, bottomReel])

  return (
    <div className="bg-white">
      <div
        ref={ref}
        className="px-0 py-12 mx-auto overflow-hidden max-w-7xl lg:py-16"
      >
        <p className="text-base font-semibold tracking-wider text-center uppercase text-slate-600">
          Trusted by local and national businesses
        </p>
        <div className="relative w-screen mx-auto overflow-hidden overflow-x-hidden bg-white rounded-none h-60 md:h-64">
          <motion.div
            animate={topReel}
            viewport={{ once: true }}
            className="absolute left-0 top-0 grid h-1/2 w-[600vw] grid-cols-12 gap-0.5 overflow-hidden overflow-y-hidden pt-6 md:w-[400vw]"
          >
            {topRow.map((logo, i) => (
              <div
                key={i}
                className="flex justify-center col-span-1 px-8 py-8 bg-slate-50"
              >
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="relative max-h-12"
                >
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    layout="intrinsic"
                    width={200}
                    height={48}
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
          <motion.div
            animate={bottomReel}
            viewport={{ once: true }}
            className="absolute left-10 bottom-0 grid h-1/2 w-[600vw] grid-cols-12 gap-0.5 overflow-hidden overflow-y-hidden pt-0.5 pb-6 md:w-[400vw]"
          >
            {bottomRow.map((logo, i) => (
              <div
                key={i}
                className="flex justify-center col-span-1 px-8 py-8 bg-slate-50"
              >
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="relative max-h-12"
                >
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    layout="intrinsic"
                    width={200}
                    height={48}
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
