import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Find answers to common questions about 1031 exchanges and our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium">What is a 1031 exchange?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">
                A 1031 exchange, named after Section 1031 of the Internal Revenue Code, allows an investor to defer
                capital gains taxes on the sale of investment property when they reinvest the proceeds in a similar
                "like-kind" property within specific time frames.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium">What is a Qualified Intermediary?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">
                A Qualified Intermediary (QI) is a person or entity that facilitates a 1031 exchange by holding the
                proceeds from the sale of the relinquished property and using them to acquire the replacement property.
                The IRS requires the use of a QI to complete a valid 1031 exchange.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium">
              What are the time limits for a 1031 exchange?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">There are two critical time limits in a 1031 exchange:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>
                  Identification Period: You have 45 calendar days from the date you sell your relinquished property to
                  identify potential replacement properties.
                </li>
                <li>
                  Exchange Period: You must complete the purchase of the replacement property within 180 calendar days
                  after the sale of the relinquished property or the due date of your tax return, whichever is earlier.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium">
              What types of property qualify for a 1031 exchange?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">
                To qualify for a 1031 exchange, both the relinquished and replacement properties must be held for
                productive use in a trade or business or for investment purposes. This includes rental properties,
                commercial buildings, land, and other real estate investments. Primary residences do not qualify.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium">How much does a 1031 exchange cost?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">
                The cost of a 1031 exchange typically includes the Qualified Intermediary's fee, which can range from
                $1,000 to $3,000 depending on the complexity of the exchange. There may also be additional costs for
                wire transfers, document preparation, and other services. Contact us for a personalized quote.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">Have more questions? We're here to help.</p>
          <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
