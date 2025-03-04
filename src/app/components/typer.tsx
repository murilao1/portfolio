import React, { useEffect, useState } from 'react';

type Props = {
  children: string;
  shouldType?: boolean;
  className?: string;
};

export const Typer: React.FC<Props> = ({ children, className, shouldType }) => {
  const [typedText, setTypedText] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const lines = children.split('\\n');

  useEffect(() => {
    if (!shouldType) return;

    if (lineIndex < lines.length) {
      let timeout: NodeJS.Timeout;

      if (charIndex < lines[lineIndex].length) {
        timeout = setTimeout(() => {
          setTypedText((prevText) => {
            const newText = [...prevText];
            if (!newText[lineIndex]) newText[lineIndex] = '';
            newText[lineIndex] += lines[lineIndex][charIndex];
            return newText;
          });
          setCharIndex((prevIndex) => prevIndex + 1);
        }, 20);
      } else if (lineIndex < lines.length - 1) {
        timeout = setTimeout(() => {
          setLineIndex((prevIndex) => prevIndex + 1);
          setCharIndex(0);
        }, 500);
      }

      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, shouldType]);

  return (
    <>
      {typedText.map((line) => (
        <p key={line} className={className}>
          {line}
        </p>
      ))}
    </>
  );
};
