"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

interface AccordionProps {
  items: [AccordionItemProps, ...AccordionItemProps[]];
}

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <button
        className="border-1 p-4 m-4 w-200 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        <span>{title}</span>
        <span>{isAccordionOpen ? "-" : "+"}</span>
      </button>
      {isAccordionOpen && <p>{content}</p>}
    </div>
  );
};

const Accordion = ({ items }: AccordionProps) => {
  return (
    <>
      {items.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </>
  );
};

const AccordionPage = () => {
  return (
    <div>
      <h1>Accordion</h1>
      <Accordion
        items={[
          {
            title: "Item 1",
            content: "Content for item 1",
          },
          {
            title: "Item 2",
            content: "Content for item 2",
          },
          {
            title: "Item 3",
            content: "Content for item 3",
          },
        ]}
      />
    </div>
  );
};

export default AccordionPage;
