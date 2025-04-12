"use client";

import Image from "next/image";
import CopyIcon from "../../../../assets/copy.svg";
import SmileIcon from "../../../../assets/smile.svg";

import "./styles.scss";
import { useState } from "react";

const baseClassName = "referral-link";
const link = "https://hehe.com/ref=$9295xj-3928x03pox039jfh930_039x893";

const ReferralLink = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__img-wrapper`}>
        <Image src={SmileIcon} alt="smile icon" width={48} height={48} />
      </div>
      <div className={`${baseClassName}__user-name-wrapper`}>
        <p className={`${baseClassName}__user-name`}> ermalength</p>
        <div className={`${baseClassName}__link-wrapper`}>
          <p className={`${baseClassName}__link`}>{link}</p>

          <button
            className={`${baseClassName}__copy-button`}
            onClick={handleCopy}
            aria-label="Copy to clipboard"
          >
            <Image src={CopyIcon} alt="copy" width={16} height={16} />
          </button>
        </div>
        <p className={`${baseClassName}__text`}>
          Invited 01.05.2024 by{" "}
          <span className={`${baseClassName}__user-id`}>ID 2411</span>
        </p>
      </div>
    </div>
  );
};

export default ReferralLink;
