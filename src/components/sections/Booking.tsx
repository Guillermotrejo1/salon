import Link from "next/link";
import { site } from "@/data/site";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Booking = () => {
  return (
    <Section id="booking" className="grid md:grid-cols-[3fr_2fr] gap-6 ">
      <div className="grid gap-2 rounded-2xl p-6 md:p-10 bg-brand text-deep">
        <SectionHeading>Book an appointment</SectionHeading>
        <p>Pick a time that works for you. A deposit holds your spot.</p>
        {/* <Link href={site.bookingUrl} className="mt-4 justify-self-start bg-deep text-ink px-6 py-3 rounded-full font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep">Book now</Link> */}
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={site.messengerUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-deep text-ink px-6 py-3 rounded-full font-medium"
          >
            Message on Facebook
          </Link>
          <Link
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-deep text-ink px-6 py-3 rounded-full font-medium"
          >
            Message on instagram
          </Link>
        </div>
      </div>
      <div className="grid content-start gap-2 border border-ink/10 rounded-2xl p-6 md:p-10">
        <h3 className="text-xl md:text-2xl font-semibold leading-tight">
          Serving {site.area}
        </h3>
        <p>Exact address sent after booking.</p>
      </div>
    </Section>
  );
};

export default Booking;
