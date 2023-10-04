import Head from 'next/head'

import { About } from '../components/About'
import { LogoCloud } from '../components/LogoCloud'
import { Footer } from '../components/Footer'
import { CablewayCTA } from '../components/CablewayCTA'
import { Hero } from '../components/Hero'
import { Introduction } from '../components/Introduction'
import { NavBar } from '../components/NavBar'
import { Contact } from '../components/Contact'
import { Cableway } from '../components/Cableway'
import { Services } from '../components/Services'
import { Courses } from '../components/Courses'
import { CallToAction } from '../components/CallToAction'

import { ContactForm } from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Cairns Height Safety - We provide nationally accredited Height Safety
          and Rescue training and Rope Access services
        </title>
        <meta
          name="description"
          content="Cairns Height Safety provide nationally accredited Height Safety
          and Rescue training and Rope Access services. "
        />
        <meta
          name="keywords"
          content="Cairns, FNQ, Queensland, Far North Queensland, Tablelands, Industrial Rope Access services, Industrial Rope Access, Rope Access services, rope services, Wind turbine maintenance, Mould remediation, High-pressure water blasting, Window cleaning, Exterior building maintenance, Installation of Height Safety Systems, Minor roof and gutter repairs, Qualified riggers, training centre, training courses, Gordonvale, Edmonton, Northern Beaches, Atherton, Ravenshoe, Kuranda, Smithfield, Palm Cove, Mossman, Cape Tribulation, Northern Cairns, Cairns City, Esplanade"
        ></meta>
        <link
          rel="canonical"
          href="https://cairnsheightsafety.com/"
          key="canonical"
        />
        {/* New OG meta tags */}
        <meta property="og:title" content="Cairns Height Safety" />
        <meta
          property="og:description"
          content="We provide nationally accredited Height Safety
          and Rescue training and Rope Access services"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Cairns%20Height%20Safety/Website_link_image_yomgye.webp" // Replace with the URL of your desired image
        />
      </Head>
      <Hero />
      <LogoCloud />
      <Introduction />
      <NavBar />
      <Courses />
      <CallToAction
        href="/#enrol"
        passHref
        id="courses-call-to-action"
        about={{
          name: 'Enrol today',
        }}
      >
        <p>
          Are you interested in taking an ASTRA Group Services nationally
          accredited training course with Cairns Height Safety?
        </p>
      </CallToAction>
      <Services />
      <CallToAction
        href="/#enrol"
        passHref
        id="services-call-to-action"
        about={{
          name: 'Request a free quote',
        }}
      >
        <p>Need some work at heights done?</p>
        <p>Contact Cairns Height Safety today.</p>
      </CallToAction>
      <Cableway />
      <CablewayCTA />
      <Contact />
      <About />
      <Footer />
    </>
  )
}
