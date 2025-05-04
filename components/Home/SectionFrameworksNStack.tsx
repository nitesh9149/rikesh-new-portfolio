import Image from "next/image"
import { AWSIcon } from "../Icons/IconsBusiness"

export default function SectionFrameworksNStak() {
  return (
    <section
      id="stack"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl">
          My Design Toolkits 🧠💻
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          From wireframes to final polish—here’s what I use.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 pt-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="none"
              viewBox="0 0 55 55"
            >
              <path fill="#fff" fillOpacity="0.01" d="M55 0v55H0V0z"></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M27.5 27.5a7.639 7.639 0 1 1 15.277 0 7.639 7.639 0 0 1-15.278 0M12.222 42.778a7.64 7.64 0 0 1 7.638-7.639h7.64v7.64a7.639 7.639 0 1 1-15.278 0"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M27.5 4.584V19.86h7.638a7.639 7.639 0 1 0 0-15.277zM12.222 12.222a7.64 7.64 0 0 0 7.638 7.64h7.64V4.583h-7.64a7.64 7.64 0 0 0-7.638 7.638"
                clipRule="evenodd"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M12.222 27.5a7.64 7.64 0 0 0 7.638 7.64h7.64V19.86h-7.64a7.64 7.64 0 0 0-7.638 7.639"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Figma</h3>
              <p className="text-sm text-muted-foreground">
                Build wireframes, prototypes, and design systems.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="none"
              viewBox="0 0 55 55"
            >
              <path fill="#fff" fillOpacity="0.01" d="M55 0v55H0V0z"></path>
              <path
                fill="#fff"
                d="M43.407 12.66a37.3 37.3 0 0 0-9.455-2.972 28 28 0 0 0-1.211 2.515 34.7 34.7 0 0 0-10.479 0 27 27 0 0 0-1.225-2.515 37.2 37.2 0 0 0-9.462 2.978C5.59 21.71 3.969 30.527 4.78 39.219c3.969 2.964 7.815 4.764 11.596 5.942.94-1.292 1.77-2.66 2.484-4.09a24.4 24.4 0 0 1-3.911-1.903q.49-.365.959-.759c7.54 3.527 15.734 3.527 23.184 0q.47.392.959.759a24.4 24.4 0 0 1-3.918 1.907 28.7 28.7 0 0 0 2.483 4.09c3.785-1.178 7.635-2.979 11.603-5.946.952-10.076-1.625-18.813-6.812-26.559m-23.52 21.213c-2.264 0-4.12-2.114-4.12-4.687s1.817-4.69 4.12-4.69 4.16 2.113 4.12 4.69c.004 2.573-1.817 4.687-4.12 4.687m15.226 0c-2.264 0-4.12-2.114-4.12-4.687s1.816-4.69 4.12-4.69c2.303 0 4.16 2.113 4.12 4.69 0 2.573-1.817 4.687-4.12 4.687"
              ></path>
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Discord</h3>
              <p className="text-sm text-muted-foreground">
                Collaborating with teams through real-time chat.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              fill="none"
              viewBox="0 0 55 55"
            >
              <path fill="#fff" fillOpacity="0.01" d="M55 0v55H0V0z"></path>
              <path
                fill="#fff"
                d="M33.537 5.828 9.492 7.604c-1.94.168-2.615 1.435-2.615 2.955v26.36c0 1.183.42 2.195 1.434 3.548l5.652 7.35c.929 1.183 1.773 1.437 3.546 1.353l27.923-1.69c2.36-.169 3.037-1.268 3.037-3.127V14.698c0-.96-.38-1.237-1.496-2.056l-.193-.14-7.674-5.407c-1.857-1.35-2.616-1.52-5.57-1.267M18.14 14.213c-2.28.154-2.797.188-4.092-.865l-3.293-2.619c-.334-.338-.166-.762.677-.846l23.115-1.688c1.94-.17 2.952.507 3.71 1.098l3.965 2.872c.17.085.591.59.084.59l-23.87 1.438zM15.483 44.1V18.925c0-1.1.337-1.606 1.348-1.692l27.417-1.605c.93-.084 1.35.507 1.35 1.605V42.24c0 1.1-.17 2.03-1.687 2.113l-26.237 1.521c-1.518.084-2.191-.421-2.191-1.774m25.899-23.825c.168.76 0 1.52-.76 1.608l-1.265.25V40.72c-1.098.591-2.11.929-2.954.929-1.35 0-1.687-.423-2.698-1.69l-8.27-13.01v12.588l2.616.592s0 1.521-2.11 1.521l-5.819.338c-.17-.34 0-1.184.59-1.352l1.52-.421V23.572l-2.11-.171c-.17-.76.252-1.859 1.434-1.944l6.243-.42 8.604 13.178V22.556l-2.193-.252c-.17-.931.506-1.607 1.349-1.69z"
              ></path>
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Notion</h3>
              <p className="text-sm text-muted-foreground">
                Organizing projects, tasks, and design briefs.
              </p>
            </div>
          </div>
        </div>
        <div className="z-20overflow-hidden  relative z-20 rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="54"
              fill="none"
              viewBox="0 0 56 54"
            >
              <g fill="#fff" clipPath="url(#clip0_0_377)">
                <path
                  fillOpacity="0.05"
                  d="M9.751 0h35.563a9.74 9.74 0 0 1 9.751 9.751v34.186a9.74 9.74 0 0 1-9.751 9.752H9.751A9.74 9.74 0 0 1 0 43.936V9.751A9.74 9.74 0 0 1 9.751 0"
                ></path>
                <path d="M12.39 37.651v-23.61c0-.16.068-.252.229-.252.39 0 .757 0 1.285-.022.528-.023 1.124-.023 1.744-.046s1.284-.023 1.996-.046c.71-.023 1.4-.023 2.088-.023 1.881 0 3.441.23 4.726.711a8.2 8.2 0 0 1 3.075 1.881 7.3 7.3 0 0 1 1.674 2.616c.348.956.526 1.966.528 2.983q0 2.96-1.377 4.887a7.86 7.86 0 0 1-3.693 2.799c-1.56.574-3.281.78-5.163.78-.55 0-.918 0-1.147-.023-.23-.023-.55-.023-.987-.023v7.365a.285.285 0 0 1-.252.321h-4.451c-.184 0-.275-.091-.275-.298m5.001-19.433v7.709c.322.023.62.046.895.046h1.216a8.6 8.6 0 0 0 2.639-.413 3.95 3.95 0 0 0 1.881-1.216c.482-.574.711-1.354.711-2.364a3.8 3.8 0 0 0-.527-2.041A3.33 3.33 0 0 0 22.6 18.63a6.7 6.7 0 0 0-2.708-.46c-.596 0-1.124 0-1.56.024a5.3 5.3 0 0 0-.94.023M44.052 24.527a8.1 8.1 0 0 0-2.203-.78 12 12 0 0 0-2.57-.298 4.6 4.6 0 0 0-1.376.16c-.286.06-.54.223-.711.46-.116.185-.18.4-.184.619.011.218.091.427.23.596.217.255.482.466.78.62.528.275 1.078.527 1.629.757 1.24.417 2.425.98 3.533 1.675a5.34 5.34 0 0 1 1.813 1.904c.368.732.55 1.544.527 2.363a5.34 5.34 0 0 1-.894 3.052 5.75 5.75 0 0 1-2.57 2.042c-1.124.482-2.5.734-4.153.734a16 16 0 0 1-3.12-.298 9.3 9.3 0 0 1-2.34-.734.46.46 0 0 1-.253-.436V32.97a.25.25 0 0 1 .092-.206.175.175 0 0 1 .206.023c.884.52 1.844.9 2.846 1.124.883.23 1.793.346 2.707.344.872 0 1.491-.114 1.904-.32a1.07 1.07 0 0 0 .62-.965c0-.32-.184-.62-.551-.917-.367-.299-1.124-.643-2.248-1.079a14 14 0 0 1-3.258-1.652 5.94 5.94 0 0 1-1.744-1.95 4.9 4.9 0 0 1-.528-2.34c.003-.98.273-1.939.78-2.776a5.66 5.66 0 0 1 2.41-2.111c1.078-.55 2.431-.803 4.06-.803.952 0 1.903.07 2.845.206.678.092 1.34.27 1.973.528.101.036.184.11.23.206q.04.136.046.276v3.74a.28.28 0 0 1-.115.23.6.6 0 0 1-.413 0"></path>
              </g>
              <defs>
                <clipPath id="clip0_0_377">
                  <path fill="#fff" d="M0 0h55.065v53.688H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Photoshop</h3>
              <p className="text-sm text-muted-foreground">
                Editing images and creating visual assets.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-20  overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="51"
              fill="none"
              viewBox="0 0 53 51"
            >
              <g fill="#fff" clipPath="url(#clip0_0_376)">
                <path
                  fillOpacity="0.05"
                  d="M9.26 0h33.773a9.25 9.25 0 0 1 9.26 9.26v32.466a9.25 9.25 0 0 1-9.26 9.26H9.26A9.25 9.25 0 0 1 0 41.726V9.26A9.25 9.25 0 0 1 9.26 0"
                ></path>
                <path d="M25.34 30.592h-8.105l-1.656 5.12a.38.38 0 0 1-.414.305h-4.096c-.24 0-.305-.13-.24-.392l7.016-20.198c.065-.218.13-.458.218-.72q.132-.7.13-1.416a.22.22 0 0 1 .175-.24h5.643c.175 0 .262.066.284.175l7.953 22.443c.065.24 0 .348-.218.348h-4.554a.33.33 0 0 1-.349-.24zM18.5 26.169h5.534a31 31 0 0 0-.501-1.57c-.196-.566-.392-1.22-.588-1.873-.197-.654-.414-1.33-.632-2.005a47 47 0 0 1-.589-1.939c-.174-.632-.326-1.176-.479-1.7h-.043q-.295 1.427-.741 2.811c-.327 1.046-.654 2.136-1.003 3.225a43 43 0 0 1-.958 3.05M36.998 16.778a2.7 2.7 0 0 1-1.94-.763 2.83 2.83 0 0 1-.74-2.005 2.57 2.57 0 0 1 .784-1.939 2.8 2.8 0 0 1 1.94-.762c.849 0 1.503.261 1.982.762.483.529.74 1.224.72 1.94a2.76 2.76 0 0 1-.764 2.004 2.56 2.56 0 0 1-1.982.763m-2.44 18.913V18.913c0-.218.087-.305.283-.305h4.314c.196 0 .283.109.283.305v16.778c0 .24-.087.348-.283.348h-4.27a.305.305 0 0 1-.328-.348"></path>
              </g>
              <defs>
                <clipPath id="clip0_0_376">
                  <path fill="#fff" d="M0 0h52.294v50.986H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">Illustrator</h3>
              <p className="text-sm text-muted-foreground">
                Designing scalable illustrations for interfaces.
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-20  overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="47"
              fill="none"
              viewBox="0 0 46 47"
            >
              <path
                fill="#fff"
                fillOpacity="0.05"
                d="M34.361 0H11.639C5.211 0 0 5.223 0 11.666v22.776c0 6.443 5.211 11.666 11.639 11.666h22.722C40.789 46.108 46 40.885 46 34.442V11.666C46 5.223 40.789 0 34.361 0"
              ></path>
              <path
                fill="#fff"
                d="M34.96 10.327c-7.917 0-10.852 5.667-13.211 10.22l-1.541 2.912c-2.499 4.828-4.365 7.762-9.176 7.762a2.27 2.27 0 0 0-2.1 1.408 2.28 2.28 0 0 0 .493 2.483 2.28 2.28 0 0 0 1.607.668c7.922 0 10.856-5.667 13.215-10.22l1.538-2.912c2.502-4.828 4.369-7.762 9.176-7.762a2.27 2.27 0 0 0 1.61-.667 2.28 2.28 0 0 0-.001-3.225 2.28 2.28 0 0 0-1.61-.667"
              ></path>
            </svg>
            <div className="space-y-2">
              <h3 className="font-bold">LottieFiles</h3>
              <p className="text-sm text-muted-foreground">
                Integrating lightweight animations into designs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center text-center md:max-w-[58rem]">
        <Image
          width={920}
          height={128}
          className="z-10  md:max-w-lg "
          src={"/images/DockUsedApps.png"}
          alt="Dock Used Apps"
        />
      </div>
      <div className="relative mx-auto flex justify-center text-center md:max-w-[58rem]">
        <Image
          width={667}
          height={295}
          quality={100}
          className="absolute -top-10 -z-10 w-full sm:-top-24 md:-top-32"
          src={"/images/teclado-mac.jpg"}
          alt="Teclado MacBook"
        />
      </div>
    </section>
  )
}
