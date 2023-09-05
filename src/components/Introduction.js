import { Container } from '../components/Container'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-title"
      className="pb-16 pt-10 sm:pb-20 md:pt-16 lg:py-20"
    >
      <h2 id="introduction-title" className="sr-only">
        Introduction
      </h2>
      <Container>
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Cairns Height Safety (CHS) is a commercial and industrial safety
          equipment supplier and offers nationally accredited safety training
          courses.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Are you interested in getting a job working at heights? Cairns Height
          Safety has over 25 years of experience within the Rope Access and
          Training industry.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          CHS offers a wide range of tailored ASTRA Group Services nationally
          accredited training courses to suit your requirements. We proudly
          support our students in the classroom and when applying their new
          skills in practice.
        </p>

        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Book your training course today to get yourself one step closer to
          your future career working at heights.
        </p>
        <motion.p
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
            ease: 'easeOut',
          }}
          className="mt-10"
        >
          <Link href="#contact" passHref>
            <a className="text-base font-medium tracking-tight text-orange-600 hover:text-orange-800">
              Get in touch with our team to enrol today &rarr;
            </a>
          </Link>
        </motion.p>
      </Container>
    </section>
  )
}
