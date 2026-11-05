import type { ReactNode } from "react";

type SectionHeadingProps = {
  className?: string;
  children: ReactNode;
};

const SectionHeading = ({ className = "", children }: SectionHeadingProps) => {
  return (
    <h2
      className={`text-3xl md:text-4xl font-semibold leading-tight ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
