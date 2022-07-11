import { ButtonLink } from './Button'
import { Container } from './Container'
import { GridPattern } from './GridPattern'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="pt-16 pb-8 scroll-mt-14 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
    >
      <Container>
        <SectionHeading number="4" id="contact-title">
          Contact Us
        </SectionHeading>
        <p className="mt-8 text-5xl font-extrabold tracking-tight font-display text-slate-900 sm:text-6xl">
          Get in touch
        </p>
        <p className="max-w-xl mt-4 text-lg tracking-tight text-slate-600">
          “Everything Starts as a Square” is available in two different packages
          so you can pick the one that’s right for you.
        </p>
      </Container>
      <div className="max-w-5xl mx-auto mt-16 lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <div className="flex flex-col px-4 py-16 sm:px-10 md:py-12 lg:px-12">
            <h3 className="text-lg font-semibold tracking-tight mt-7 text-slate-900">
              Essential
            </h3>
            <p className="mt-2 text-lg tracking-tight text-slate-600">
              The perfect starting point if you’re on a budget.
            </p>
            <p className="flex font-bold -order-1 font-display">
              <span className="text-[1.75rem] leading-tight text-slate-500">
                $
              </span>
              <span className="mt-1 ml-1 tracking-tight text-7xl text-slate-900">
                15
              </span>
            </p>
            <div className="order-1 mt-8">
              <ul className="-my-2 text-base tracking-tight divide-y divide-slate-200 text-slate-900">
                {[
                  'The 240-page ebook',
                  'Figma icon templates',
                  'Community access',
                ].map((feature) => (
                  <li key={feature} className="flex py-2">
                    <svg
                      aria-hidden="true"
                      className="flex-none w-8 h-8 fill-slate-600"
                    >
                      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                    </svg>
                    <span className="ml-4">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ButtonLink
              href="#"
              color="slate"
              className="mt-8"
              aria-label="Get started with the Icon Beginner plan for $15"
            >
              Get started
            </ButtonLink>
          </div>
          <div className="relative px-4 py-16 bg-orange-600 sm:rounded-5xl sm:py-12 sm:px-10 sm:shadow-lg lg:px-12">
            <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
              <GridPattern x="50%" y="50%" />
            </div>
            <div className="relative flex flex-col">
              <h3 className="text-lg font-semibold tracking-tight text-white mt-7">
                Complete
              </h3>
              <p className="mt-2 text-lg tracking-tight text-white">
                Everything icon resource you could ever ask for.
              </p>
              <p className="flex font-bold -order-1 font-display">
                <span className="text-[1.75rem] leading-tight text-orange-200">
                  $
                </span>
                <span className="mt-1 ml-1 tracking-tight text-white text-7xl">
                  229
                </span>
              </p>
              <div className="order-1 mt-8">
                <ul className="-my-2 text-base tracking-tight text-white divide-y divide-white/10">
                  {[
                    'The 240-page ebook',
                    'Figma icon templates',
                    'Over an hour of screencasts',
                    'Weekly icon teardowns',
                    'Community access',
                  ].map((feature) => (
                    <li key={feature} className="flex py-2">
                      <svg aria-hidden="true" className="w-8 h-8 fill-white">
                        <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                      </svg>
                      <span className="ml-4">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ButtonLink
                href="#"
                color="white"
                className="mt-8"
                aria-label="Get started with the Icon Pro plan for $229"
              >
                Get started
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}