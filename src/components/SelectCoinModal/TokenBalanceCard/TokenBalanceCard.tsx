import CopyToClipboard from "@/components/CopyToClipboard/CopyToClipboard";
import LinkRedirect from "@/components/LinkRedirect/LinkRedirect";
import CopyIcon from "../../../assets/copy-green.svg";
import Image from "next/image";
import "./styles.scss";

const baseClassName = "token-balance-card";

interface TokenBalanceCardProps {
  toketIcon: string;
  tokenName: string;
  tokenValue: number;
  tokenLink: string;
}

const TokenBalanceCard = ({
  toketIcon,
  tokenName,
  tokenValue,
  tokenLink,
}: TokenBalanceCardProps) => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__token-name-wrapper`}>
        <Image
          src={toketIcon}
          alt="Token"
          width={44}
          height={44}
          style={{ marginRight: "8px" }}
        />
        <div className={`${baseClassName}__token-name`}>
          <p className={`${baseClassName}__token-title`}>{tokenName}</p>
          <p className={`${baseClassName}__token-subtitle`}>{tokenName}</p>
        </div>
      </div>
      <div className={`${baseClassName}__token-value-wrapper`}>
        <p className={`${baseClassName}__token-value`}>{tokenValue}</p>
        <div className={`${baseClassName}__token-link-wrapper`}>
          <LinkRedirect url={tokenLink} />
          <div>
            <CopyToClipboard
              imageSrc={CopyIcon}
              textToCopy={tokenLink}
              altText="Copy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenBalanceCard;
