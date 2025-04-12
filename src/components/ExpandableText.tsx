import { useState } from "react";

interface Props {
  children: string;
  charLimit?: number;
}

const ExpandableText = ({ children, charLimit = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length < charLimit) return <p>{children}</p>;
  const displayText = isExpanded
    ? children
    : children.slice(0, charLimit) + "...";

  return (
    <>
      <p>
        {displayText}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
