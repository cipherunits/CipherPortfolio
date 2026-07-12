import NamePage from "@/components/shared/NamePage";
import { Metadata } from "next";
import SubNamePage from "@/components/shared/SubNamePage";
import Projects from "@/components/landing/projects/components/Projects";

export const metadata: Metadata = {
    title: "Projects CipherUnit — Cipher Unit Open Source Developer Tools",
    description: "Projects CipherUnit — Cipher Unit open-source engineering collective for collaborations, contributions, and technical inquiries.",
    alternates: {
        canonical: '/projects',
    },
};

export default function page() {
    return (
        <div className="max-w-6xl mx-auto p-6 my-8 md:my-22">
            <div className="space-y-3 mb-16">
                <NamePage />
                <SubNamePage text="List of my projects" />
            </div>
            <Projects view={false} />
        </div>
    );
}
