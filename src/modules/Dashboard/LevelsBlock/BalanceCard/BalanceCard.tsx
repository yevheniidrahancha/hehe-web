import clsx from "clsx";
import Image from "next/image";
import FrozeSvg from "../../../../assets/froze.svg";
import EtherumSvg from "../../../../assets/ethereum.svg";

import "./styles.scss";

const baseClassName = "balance-card";

type BulletItem = {
  id: number;
  type?: "success" | "fail" | "frozen";
};

const bulletList: BulletItem[] = [
  { id: 1, type: "success" },
  { id: 2, type: "frozen" },
  { id: 3, type: "fail" },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
];

const BalanceCard = () => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__bullets`}>
        {bulletList.map((item) =>
          item?.type === "frozen" ? (
            <div className={`${baseClassName}__item--froze`} key={item.id}>
              <Image src={FrozeSvg} width={12} height={12} alt="froze" />
            </div>
          ) : (
            <div
              key={item.id}
              className={clsx(`${baseClassName}__item`, {
                [`${baseClassName}__item--fail`]: item?.type === "fail",
                [`${baseClassName}__item--success`]: item?.type === "success",
              })}
            />
          )
        )}
      </div>
      <div>
        <p className={`${baseClassName}__name`}>Frozen balance</p>
        <div className={`${baseClassName}__amount`}>
          <Image src={EtherumSvg} width={24} height={24} alt="etherum" />
          <p className={`${baseClassName}__amount-text`}>0.0 ETH</p>
        </div>
        <p className={`${baseClassName}__profits`}>Missed profits: 0.00 ETH</p>
      </div>
    </div>
  );
};

export default BalanceCard;
