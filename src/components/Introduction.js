import { Container } from '../components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-title"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <h2 id="introduction-title" className="sr-only">
        Introduction
      </h2>
      <Container>
        <p className="text-4xl font-bold tracking-tight font-display text-slate-900">
          Cairns Height Safety (CHS) offers nationally accredited safety
          training courses and is a commercial and industrial safety equipment
          supplier.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Are you interested in getting a job working at heights? Cairns Height
          Safety has over 25 years of experience within the Rope Access and
          Training industry.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          CHS offers a wide range of tailored 3M Australia nationally accredited
          training courses to suit your requirements. We proudly support our
          students in the classroom and when applying their new skills in
          practice.
        </p>
        <ul className="mt-8 space-y-3 text-lg tracking-tight text-slate-700">
          {[
            'Tower Rescue',
            'Vertical Rescue',
            'Post Fall Recovery',
            'Height Safety Equipment Inspection',
            'Tower Crane Rescue & Evacuation',
            'Perform Inspection',
            'Bridge/Rooftop Rescue',
            'Jump Form Rescue',
          ].map((feature) => (
            <li key={feature} className="flex">
              <svg
                aria-hidden="true"
                className="flex-none w-8 h-8 fill-orange-500"
              >
                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
              </svg>
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Book your training course today to get yourself one step closer to
          your future career working at heights.
        </p>
        <p className="mt-10">
          <a
            href="#free-chapters"
            className="text-base font-medium tracking-tight text-orange-600 hover:text-orange-800"
          >
            Get in touch with our team to enrol today &rarr;
          </a>
        </p>
      </Container>
    </section>
  )
}
