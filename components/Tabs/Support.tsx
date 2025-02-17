import { ChevronDown, ChevronRight, Info } from "lucide-react";
import React, { useState, useEffect } from "react";
import InfoSheet from "../Sheets/Info";

const faqs = [
  {
    title: "Coupons & Offers",
    subQuestions: [
      {
        title: "How to apply a coupon?",
        answers: [
          "Go to the cart page.",
          "Enter the coupon code and click apply.",
        ],
      },
      {
        title: "Can I use multiple coupons?",
        answers: ["No, only one coupon can be applied per order."],
      },
    ],
  },
  {
    title: "Refund",
    subQuestions: [
      {
        title: "How long does it take?",
        answers: [
          "Refunds are processed within 5-7 business days.",
          "Check your bank statement for updates.",
        ],
      },
    ],
  },
  {
    title: "Orders",
    subQuestions: [
      {
        title: "Where can I track my order?",
        answers: ["You can track your order from the order history section."],
      },
    ],
  },
];

const Support = () => {
  const [activeMain, setActiveMain] = useState<string | null>(null);
  const [activeSub, setActiveSub] = useState<string | null>(null);

  // Activate the first tab by default on component mount
  useEffect(() => {
    setActiveMain(faqs[0]?.title || null);
  }, []);

  const toggleMain = (title: string) => {
    // If the same main question is clicked, keep it open
    setActiveMain(title);
    setActiveSub(null); // Reset sub-question on main change
  };

  const toggleSub = (title: string) => {
    setActiveSub(activeSub === title ? null : title);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-10 mb-5">
        <h2 className="text-fontPrimary text-xl font-bold">
          Customer Support & FAQs
        </h2>
        <InfoSheet />
      </div>

      <div className="grid grid-cols-[1fr_3fr]">
        <div className="border overflow-auto max-h-[600px] rounded-l-2xl bg-secondary">
          {faqs.map((faq) => (
            <div key={faq.title}>
              <h3
                onClick={() => toggleMain(faq.title)}
                className={`cursor-pointer text-fontPrimary border-b font-medium text-base flex items-center justify-between gap-5 p-5 hover:bg-background ${
                  activeMain === faq.title
                    ? "bg-background text-primary"
                    : "bg-white"
                }`}
              >
                {faq.title}
                <ChevronRight
                  size={20}
                  className={`transition-transform duration-300 `}
                />
              </h3>
            </div>
          ))}
        </div>

        {/* Answer Section */}
        <div className="ml-4 overflow-auto h-[600px] bg-secondary rounded-r-2xl border">
          {faqs
            .filter((faq) => faq.title === activeMain)
            .map((faq) => (
              <div key={faq.title}>
                {faq.subQuestions.map((sub) => (
                  <div key={sub.title}>
                    <h4
                      onClick={() => toggleSub(sub.title)}
                      className={`cursor-pointer text-fontPrimary border-b font-medium text-sm flex items-center justify-between gap-5 p-3 hover:bg-background bg-white ${
                        activeSub === sub.title ? "bg-background" : ""
                      }`}
                    >
                      {sub.title}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          activeSub === sub.title ? "rotate-180" : ""
                        }`}
                      />
                    </h4>

                    {/* Answers */}
                    {activeSub === sub.title && (
                      <div className="p-3">
                        <ul className="list-inside">
                          {sub.answers.map((ans, index) => (
                            <li
                              key={index}
                              className="list-disc text-fontSecondary text-sm mb-2"
                            >
                              {ans}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Support;
