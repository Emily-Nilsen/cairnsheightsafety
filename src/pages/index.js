import Head from 'next/head'

import { Author } from '../components/Author'
import { LogoCloud } from '../components/LogoCloud'
import { Footer } from '../components/Footer'
import { FreeChapters } from '../components/FreeChapters'
import { Hero } from '../components/Hero'
import { Introduction } from '../components/Introduction'
import { NavBar } from '../components/NavBar'
import { Pricing } from '../components/Pricing'
import { Resources } from '../components/Resources'
import { Services } from '../components/Services'
import { TableOfContents } from '../components/TableOfContents'
import { Testimonial } from '../components/Testimonial'
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
      <TableOfContents />
      <Testimonial
        id="tommy-stroman-testimonial-1"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Testimonial>
      <Services />
      <Testimonial
        id="gerardo-stark-testimonial-2"
        author={{
          name: 'Request a free quote',
          role: 'Creator of Pandemicons',
          image: avatarImage2,
        }}
      >
        <p>Need to do work at heights?</p>
        <p>Contact Cairns Height Safety today.</p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
