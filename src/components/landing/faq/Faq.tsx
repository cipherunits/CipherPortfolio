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

      <div className="mt-8 overflow-hidden rounded-xl border border-(--color-stroke)/40 bg-(--color-background-secondary)/60">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div
              key={item.question}
              className={
                index > 0 ? "border-t border-(--color-stroke)/30" : undefined
              }
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-white transition hover:bg-(--color-surface)/70 hover:text-(--color-primery)"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-medium md:text-lg">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className="relative flex size-8 shrink-0 items-center justify-center rounded-md border border-(--color-stroke)/30 text-(--color-primery)"
                  >
                    <span className="absolute h-0.5 w-3 rounded-full bg-current" />
                    <span
                      className={`absolute h-3 w-0.5 rounded-full bg-current transition-transform duration-300 ease-out ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className={`px-5 pb-5 leading-7 text-(--color-stroke) transition-opacity duration-300 ease-out ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
