import Head from 'next/head'

import { About } from '../components/About'
import { LogoCloud } from '../components/LogoCloud'
import { Footer } from '../components/Footer'
import { FreeChapters } from '../components/FreeChapters'
import { Hero } from '../components/Hero'
import { Introduction } from '../components/Introduction'
import { NavBar } from '../components/NavBar'
import { Contact } from '../components/Contact'
import { Cableway } from '../components/Cableway'
import { Services } from '../components/Services'
import { Courses } from '../components/Courses'
import { CallToAction } from '../components/Testimonial'
import { Testimonials } from '../components/Testimonials'
import avatarImage1 from '../images/avatars/avatar-1.png'
import avatarImage2 from '../images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Everything Starts as a Square - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <LogoCloud />
      <Introduction />
      <NavBar />
      <Courses />
      <CallToAction
        id="courses-call-to-action"
        about={{
          name: 'Enrol today',
        }}
      >
        <p>
          Are you interested in taking a 3M nationally accredited training
          course with Cairns Height Safety?
        </p>
      </CallToAction>
      <Services />
      <CallToAction
        id="services-call-to-action"
        about={{
          name: 'Request a free quote',
        }}
      >
        <p>Need to do work at heights?</p>
        <p>Contact Cairns Height Safety today.</p>
      </CallToAction>
      <Cableway />
      <FreeChapters />
      <Contact />
      <Testimonials />
      <About />
      <Footer />
    </>
  )
}
