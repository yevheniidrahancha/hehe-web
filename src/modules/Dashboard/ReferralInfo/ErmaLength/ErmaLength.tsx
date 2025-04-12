import Image from "next/image";
import CopyIcon from "../../../../assets/copy.svg";
import SmileIcon from "../../../../assets/smile.svg";

import "./styles.scss";

const baseClassName = "ermaLength";

const ErmaLength = () => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__imgWrapper`}>
        <Image src={SmileIcon} alt="smile icon" width={48} height={48} />
      </div>
      <div className={`${baseClassName}__ermaLengthWrapper`}>
        <p className={`${baseClassName}__ermaLengthTitle`}> ermalength</p>
        <div className={`${baseClassName}__linkWrapper`}>
          <p className={`${baseClassName}__link`}>
            https://hehe.com/ref=$9295xj-3928x03pox039jfh930_039x893
          </p>
          <Image src={CopyIcon} alt="copy" width={16} height={16} />
          <p className={`${baseClassName}__ermaLengthText`}>
            Invited 01.05.2024 by{" "}
            <span className={`${baseClassName}__ermaLengthId`}>ID 2411</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErmaLength;
