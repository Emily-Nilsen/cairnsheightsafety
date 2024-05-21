import { Container } from '../components/Container'
import Link from 'next/link'
import calculateYearsOfExperience from '../../utils/calculateYears'
import { motion } from 'framer-motion'

export function Introduction() {
  const yearsOfExperience = calculateYearsOfExperience(1996)

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
          Cairns Height Safety (CHS) is a leading provider of Rope Access
          Services and IMMOOS cable system solutions.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          With over {yearsOfExperience} years of experience in the industry, CHS
          is dedicated to ensuring the highest standards of safety and
          efficiency for your projects.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Explore our comprehensive range of Rope Access Services and innovative
          IMMOOS cable systems, designed to meet all your height safety needs.
        </p>

        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Contact us today to learn how we can support your safety requirements
          with our expert solutions.
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
          <Link href="#contact">
            <a className="text-base font-medium tracking-tight text-orange-600 hover:text-orange-800">
              Get in touch with our team today &rarr;
            </a>
          </Link>
        </motion.p>
      </Container>
    </section>
  )
}
