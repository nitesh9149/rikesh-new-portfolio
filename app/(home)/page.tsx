import Image from "next/image"
import { LaptopIcon, LinkIcon, MapPinIcon } from "lucide-react"

import SectionFrameworksNStak from "@/components/Home/SectionFrameworksNStack"
import SectionListOfProjects from "@/components/Home/SectionListOfProjects"

import SectionBento from "@/components/Home/SectionBento"
import SectionInspiration from "@/components/Home/SectionInspiration"

import { Signature } from "@/components/signature"
import { ScrollToTopButton } from "@/components/SrollTopButton"

import Header from "@/components/Home/Header"
import Link from "next/link"

export default async function IndexPage() {
  return (
    <div>
      <ScrollToTopButton />

      <Header />

      <SectionBento />

      <SectionListOfProjects />

      <section className="mx-auto grid max-w-5xl  grid-cols-2 gap-6 px-4 pt-32 sm:grid-cols-4">
        <div className="flex h-[147px] flex-col justify-center gap-4 rounded-[15px] bg-[#232230] p-6">
          <h2 className="text-3xl font-bold text-white">5+</h2>
          <p className="text-[#B6B5BA]">Years Experienced</p>
        </div>
        <div className="flex h-[147px] flex-col justify-center gap-4 rounded-[15px] bg-[#232230] p-6">
          <h2 className="text-3xl font-bold text-white">20+</h2>
          <p className="text-[#B6B5BA]">Projects Completed</p>
        </div>
        <div className="flex h-[147px] flex-col justify-center gap-4 rounded-[15px] bg-[#232230] p-6">
          <h2 className="text-3xl font-bold text-white">15+</h2>
          <p className="text-[#B6B5BA]">Satisfied Clients</p>
        </div>
        <div className="flex h-[147px] flex-col justify-center gap-4 rounded-[15px] bg-[#232230] p-6">
          <h2 className="text-3xl font-bold text-white">10+</h2>
          <p className="text-[#B6B5BA]">Community Networks</p>
        </div>
      </section>

      <section
        id="info"
        className="relative z-40 flex flex-col items-center justify-center space-y-6 px-4 pb-8 pt-6 text-center md:pt-10 lg:pt-32"
      >
        <div className="relative mb-10 flex w-full max-w-3xl items-center gap-4 overflow-hidden rounded-xl bg-white/5 px-8 py-6">
          <div className="relative shrink-0">
            <Image
              src={"/images/rikesh.png"}
              alt="Rikesh Niroula"
              className="h-12 w-12 rounded-full bg-white md:h-[80px] md:w-[80px]"
              width={96}
              height={96}
            />
            <Image
              src={"/images/small-logo.png"}
              alt="Rikesh Niroula"
              className="absolute bottom-0 right-0 h-[30px] w-[30px]"
              width={20}
              height={20}
            />
          </div>

          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center gap-2">
              <p className="font-bold md:text-xl">Rikesh Niroula</p>
              <div className="flex w-fit gap-1 rounded-full bg-white p-1">
                <FlagNp />
                {/* <FlagUS /> */}
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <LaptopIcon size={16} />
                UI/UX Designer
              </div>
              <div className="flex items-center gap-1">
                <MapPinIcon size={16} />
                Everywhere
              </div>
              <div className="flex items-center gap-1 text-green-500">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/30">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                Avaliable
              </div>
            </div>
          </div>
          <Image
            src={"/images/travel.png"}
            alt="Rikesh Niroula"
            className="insert-y-0 absolute right-0"
            width={240}
            height={96}
          />
        </div>

        <h3 className="font-heading text-4xl">
          {"“ Designing for People, Not Just Screens ”"}
          {/* SOFTWARE ENGINEER */}
        </h3>
        <h4>Get to Know the Designer</h4>
        <h4 className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          UI/UX Designer with years of freelance experience. I began exploring
          visual design in my teens, turning curiosity into a passion for
          creating meaningful digital experiences. Now, I focus on web and
          mobile design—crafting user flows, prototypes, and scalable design
          systems.
          <br /> <br />
          Passionate about traveling and naturally curious. Currently, I am
          focused on becoming a great leader and continuing to share.
        </h4>
        <div id="signature" className="pt-8">
          <Signature />
        </div>

        <div className="mb-12 flex w-full items-center justify-center pt-12 ">
          <div className=" w-full border-b-2 border-dashed"></div>
        </div>
      </section>

      <section
        id="tools"
        className="flex min-h-[100vh] items-center p-8 md:p-32 "
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          {favTools?.map((item, index) => {
            return (
              <div
                key={"ite-" + index}
                className={
                  "flex w-fit items-center justify-between gap-4 rounded-lg  bg-slate-800 p-4 " +
                  (!item.title ? "opacity-30" : "")
                }
              >
                <div className="flex items-center gap-4">
                  <div
                    className={
                      "flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-slate-900 "
                    }
                  >
                    <img src={item.icon} />
                  </div>
                  <div className="grid max-w-[132px] flex-1">
                    <p className="font-bold">{item.title}</p>
                    <label
                      title={item.description}
                      className="truncate text-white/50"
                    >
                      {item.description}
                    </label>
                  </div>
                </div>
                <div>
                  {item.url && (
                    <Link href={item.url} target="_blank">
                      <LinkIcon className="text-white/70" />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <SectionFrameworksNStak />

      <SectionInspiration />
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-x-4 gap-y-8 px-4 py-32 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 text-4xl font-light">
            Let’s create something{" "}
            <span className="font-bold">Extraordinary Together</span> with
            seamless <span className="font-bold">Designs</span>.
          </h2>
          <button className="rounded-[50px] bg-[#7A87FB] px-8 py-4 text-xs font-semibold">
            GET IN TOUCH
          </button>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase text-[#ADABC7]">
                Whatsapp/viber
              </h3>
              <a href="#">+977 9811021344</a>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase text-[#ADABC7]">
                EMAIL
              </h3>
              <a href="#">rikeshn77@gmail.com</a>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase text-[#ADABC7]">
              sweet links
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <a href="#">HOME</a>
              </li>
              <li className="text-sm">
                <a href="#">ABOUT</a>
              </li>
              <li className="text-sm">
                <a href="#">WORKS</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-5xl">
        <hr className="bg-[#313953]" />
      </div>

      <div className="mx-auto max-w-5xl py-12 text-center">
        <p>Copyright © Rikesh Niroula. All Rights Reserved</p>
      </div>
    </div>
  )
}
const FlagNp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 14 14"
    >
      <circle cx="7" cy="7" r="7" fill="#fff"></circle>
      <path fill="url(#pattern0_0_511)" d="M3.6 2.4h8v8h-8z"></path>
      <defs>
        <pattern
          id="pattern0_0_511"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#image0_0_511" transform="scale(.00195)"></use>
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="image0_0_511"
          width="512"
          height="512"
          preserveAspectRatio="none"
        ></image>
      </defs>
    </svg>
  )
}
const favTools = [
  {
    icon: "/images/logos/railway.png",
    title: "Railway",
    description: "Simplifies your Infrastructure",
    url: "https://railway.com/",
  },
  {
    icon: "/images/logos/directus.png",
    title: "Directus",
    description: "Headless CMS",
    url: "",
  },
  {
    icon: "/images/logos/figma.png",
    title: "Figma",
    description: "Design",
    url: "https://www.figma.com/",
  },
  {
    icon: "/images/logos/brandfetch.png",
    title: "Brandfetch",
    description: "Brand Logos",
    url: "https://brandfetch.com/",
  },
  {
    icon: "/images/logos/svgl.png",
    title: "svgl",
    description: "Good SVG Icons",
    url: "https://svgl.app/",
  },
  {
    icon: "/images/logos/gsap.png",
    title: "gsap",
    description: "Animation",
    url: "https://gsap.com/",
  },
  {
    icon: "/images/logos/aws.png",
    title: "AWS",
    description: "EC2, Lamdas, ECS, S3",
    url: "",
  },
  {
    icon: "/images/logos/strapi.png",
    title: "Strapi",
    description: "Headless CMS",
    url: "",
  },
  {
    icon: "/images/logos/spline.png",
    title: "Spline",
    description: "3D Design",
    url: "https://spline.design/",
  },
  {
    icon: "/images/logos/medusa.png",
    title: "Medusa",
    description: "Open Source E-Commerce",
    url: "https://medusajs.com/",
  },
  {
    icon: "/images/logos/framer-motion.png",
    title: "Framer Motion",
    description: "Animations",
    url: "",
  },
  {
    icon: "/images/logos/resend.png",
    title: "Resend",
    description: "Send Emails",
    url: "",
  },
  {
    icon: "/images/logos/open-ai.png",
    title: "Open AI",
    description: "AI",
    url: "https://openai.com/",
  },
  {
    icon: "/images/logos/n8n.png",
    title: "N8N",
    description: "Automatization",
    url: "https://n8n.io/",
  },
  {
    icon: "/images/logos/pinterest.png",
    title: "Pinterest",
    description: "Inspiration",
    url: "https://www.pinterest.com/",
  },
  {
    icon: "/images/logos/refero.png",
    title: "Refero",
    description: "Designs from the best products",
    url: "https://refero.design/",
  },
  {
    icon: "/images/logos/make-pill.png",
    title: "Makepill",
    description: "Inspiration",
    url: "https://makepill.com/",
  },
  {
    icon: "/images/logos/stripe.png",
    title: "Stripe",
    description: "Payments",
    url: "https://stripe.com/",
  },
]
