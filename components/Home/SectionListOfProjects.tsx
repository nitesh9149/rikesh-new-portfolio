import Image from "next/image"
import Link from "next/link"

const getColorOfStatus = {
  building: "bg-amber-500 text-amber-800",
  live: "bg-green-500 text-green-800",
  dead: "bg-red-500 text-red-800",
  "open source": "bg-gray-500 text-gray-800",
  proposal: "bg-blue-500 text-blue-800",
  mvp: "border bg-white/10",
}

export default function SectionListOfProjects() {
  return (
    <section
      id="products"
      className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-8 sm:grid-cols-2 lg:grid-cols-2 lg:px-0"
    >
      <div className="col-span-full mx-auto mb-8 mt-32 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <p className="font-heading text-3xl leading-[1.1]">
          Projects & Products 🎨🔥
        </p>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Short, sweet, and stunning! 🚀
        </p>
      </div>
      <Link
        href="#"
        className={
          "group col-span-full cursor-pointer rounded-3xl border-2 border-dashed border-gray-400/20 transition-all"
        }
      >
        <article
          className={
            " relative col-span-1 flex scale-95 cursor-pointer flex-col items-center gap-2 space-y-2 transition-all "
          }
        >
          <div className="overflow-hidden rounded-3xl border bg-muted">
            <Image
              src="/images/karobar.png"
              alt="Karobar Web"
              width={1013}
              height={570}
            />
          </div>
          <div className="inset-x-0 bottom-0 w-full bg-gradient-to-t to-transparent ">
            <h2 className="text-lg font-extrabold text-white md:text-xl">
              <span className="font-light">
                From Paper Trails to Digital Sales: How I Transformed{" "}
              </span>
              Karobar&apos;s Web Presence with a Touch of Magic!
            </h2>
            <div className="mt-4 flex gap-8">
              <span className="text-sm text-white/50">. MOBILE</span>
              <span className="text-sm text-white/50"> . WEB</span>
              <span className="text-sm text-white/50"> . 200K Downloads</span>
            </div>
          </div>
        </article>
      </Link>

      <Link
        href="#"
        className={
          "group col-span-1 cursor-pointer rounded-3xl border-2 border-dashed border-gray-400/20"
        }
      >
        <article
          className={
            " relative col-span-1 flex scale-95 cursor-pointer flex-col items-center gap-2 space-y-2 "
          }
        >
          <div className="max-w-lg overflow-hidden rounded-3xl border bg-muted">
            <Image
              src="/images/trackon.png"
              alt="Karobar Web"
              width={490}
              height={360}
            />
          </div>
          <div className="inset-x-0 bottom-0 w-full bg-gradient-to-t to-transparent ">
            <h2 className="text-lg font-extrabold text-white md:text-xl">
              <span className="font-light">
                Navigating the design world with the precision of a
              </span>{" "}
              Trackon GPS—never losing my creative direction!
            </h2>
            <div className="mt-4 flex gap-8">
              <span className="text-sm text-white/50"> . WEB</span>
              <span className="text-sm text-white/50">
                {" "}
                . 5000+ Devices Online
              </span>
            </div>
          </div>
        </article>
      </Link>

      <Link
        href="#"
        className={
          "group col-span-1 cursor-pointer rounded-3xl border-2 border-dashed border-gray-400/20"
        }
      >
        <article
          className={
            " relative col-span-1 flex scale-95 cursor-pointer flex-col items-center gap-2 space-y-2 "
          }
        >
          <div className="max-w-lg overflow-hidden rounded-3xl border bg-muted">
            <Image
              src="/images/nyef.png"
              alt="Karobar Web"
              width={490}
              height={360}
            />
          </div>
          <div className="inset-x-0 bottom-0 w-full bg-gradient-to-t to-transparent ">
            <h2 className="text-lg font-extrabold text-white md:text-xl">
              <span className="font-light">
                NYEF Kathmandu: Where Young Entrepreneurs
              </span>{" "}
              Level Up and Maybe Have Fun While Doing It!
            </h2>
            <div className="mt-4 flex gap-8">
              <span className="text-sm text-white/50"> . WEB</span>
              <span className="text-sm text-white/50"> . 130+ Members</span>
            </div>
          </div>
        </article>
      </Link>

      <Link
        href="#"
        className={
          "group col-span-full cursor-pointer rounded-3xl border-2 border-dashed border-gray-400/20 transition-all"
        }
      >
        <article
          className={
            " relative col-span-1 flex scale-95 cursor-pointer flex-col items-center gap-2 space-y-2 transition-all "
          }
        >
          <div className="overflow-hidden rounded-3xl border bg-muted">
            <Image
              src="/images/yakety-big.png"
              alt="Karobar Web"
              width={1013}
              height={570}
            />
          </div>
          <div className="inset-x-0 bottom-0 w-full bg-gradient-to-t to-transparent ">
            <h2 className="text-lg font-extrabold text-white md:text-xl">
              <span className="font-light">
                Designing Experiences as Cozy as a
              </span>{" "}
              Yakety Yak Bunk (Minus the Snoring)
            </h2>
            <div className="mt-4 flex gap-8">
              <span className="text-sm text-white/50">. WEB</span>
              <span className="text-sm text-white/50">
                . Best Hostel 2022, 2023
              </span>
            </div>
          </div>
        </article>
      </Link>
    </section>
  )
}
