import Scene from "./../scene"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Scene />
      <div className="absolute inset-0 flex flex-col">
        <div className="flex justify-between p-4">
          <div>
            <Image
              src="/logo.svg"
              alt="v0 Logo"
              width={220}
              height={50}
            />
          </div>

          <div className="max-w-sm text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <div className="border-t pt-2">
                <h2 className="text-sm text-[#ffffff]/[.40] mb-2">Address</h2>
                <address className="not-italic flex items-start">
                  <span>
                    123 Web Street
                    <br />
                    Digital City, IN 46001
                    <br />
                    United States
                  </span>
                </address>
              </div>
              <div className="border-t pt-2">
                <h2 className="text-sm text-[#ffffff]/[.40] mb-2">Contact</h2>
                <div className="space-y-2">
                  <p className="flex items-center">
                    (555) 123-4567
                  </p>
                  <p className="flex items-center">
                    info@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex grow items-end p-4">
          <div className="text-white">
            <h1 className="font-bold text-white" style={{"fontSize": "48px", "lineHeight": "48px"}}>
              <span style={{ "opacity": "0.5" }}>Website</span> <br />
              <span style={{ "opacity": "0.75" }}>Under</span> <br />
              <span style={{ "opacity": "1" }}>Construction</span>
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}
