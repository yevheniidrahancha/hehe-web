import clsx from "clsx";
import "./styles.scss";
import PlusButton from "./PlusButton/PlusButton";
import DottedUser from "../../../assets/dotted-user.svg";
import RepeatSvg from "../../../assets/repeat.svg";
import WalletSvg from "../../../assets/wallet.svg";

import Image from "next/image";

const baseClassName = "level-detailed-info";

interface LevelDetailedInfoProps {
  selectedLevel?: number;
}

const LevelDetailedInfo = ({ selectedLevel = 1 }: LevelDetailedInfoProps) => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__card`}>
        <div className={`${baseClassName}__title`}>
          <p className={`${baseClassName}__level`}>Level {selectedLevel}</p>
          <p className={`${baseClassName}__id`}>ID: 2873</p>
        </div>
        <div className={`${baseClassName}__content`}>
          <div className={`${baseClassName}__action-elipse`}>
            <div className={`${baseClassName}__add-button`}>
              <PlusButton />
            </div>
            <div
              className={clsx(
                `${baseClassName}__user`,
                `${baseClassName}__first-user`
              )}
            >
              <div
                className={`${baseClassName}__circular-progress`}
                style={{ "--progress": `${80}%` } as React.CSSProperties}
              >
                <img
                  className={`${baseClassName}__avatar`}
                  src={
                    "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920"
                  }
                  alt={"user"}
                />
              </div>
            </div>
            <div
              className={clsx(
                `${baseClassName}__user`,
                `${baseClassName}__second-user`
              )}
            >
              <div
                className={`${baseClassName}__second-circular-progress`}
                // add progress percents here
                style={{ "--progress": `${20}%` } as React.CSSProperties}
              >
                <img
                  className={`${baseClassName}__avatar`}
                  src={
                    "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920"
                  }
                  alt={"user"}
                />
              </div>
            </div>

            <div className={`${baseClassName}__dashed-elipse`}>
              <div className={`${baseClassName}__elipse`}>
                <div className={`${baseClassName}__text`}>
                  <p className={`${baseClassName}__text-title`}>All Profits</p>
                  <p className={`${baseClassName}__text-percent`}>+259.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${baseClassName}__footer`}>
          <div className={`${baseClassName}__left-content`}>
            <div className={`${baseClassName}__footer-card`}>
              <p className={`${baseClassName}__label`}>Partners</p>
              <div className={`${baseClassName}__img-card`}>
                <Image src={DottedUser} alt="user" width={16} height={16} />
                <p className={`${baseClassName}__img-card-text`}>3</p>
              </div>
            </div>
            <div className={`${baseClassName}__footer-card`}>
              <p className={`${baseClassName}__label`}>Cycles</p>
              <div className={`${baseClassName}__img-card`}>
                <Image src={RepeatSvg} alt="repeat" width={16} height={16} />
                <p className={`${baseClassName}__img-card-text`}>1</p>
              </div>
            </div>
          </div>
          <div className={`${baseClassName}__right-content`}>
            <div
              className={clsx(
                `${baseClassName}__footer-card`,
                `${baseClassName}__footer-card-right`
              )}
            >
              <p className={`${baseClassName}__label`}>Total level revenie</p>
              <div className={`${baseClassName}__img-card`}>
                <Image src={WalletSvg} alt="repeat" width={16} height={16} />
                <p className={`${baseClassName}__img-card-text`}>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelDetailedInfo;
