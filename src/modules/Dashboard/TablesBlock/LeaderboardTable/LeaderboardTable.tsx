import Table from "@/components/Table/Table";
import TableCell from "@/components/TableCell/TableCell";
import { TableRow } from "@mui/material";
import CoinIcon from "../../../../assets/coin.svg";
import Image from "next/image";
import LinkRedirect from "@/components/LinkRedirect/LinkRedirect";
import "./styles.scss";

const baseClassName = "leaderboard-table";

interface LeaderMockedDataInterface {
  name: string;
  invitedBy: string;
  rewards: number;
}

const mockedData: LeaderMockedDataInterface[] = [
  {
    name: "0xC6...V83O",
    invitedBy: "0x10...1940",
    rewards: 98382112098,
  },
  {
    name: "0xC6...PPo3",
    invitedBy: "0x99...2387",
    rewards: 82438001000,
  },
  {
    name: "0xC6...3093",
    invitedBy: "0x26...6299",
    rewards: 110290477398,
  },
  {
    name: "0xC6...XBJ9",
    invitedBy: "0x74...4924",
    rewards: 47302503938,
  },
];

const leaderboardSoetedData = [...mockedData].sort(
  (a, b) => b.rewards - a.rewards
);

const LeaderboardTable = () => {
  return (
    <div className={baseClassName}>
      <Table headers={["Rank", "Name", "Invited By", "Rewards"]}>
        {leaderboardSoetedData.map(({ name, invitedBy, rewards }, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p
                  className={`${baseClassName}__rank${
                    index === 0
                      ? "-gold"
                      : index === 1
                      ? "-silver"
                      : index === 2
                      ? "-bronze"
                      : ""
                  }`}
                >
                  {index + 1}
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__text`}>{name}</p>
              </div>
            </TableCell>
            <TableCell>
              <LinkRedirect url={invitedBy} />
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <Image
                  src={CoinIcon}
                  width={20}
                  height={20}
                  alt="coin"
                  style={{ marginRight: 10 }}
                />
                <p className={`${baseClassName}__text`}>
                  ${rewards.toLocaleString("en-US")}{" "}
                </p>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default LeaderboardTable;
