import ContactBox from "@/components/contacts/ContactBox";
import ContactMedia from "@/components/contacts/ContactMedia";
import ContactText from "@/components/contacts/ContactText";
import NamePage from "@/components/shared/NamePage";
import type { Metadata } from "next";
import {
  BreadcrumbJsonLdContact,
  JsonLd
} from "@/components/shared/JsonLd";
import SubNamePage from "@/components/shared/SubNamePage";

export const metadata: Metadata = {
  title: "Contact CipherUnit — Cipher Unit Open Source Developer Tools",
  description: "Contact CipherUnit — Cipher Unit open-source engineering collective for collaborations, contributions, and technical inquiries.",
  alternates: {
    canonical: '/contact',
  },
};

export default function page() {
  return (
    <div className="max-w-6xl mx-auto p-6 my-8 md:my-22">
      <JsonLd data={BreadcrumbJsonLdContact} />
      <div className="space-y-3">
        <NamePage />
        <SubNamePage text="Who am i?" />
      </div>
      <div className="flex md:flex-row flex-col gap-10 justify-between items-center">
        <ContactText />
        <ContactBox />
      </div>
      <ContactMedia />
    </div>
  );
}
