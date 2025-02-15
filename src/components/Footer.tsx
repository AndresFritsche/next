import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              className=""
              src="/Next_Design__1_-removebg-preview.png"
              alt="Company name"
              width={230}
              height={220}
            />
            <p className="text-gray-500 text-base">
              Creating stunning digital experiences for businesses worldwide.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Services
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/services/web-design" className="text-base text-gray-500 hover:text-gray-900">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/development" className="text-base text-gray-500 hover:text-gray-900">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className="text-base text-gray-500 hover:text-gray-900">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services/branding" className="text-base text-gray-500 hover:text-gray-900">
                    Branding
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-base text-gray-500 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Your Agency Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
