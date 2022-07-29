import Image from 'next/image'

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
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659087810/Cairns%20Height%20Safety/Holiday_Inn_mg85el.svg',
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
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659083251/Cairns%20Height%20Safety/Ramsay_vlnqju.svg',
    alt: 'Ramsay Health Care',
  },
  {
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1659087245/Cairns%20Height%20Safety/Doubletree_cvainx.svg',
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
]

export function LogoCloud() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase tracking-wider text-slate-600">
          Trusted by local Queensland businesses
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {topRow.map((logo, i) => (
            <div
              key={i}
              className="col-span-1 flex justify-center bg-slate-50 px-8 py-8"
            >
              <div className="relative max-h-12">
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  layout="intrinsic"
                  width={200}
                  height={48}
                />
              </div>
            </div>
          ))}

          {bottomRow.map((logo, i) => (
            <div
              key={i}
              className="col-span-1 flex justify-center bg-slate-50 px-8 py-8"
            >
              <div className="relative max-h-12">
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  layout="intrinsic"
                  width={200}
                  height={48}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
