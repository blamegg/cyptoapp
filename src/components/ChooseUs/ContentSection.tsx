import { MdOutlineCurrencyBitcoin } from "react-icons/md";

const ContentSection = ({
  activeTag,
  tag,
  paragraphs,
  items,
  extraContent,
}: {
  activeTag: string;
  tag: string;
  paragraphs: string[];
  items: string[];
  extraContent?: string;
}) => (
  <div className={`${activeTag === tag ? "block" : "hidden"}`}>
    {paragraphs.map((para, index) => (
      <p
        key={index}
        className="text-text text-base font-light font-sans text-start flex px-4 mt-5 leading-7"
      >
        {para}
      </p>
    ))}
    <div className="flex flex-col px-3 mt-10 gap-3 text-base font-light font-sans">
      {items.map((item, index) => (
        <p key={index} className="flex items-center gap-2">
          <span className="text-xl text-crypOrange">
            <MdOutlineCurrencyBitcoin />
          </span>
          <span className="text-text">{item}</span>
        </p>
      ))}
    </div>
    {extraContent && (
      <div className="flex text-pretty mt-5 px-4">
        <p className="text-text leading-7 text-base font-light font-sans">
          {extraContent}
        </p>
      </div>
    )}
  </div>
);
export default ContentSection;










