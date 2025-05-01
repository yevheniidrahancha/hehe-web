import { formatDate } from "@/utils/formatDate";
import { formatScientificNumber } from "@/utils/formatScientificNumber";
import clsx from "clsx";
import CopyToClipboard from "@/components/CopyToClipboard/CopyToClipboard";
import CopyIcon from "../../../../assets/copy-green.svg";
import "./styles.scss";
import { ExchangeHistory } from "@/api/api";

const baseClassName = "trade-history-table-mobile";

const TradeHistoryTableMobile = ({ data }: { data: ExchangeHistory[] }) => {
  return (
    <div className={baseClassName}>
      {data.map((item) => (
        <div key={item.maker} className={`${baseClassName}__card`}>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Date</p>
            <p className={`${baseClassName}__content`}>
              {formatDate(item.timestamp)}
            </p>
          </div>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Type</p>
            <p
              className={clsx(
                `${baseClassName}__content`,
                `${baseClassName}__type-${item.type.toLowerCase()}`
              )}
            >
              {item.type}
            </p>
          </div>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Price</p>
            <p className={`${baseClassName}__content`}>
              $ {formatScientificNumber(item.price_usd)}
            </p>
          </div>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Total</p>
            <div>
              <div className={`${baseClassName}__total`}>
                <p className={`${baseClassName}__content`}>
                  ${item.amount.toLocaleString("en-US")}
                </p>
                {/* {getIconByRank(item.rank as Ranks)} */}
              </div>
            </div>
          </div>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Price ETH</p>
            <p className={`${baseClassName}__content`}>
              $ {formatScientificNumber(item.amount_usd)}
            </p>
          </div>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Amount HYPE</p>
            <p className={`${baseClassName}__content`}>
              $ {formatScientificNumber(item.amount_usd)}
            </p>
          </div>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Marker</p>
            <div className={`${baseClassName}__marker`}>
              <p
                className={clsx(
                  `${baseClassName}__content`,
                  `${baseClassName}__content-marker`
                )}
              >
                {item.maker}
              </p>
              <CopyToClipboard
                imageSrc={CopyIcon}
                textToCopy={item.maker}
                altText="copy"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradeHistoryTableMobile;
