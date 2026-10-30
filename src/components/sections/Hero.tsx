import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="grid h-[85dvh] md:h-[75dvh] md:grid-cols-2">
      <Image
        src="/hero-image.png"
        width={2268}
        height={4032}
        sizes="(min-width: 768px) 50vw, 100vw"
        alt="Close-up of a purple gel manicure"
        priority
        className=" col-start-1 row-start-1 md:col-start-2 w-full h-full object-cover object-[center_40%]"
      />
      <div className="grid col-start-1 row-start-1 self-end m-4 p-6 rounded-2xl bg-surface/85 gap-4 justify-items-start md:self-center md:m-0 md:p-12 md:bg-transparent">
        <h1 className="text-4xl md:text-6xl leading-tight font-semibold">
          Custom nails, made <span className="text-brand">just for you</span>
        </h1>
        <p className="text-base md:text-lg max-w-md">
          Gel, acrylics, and nail art in [AREA]. By appointment only.
        </p>
        <Link href="#booking" className="bg-brand text-deep px-6 py-3 rounded-full font-medium">Book now</Link>
      </div>
    </section>
  );
};

export default Hero;
