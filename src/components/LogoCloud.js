import Image from 'next/image'
import { motion } from 'framer-motion'
// To use the interceptor
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const topRow = [
  {
    image: '/svgs/JCU_slate_logo_u2v3tg.svg',
    alt: 'James Cook University',
  },
  {
    image: '/svgs/Zoom_slate_logo_qokjpj.svg',
    alt: 'Zoom',
  },
  {
    image: '/svgs/Skyrail_slate_logo_kojct2.svg',
    alt: 'Skyrail Rainforest Cableway',
  },
  {
    image: '/svgs/Taronga_Zoo_1_w90zxl.svg',
    alt: 'Taronga Zoo Sky Safari',
  },
  {
    image: '/svgs/Worley_xmgzxp.svg',
    alt: 'Worley Power Services',
  },
  {
    image: '/svgs/Hilton_n258r5.svg',
    alt: 'Hilton Hotels & Resorts',
  },
  {
    image: '/svgs/Holiday_Inn_1_yplpjv.svg',
    alt: 'Holiday Inn',
  },
  {
    image: '/svgs/AMSA_hj8tnj.svg',
    alt: 'Australian Maritime Safety Authority',
  },
  {
    image: '/svgs/Oasis_cz2hbx.svg',
    alt: 'Oasis at Palm Cove',
  },
  {
    image: '/svgs/Capta_Group_j64ahf.svg',
    alt: 'Capta Group',
  },
  {
    image: '/svgs/Paradise_On_The_Beach_i0gsqc.svg',
    alt: 'Paradise on the Beach',
  },
  {
    image: '/svgs/JCU_slate_logo_u2v3tg.svg',
    alt: 'James Cook University',
  },
]

const bottomRow = [
  {
    image: '/svgs/Courthouse_guj7fr.svg',
    alt: 'Cairns Courthouse',
  },
  {
    image: '/svgs/mantra_gzdlrq.svg',
    alt: 'Mantra',
  },
  {
    image: '/svgs/peppers_tlhvuv.svg',
    alt: 'Peppers',
  },
  {
    image: '/svgs/Aquarius_ba3hle.svg',
    alt: 'Aquarius',
  },
  {
    image: '/svgs/Ramsay_Health_v8sfyx.svg',
    alt: 'Ramsay Health Care',
  },
  {
    image: '/svgs/Doubletree_by_Hilton_segaj8.svg',
    alt: 'Doubletree by Hilton',
  },
  {
    image: '/svgs/Shantara_kuzgdw.svg',
    alt: 'Shantara Port Douglas',
  },
  {
    image: '/svgs/Cairns_Regional_Council_qz6wow.svg',
    alt: 'Cairns Regional Council',
  },
  {
    image: '/svgs/Cairns_Tower_mn3wj5.svg',
    alt: 'Cairns Corporate Tower',
  },
  {
    image: '/svgs/Crystalbrook_Collection_egckyv.svg',
    alt: 'Crystalbrook Collection - Hotels and Resorts',
  },
  {
    image: '/svgs/DPI_mstpof.svg',
    alt: 'Department of Agriculture & Fisheries',
  },
  {
    image: '/svgs/Courthouse_guj7fr.svg',
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
        className="mx-auto max-w-7xl overflow-hidden px-0 py-12 lg:py-16"
      >
        <p className="text-center text-base font-semibold uppercase tracking-wider text-slate-600">
          Trusted by local and national businesses
        </p>
        <div className="relative mx-auto h-60 w-screen overflow-hidden overflow-x-hidden rounded-none bg-white md:h-64">
          <motion.div
            animate={topReel}
            viewport={{ once: true }}
            className="absolute left-0 top-0 grid h-1/2 w-[600vw] grid-cols-12 gap-0.5 overflow-hidden overflow-y-hidden pt-6 md:w-[400vw]"
          >
            {topRow.map((logo, i) => (
              <div
                key={i}
                className="col-span-1 flex justify-center bg-slate-50 px-8 py-8"
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
            className="absolute bottom-0 left-10 grid h-1/2 w-[600vw] grid-cols-12 gap-0.5 overflow-hidden overflow-y-hidden pb-6 pt-0.5 md:w-[400vw]"
          >
            {bottomRow.map((logo, i) => (
              <div
                key={i}
                className="col-span-1 flex justify-center bg-slate-50 px-8 py-8"
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
