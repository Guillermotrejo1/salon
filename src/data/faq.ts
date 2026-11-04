export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  { id: "deposits", question: "How do deposits work?", answer: "[DEPOSIT POLICY]" },
  { id: "late-cancel", question: "What if I'm late or need to cancel?", answer: "[LATE AND CANCELLATION POLICY]" },
  { id: "parking", question: "Where do I park?", answer: "[PARKING INFO]" },
  { id: "guests", question: "Can I bring a friend?", answer: "[GUEST POLICY]" },
];