import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ id, className = "", children }: SectionProps) => {
  return (
    <section
      id={id}
      className={`max-w-5xl mx-auto w-full p-6 md:p-12 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
