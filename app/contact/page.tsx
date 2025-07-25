"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import Script from "next/script"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in touch</h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ready to defer your capital gains taxes? Contact us today to learn how we can help you maximize your real
          estate investments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Start your 1031 Exchange now!</h3>
          <Script src="https://js-na2.hsforms.net/forms/embed/242723434.js" strategy="afterInteractive" />
          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="b9cf63fc-8bc5-4ee2-88e2-991d8f54421b"
            data-portal-id="242723434"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">(818) 482-2707</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:info@maximize1031.com" className="text-blue-500 hover:underline">
                    info@maximize1031.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">
                    2108 N ST STE N<br />
                    Sacramento, CA 95816
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
            <p className="text-gray-600 mb-4">
              We provide 1031 exchange services throughout California, with a focus on:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Los Angeles
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                San Francisco
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                San Diego
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Sacramento
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Orange County
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Bay Area
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
