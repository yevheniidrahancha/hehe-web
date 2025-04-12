import Image from "next/image";
import PlusSvg from "../../../../assets/plus.svg";
import "./styles.scss";

const baseClassName = "plus-button";

const PlusButton = () => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__border`}>
        <div className={`${baseClassName}__circle`}>
          <Image src={PlusSvg} alt="plus" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default PlusButton;
