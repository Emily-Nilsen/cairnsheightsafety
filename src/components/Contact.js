import { ButtonLink } from './Button'
import { Container } from './Container'
import { GridPattern } from './GridPattern'
import { SectionHeading } from './SectionHeading'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="pt-16 pb-8 scroll-mt-14 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:px-2 lg:pt-32 lg:pb-16"
    >
      <Container>
        <SectionHeading number="4" id="contact-title">
          Contact Us
        </SectionHeading>
        <p className="mt-8 text-5xl font-extrabold tracking-tight font-display text-slate-900 sm:text-6xl">
          Get in touch
        </p>
        <p className="max-w-xl pb-16 mt-4 text-lg tracking-tight text-slate-600 lg:pb-24">
          If you’re interested in enrolling in one of our courses or if you’d
          like a no-obligation free quote for one of our rope access services,
          don’t hesitate to get in touch. Please send us a message using the
          form below, or call or email us.
        </p>
      </Container>
      <ContactForm />
    </section>
  )
}
