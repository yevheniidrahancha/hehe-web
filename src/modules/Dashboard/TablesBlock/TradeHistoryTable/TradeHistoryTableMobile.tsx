import { TradeRow } from "@/types/Types";
import { formatDate } from "@/utils/formatDate";

import { formatScientificNumber } from "@/utils/formatScientificNumber";
import { Ranks } from "@/types/Ranks";
import { getIconByRank } from "@/utils/getIconByRank";
import clsx from "clsx";
import CopyToClipboard from "@/components/CopyToClipboard/CopyToClipboard";
import CopyIcon from "../../../../assets/copy-green.svg";
import "./styles.scss";

const baseClassName = "trade-history-table-mobile";

const TradeHistoryTableMobile = ({ data }: { data: TradeRow[] }) => {
  return (
    <div className={baseClassName}>
      {data.map((item) => (
        <div key={item.rank} className={`${baseClassName}__card`}>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Date</p>
            <p className={`${baseClassName}__content`}>
              {formatDate(item.date)}
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
              $ {formatScientificNumber(item.priceSol)}
            </p>
          </div>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Total</p>
            <div>
              <div className={`${baseClassName}__total`}>
                <p className={`${baseClassName}__content`}>${item.total}</p>
                {getIconByRank(item.rank as Ranks)}
              </div>
            </div>
          </div>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Price ETH</p>
            <p className={`${baseClassName}__content`}>
              $ {formatScientificNumber(item.priceSol)}
            </p>
          </div>
          <div className={`${baseClassName}__column`}>
            <p className={`${baseClassName}__label`}>Amount HYPE</p>
            <p className={`${baseClassName}__content`}>
              $ {formatScientificNumber(item.priceSol)}
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
                {item.marker}
              </p>
              <CopyToClipboard
                imageSrc={CopyIcon}
                textToCopy={item.marker}
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
