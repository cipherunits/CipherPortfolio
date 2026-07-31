import { siteConfig } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is Cipher Unit?",
    answer:
      "Cipher Unit (CipherUnit) is an open-source engineering collective focused on building secure, scalable, and high-quality software systems and developer tools.",
  },
  {
    question: "What kind of tools does CipherUnit build?",
    answer:
      "CipherUnit builds modern developer tools, open-source backend systems, clean architecture frameworks, and scalable software infrastructure.",
  },
  {
    question: "Is Cipher Unit an open source group?",
    answer:
      "Yes. Cipher Unit is an open-source group. Everything CipherUnit builds is open source and available for the developer community.",
  },
  {
    question: "How can I contact CipherUnit?",
    answer: `You can contact CipherUnit via email at ${siteConfig.email} or through GitHub at github.com/cipherunits.`,
  },
];
