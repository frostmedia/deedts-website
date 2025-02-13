import Scene from "./../scene"
import Image from "next/image"
import EmblaCarousel from "@/components/slider/EmblaCarousel"

const OPTIONS = { loop: true }
const SLIDES = ['/assets/IMG_0775.JPG', '/assets/IMG_0715.JPG', '/assets/IMG_0466.JPG']

export default function Home() {
  return (
    <main>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {/* <Scene /> */}
      <div className="absolute top-0 left-0 right-0 w-100 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between p-4 sm:px-10">
          <div>
            <Image
              src="/logo.svg"
              alt="Deedts Construct"
              width={180}
              height={40}
            />
          </div>

          <div className="max-w-xl text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 mt-20 px-8 sm:px-0 sm:mt-0">
              <div className="border-t pt-2">
                <h2 className="text-sm text-[#ffffff]/[.50] mb-2">Address</h2>
                <address className="not-italic flex items-start">
                  <span>
                    26b Alhaji Oseni Street, Off Town Planning Way, Ilupeju, Lagos.
                  </span>
                </address>
              </div>
              <div className="border-t pt-2">
                <h2 className="text-sm text-[#ffffff]/[.50] mb-2">Contact</h2>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <a href='mailto:info@deedtsconstruct.com'>info@deedtsconstruct.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 sm:bottom-[25%] pb-20 sm:pb-0 sm:items-center pl-10 sm:pl-28">
        <div className="text-white">
          <h1 className="font-bold text-white" style={{"fontSize": "48px", "lineHeight": "48px"}}>
            <span style={{ "opacity": "0.5" }}>Website</span> <br />
            <span style={{ "opacity": "0.75" }}>Under</span> <br />
            <span style={{ "opacity": "1" }}>Construction</span>
          </h1>
        </div>
      </div>
    </main>
  )
}
