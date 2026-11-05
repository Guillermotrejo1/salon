import { services } from "@/data/services";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Services = () => {
  return (
    <Section
      id="services"
      className=""
    >
      <div className="grid gap-6 rounded-2xl bg-surface p-6 md:p-10">
        <SectionHeading>
          Services
        </SectionHeading>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {services.map((service) => (
            <li
              key={service.id}
              className="grid grid-cols-[1fr_auto] gap-4 border-b border-dashed border-ink/20 pb-3"
            >
              <span>{service.name}</span>
              <span>{service.price}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink/70">
          *A $[AMOUNT] deposit is required to book. Prices may vary with length
          and design.*
        </p>
      </div>
    </Section>
  );
};

export default Services;
