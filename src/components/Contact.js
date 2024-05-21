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
      className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:px-2 lg:pb-16 lg:pt-32"
    >
      <Container>
        <SectionHeading number="3" id="contact-title">
          Contact Us
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Get in touch
        </p>
        <p className="mt-4 max-w-xl pb-16 text-lg tracking-tight text-slate-600 lg:pb-24">
          If you’d like a no-obligation free quote for one of our rope access
          services, don’t hesitate to get in touch. Please send us a message
          using the form below, or call or email us.
        </p>
      </Container>
      <ContactForm />
    </section>
  )
}
