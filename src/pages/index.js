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
import { CallToAction } from '../components/CallToAction'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Cairns Height Safety - Expert Rope Access Services and IMMOOS Cable
          System Solutions
        </title>
        <meta
          name="description"
          content="Cairns Height Safety specializes in expert Rope Access Services and innovative IMMOOS cable system solutions to meet all your height safety needs."
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
          content="Cairns Height Safety - Expert Rope Access Services"
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
