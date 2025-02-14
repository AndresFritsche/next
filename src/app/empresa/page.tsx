import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Enterprise office"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">About TechCorp</h1>
          <p className="mt-6 max-w-3xl text-xl">
            Empowering businesses through innovative technology solutions since 2005.
          </p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-500">
                At TechCorp, we're on a mission to revolutionize the way businesses operate through cutting-edge
                technology. We believe in creating solutions that not only solve today's challenges but anticipate
                tomorrow's needs.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Values</h2>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-500">
                    Innovation: Constantly pushing the boundaries of what's possible
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-500">
                    Collaboration: Fostering partnerships with our clients and within our team
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <BarChart className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-500">
                    Excellence: Delivering top-quality solutions and unparalleled service
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">TechCorp by the Numbers</h2>
          </div>
          <div className="mt-10">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-white p-6 text-center shadow">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Years in Business</dt>
                <dd className="order-1 text-5xl font-extrabold text-green-600">18+</dd>
              </div>
              <div className="flex flex-col rounded-lg bg-white p-6 text-center shadow">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Clients Served</dt>
                <dd className="order-1 text-5xl font-extrabold text-green-600">500+</dd>
              </div>
              <div className="flex flex-col rounded-lg bg-white p-6 text-center shadow">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Team Members</dt>
                <dd className="order-1 text-5xl font-extrabold text-green-600">100+</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Leadership</h2>
            <p className="mt-4 text-lg text-gray-500">
              Meet the visionaries guiding TechCorp towards a brighter future.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg?height=400&width=400" },
              { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=400&width=400" },
              { name: "Emily Johnson", role: "COO", image: "/placeholder.svg?height=400&width=400" },
            ].map((leader) => (
              <div key={leader.name} className="text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{leader.name}</h3>
                  <p className="text-sm text-gray-500">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your business?</span>
            <span className="block text-green-300">Let's innovate together.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-green-600 hover:bg-green-50"
              >
                Get in touch
                <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

