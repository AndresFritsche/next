import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Empresa() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About TechCorp
          </h1>
          <p className="mt-4 text-xl text-gray-500">Empowering businesses through innovative technology solutions</p>
        </div>

        {/* Company Overview */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
          <p className="mt-4 text-lg text-gray-500">
            Founded in 2005, TechCorp has been at the forefront of technological innovation for over 18 years. We
            specialize in developing cutting-edge software solutions that help businesses streamline their operations
            and achieve their goals. Our team of expert developers and consultants work tirelessly to deliver
            high-quality, tailored solutions to clients across various industries.
          </p>
        </div>

        {/* Key Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
          <ul className="mt-4 space-y-4">
            <li className="text-lg text-gray-500">
              <strong className="text-gray-900">Innovation:</strong> We constantly push the boundaries of what's
              possible in technology.
            </li>
            <li className="text-lg text-gray-500">
              <strong className="text-gray-900">Collaboration:</strong> We believe in the power of teamwork, both within
              our company and with our clients.
            </li>
            <li className="text-lg text-gray-500">
              <strong className="text-gray-900">Excellence:</strong> We are committed to delivering the highest quality
              solutions and service.
            </li>
            <li className="text-lg text-gray-500">
              <strong className="text-gray-900">Integrity:</strong> We conduct our business with honesty, transparency,
              and ethical practices.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get in touch
              <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

