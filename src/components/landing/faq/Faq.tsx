"use client";

import { useId, useState } from "react";
import Fields from "@/components/shared/Fields";
import { faqItems } from "@/lib/faq";

export default function Faq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="mx-auto mt-12 w-full max-w-6xl px-6"
      aria-labelledby="faq-heading"
    >
      <div id="faq-heading">
        <Fields text="faq" as="h2" />
      </div>

      <div className="mt-8 divide-y divide-(--color-stroke)/40 border-y border-(--color-stroke)/40">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div key={item.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-white transition hover:text-(--color-primery)"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-medium md:text-lg">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-(--color-primery) text-xl leading-none"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="pb-5 text-(--color-stroke) leading-7"
              >
                {isOpen ? <p>{item.answer}</p> : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
