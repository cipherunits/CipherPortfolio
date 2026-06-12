import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cipher Unit on GitHub",
  description: "Explore Cipher Unit's open-source projects and repositories on GitHub.",
};

export default function GithubPage() {
  redirect("https://github.com/cipherunit");
}