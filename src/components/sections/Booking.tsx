import Link from "next/link"
import { site } from "@/data/site";
import Section from "../ui/Section";

const Booking = () => {
  return (
    <Section id="booking" className="grid md:grid-cols-[3fr_2fr] gap-6 ">
      <div className="grid gap-2 rounded-2xl p-6 md:p-10 bg-brand text-deep">
        <h2 className="text-2xl md:text-4xl font-semibold leading-tight">Book an appointment</h2>
        <p>Pick a time that works for you. A deposit holds your spot.</p>
        <Link href={site.bookingUrl} className="mt-4 justify-self-start bg-deep text-ink px-6 py-3 rounded-full font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep">Book now</Link>
      </div>
      <div className="grid content-start gap-2 border border-ink/10 rounded-2xl p-6 md:p-10">
        <h3 className="text-xl md:text-2xl font-semibold leading-tight">Serving {site.area}</h3>
        <p>Exact address sent after booking.</p>
      </div>
    </Section>
  )
}

export default Booking