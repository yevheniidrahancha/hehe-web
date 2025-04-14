import FishIcon from "../assets/ranks/fishrank.svg";

import HamsterIcon from "../assets/ranks/hamster.svg";
import ShrimpIcon from "../assets/ranks/shrimprank.svg";
import WormIcon from "../assets/ranks/wormrank.svg";
import WhaleIcon from "../assets/ranks/whalerank.svg";
import CrabIcon from "../assets/ranks/crab.svg";
import OctopusIcon from "../assets/ranks/octopus.svg";
import SquidIcon from "../assets/ranks/squid.svg";
import SharkIcon from "../assets/ranks/shark.svg";
import KrakenIcon from "../assets/ranks/kraken.svg";
import TitanIcon from "../assets/ranks/titan.svg";
import { Ranks } from "@/types/Ranks";
import Image from "next/image";

export const getIconByRank = (rank: Ranks) => {
  const size = { width: 18, height: 14 };
  const margin = { marginLeft: "10px" };
  switch (rank.toLowerCase()) {
    case Ranks.FISH:
      return <Image src={FishIcon} {...size} alt="fish" style={margin} />;
    case Ranks.HAMSTER:
      return <Image src={HamsterIcon} {...size} alt="hamster" style={margin} />;
    case Ranks.SHRIMP:
      return <Image src={ShrimpIcon} {...size} alt="shrimp" style={margin} />;
    case Ranks.WHALE:
      return <Image src={WhaleIcon} {...size} alt="whale" style={margin} />;
    case Ranks.WORM:
      return <Image src={WormIcon} {...size} alt="worm" style={margin} />;
    case Ranks.CRAB:
      return <Image src={CrabIcon} {...size} alt="crab" style={margin} />;
    case Ranks.OCTOPUS:
      return <Image src={OctopusIcon} {...size} alt="octopus" style={margin} />;
    case Ranks.SQUID:
      return <Image src={SquidIcon} {...size} alt="squid" style={margin} />;
    case Ranks.SHARK:
      return <Image src={SharkIcon} {...size} alt="shark" style={margin} />;
    case Ranks.KRAKEN:
      return <Image src={KrakenIcon} {...size} alt="kraken" style={margin} />;
    case Ranks.TITAN:
      return <Image src={TitanIcon} {...size} alt="titan" style={margin} />;
    default:
      return null;
  }
};
