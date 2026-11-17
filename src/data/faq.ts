export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  { id: "deposits", question: "How do deposits work?", answer: "A $20 deposit is required to secure your appointment and goes toward your total. Deposits are non-refundable but can be moved to a new date with at least 24 hours' notice." },
  { id: "late-cancel", question: "What if I'm late or need to cancel?", answer: "Please arrive on time, as appointments run back-to-back. If you're more than 15 minutes late, your appointment may need to be shortened or rescheduled. Cancellations with less than 24 hours' notice forfeit the deposit." },
  { id: "parking", question: "Where do I park?", answer: "Free parking is available right in front of the studio. The exact address and parking details are sent once your appointment is confirmed." },
  { id: "guests", question: "Can I bring a friend?", answer: "To keep the space comfortable and focused, appointments are for clients only. If you'd like to come with a friend, you're welcome to book back-to-back appointments." },
];