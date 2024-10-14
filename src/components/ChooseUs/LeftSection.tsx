
"use client";
import React, { useState } from "react";
import ContentSection from "./ContentSection";
import Tab from "./Tab";
import { ChooseUssections as sections } from "../constants";

const LeftSection = () => {
  const [activeTag, setActiveTag] = useState("headone");
  const handleActiveTag = (tag: string) => {
    setActiveTag(tag);
  };
  return (
    <div className="lg:w-1/2 w-full">
      <div className="flex px-4 md:flex-row flex-col md:gap-0 gap-4 text-center items-center">
        {sections.map((section) => (
          <Tab
            key={section.tag}
            label={section.label}
            isActive={activeTag === section.tag}
            onClick={() => handleActiveTag(section.tag)}
          />
        ))}
      </div>
      {sections.map((section) => (
        <ContentSection
          key={section.tag}
          activeTag={activeTag}
          tag={section.tag}
          paragraphs={section.paragraphs}
          items={section.items}
          extraContent={section.extraContent}
        />
      ))}
    </div>
  );
};
export default LeftSection;
