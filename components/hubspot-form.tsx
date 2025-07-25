"use client"

import Script from "next/script"

export default function HubspotForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Start your 1031 Exchange</h3>
      <Script src="https://js-na2.hsforms.net/forms/embed/242723434.js" strategy="afterInteractive" />
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="b9cf63fc-8bc5-4ee2-88e2-991d8f54421b"
        data-portal-id="242723434"
      />
    </div>
  )
}
