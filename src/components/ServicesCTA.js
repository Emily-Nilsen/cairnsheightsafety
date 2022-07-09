import Image from 'next/image'

export function ServicesCTA() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-orange-700 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Need to do work at heights?</span>
                <span className="block">
                  Contact Cairns Height Safety today.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-orange-200">
                Get in touch with our team to find out what we can do for you.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 mt-8 text-base font-medium text-orange-600 bg-white border border-transparent rounded-md shadow hover:bg-orange-50"
              >
                Request a free quote
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <div className="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657132234/Cairns%20Height%20Safety/chs_img_17_kfbxrl.jpg"
                alt="App screenshot"
                width={3264}
                height={2448}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
