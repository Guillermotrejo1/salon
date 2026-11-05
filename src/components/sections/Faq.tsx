import { faqs } from "@/data/faq";
import Section from "../ui/Section";

const Faq = () => {
  return (
    <Section id="faq">
      <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
        Policies / FAQ
      </h2>
      <ul role="list" className="grid gap-2">
        {faqs.map((faq) => (
          <li key={faq.id}>
            <details className="group rounded-xl bg-surface/0 open:bg-surface p-4">
              <summary className="flex justify-between items-center gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pt-3 text-ink/80">{faq.answer}</p>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Faq;
