import ContactBox from "@/components/contacts/ContactBox";
import ContactMedia from "@/components/contacts/ContactMedia";
import ContactText from "@/components/contacts/ContactText";
import NamePage from "@/components/shared/NamePage";

function page() {
  return (
    <div className="max-w-6xl mx-auto p-6 my-8 md:my-22">
      <div className="space-y-3">
        <NamePage />
        <p className="text-white [word-spacing:6px] my-4">Who am i?</p>
      </div>
      <div className="flex md:flex-row flex-col gap-10 justify-between items-center">
        <ContactText />
        <ContactBox />
      </div>
      <ContactMedia />
    </div>
  );
}
export default page;
