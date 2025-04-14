import React from "react";
import Image from "next/image";
import LinkIcon from "../../assets/link.svg";

const LinkRedirect = ({ url }: { url: string }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={handleClick}
    >
      <p>{url}</p>
      <Image
        src={LinkIcon}
        width={20}
        height={20}
        alt="link icon"
        style={{ marginLeft: 10 }}
      />
    </div>
  );
};

export default LinkRedirect;
