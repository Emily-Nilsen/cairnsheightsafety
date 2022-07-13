import Image from 'next/image'
import { ButtonLink } from './Button'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'
import abstractBackgroundImage from '../images/resources/abstract-background.png'
import discordImage from '../images/resources/discord.svg'
import figmaImage from '../images/resources/figma.svg'
import videoPlayerImage from '../images/resources/video-player.svg'

const resources = [
  {
    title: 'IMMOOS title one',
    description: 'IMMOOS description one.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657591553/Cairns%20Height%20Safety/IMMOOS/Tower_head_tn30fn.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )
    },
  },
  {
    title: 'IMMOOS title two',
    description: 'IMMOOS description two.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={abstractBackgroundImage}
            alt=""
            layout="fill"
            objectFit="cover"
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657591550/Cairns%20Height%20Safety/IMMOOS/IMG_1899_cvfenl.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )
    },
  },
  {
    title: 'IMMOOS title three',
    description: 'IMMOOS description three.',
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1657591535/Cairns%20Height%20Safety/IMMOOS/IMG_2341_ajjoek.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )
    },
  },
]

export function Cableway() {
  return (
    <section
      id="cableway"
      aria-labelledby="cableway-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="cableway-title">
          IMMOOS Cableway
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Cairns Height Safety is the Australian supplier of IMMOOS cable
          carriages.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          As a complete rescue equipment supplier, IMMOOS delivers various cable
          rescue carriages.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Current regulations require every cable railway company to consider a
          potential rescue.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Safety equipment engineers must also consider simplicity and, above
          all, the safety of the required tasks for rescue personnel. Only then
          can it be possible to perform a successful rescue in time.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          IMMOOS is a company that thinks about cableway rescues every day. As
          such, IMMOOS engineers pay special attention to ensuring that all
          equipment is simple to handle and easy to use. The 2-roller running
          gear results in smooth and stable running on the main cable. All
          devices are also certified and meet the requirements of the directive
          (EU) 2016/424 relating to “Cableway Installations”, as well as the EN
          standard 1909 “Recovery and Evacuation”.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          However, it takes more than just good rescue equipment for a
          trouble-free rescue, especially to rescue all people in a cableway
          system within a specified time. Good planning, organisation, optimal
          rescue equipment, and trained personnel strongly influence a rescue’s
          success.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20">
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
