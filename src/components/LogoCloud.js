import Image from 'next/image'

export function LogoCloud() {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <p className="text-base font-semibold tracking-wider text-center uppercase text-slate-600">
          Trusted by over 5 local Queensland businesses
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="flex justify-center col-span-1 px-8 py-8 bg-slate-50">
            <img
              className="max-h-12"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657315548/Cairns%20Height%20Safety/JCU_slate_logo_u2v3tg.svg"
              alt="James Cook University"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-slate-50">
            <img
              className="max-h-12"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657315537/Cairns%20Height%20Safety/Zoom_slate_logo_qokjpj.svg"
              alt="Zoom"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-slate-50">
            <img
              className="max-h-12"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657315533/Cairns%20Height%20Safety/Skyrail_slate_logo_kojct2.svg"
              alt="Skyrail Rainforest Cableway"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-slate-50">
            <img
              className="max-h-12"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657531808/Cairns%20Height%20Safety/Courthouse_guj7fr.svg"
              alt="Cairns Courthouse"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-slate-50">
            <img
              className="max-h-12"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657531208/Cairns%20Height%20Safety/mantra_gzdlrq.svg"
              alt="Mantra"
            />
          </div>
          <div className="flex justify-center col-span-1 px-8 py-8 bg-slate-50">
            <img
              className="max-h-12"
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657531206/Cairns%20Height%20Safety/peppers_tlhvuv.svg"
              alt="Peppers"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
