import Image from "next/image";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const About = () => {
  return (
    <Section id="about">
      <div
        className="grid gap-6 md:gap-10 bg-surface rounded-2xl p-6 md:p-10
                  md:grid-cols-[2fr_3fr]
                  [grid-template-areas:'photo'_'text'] md:[grid-template-areas:'photo_text']"
      >
        <div className="[grid-area:photo] relative aspect-square overflow-hidden rounded-t-full rounded-b-2xl">
          <Image
            src="/portrait.jpg"
            alt="Limari smiling in her home studio"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="[grid-area:text] grid gap-4 content-center">
          <SectionHeading>
            About me
          </SectionHeading>
          <p>I&apos;ve been doing nails for over 5 years, and what started as a passion for creating sets for friends and family has grown into my own home studio in Houston.</p>
          <p>I love bringing your ideas to life, from clean, everyday sets to bold nail art with chrome, charms, and hand-painted details. Every appointment is one-on-one, so you get my full attention and a set made just for you.</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
