import React, { useState } from "react";
import Image from "next/image";

import "./styles.scss";

interface CopyToClipboardProps {
  imageSrc: string;
  textToCopy: string;
  altText: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  imageSrc,
  textToCopy,
  altText,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Ошибка при копировании: ", err);
      });
  };

  return (
    <div className="copy-to-clipboard" onClick={handleCopy}>
      {copied ? (
        <span className="copied-message">Copied!</span>
      ) : (
        <Image src={imageSrc} width={20} height={20} alt={altText} />
      )}
    </div>
  );
};

export default CopyToClipboard;
