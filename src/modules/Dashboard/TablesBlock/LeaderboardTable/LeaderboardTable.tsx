import Table from "@/components/Table/Table";
import TableCell from "@/components/TableCell/TableCell";
import { Box, CircularProgress, TableRow } from "@mui/material";
import CoinIcon from "../../../../assets/coin.svg";
import Image from "next/image";
import LinkRedirect from "@/components/LinkRedirect/LinkRedirect";
import "./styles.scss";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Leaderboard, fetchLeaderboard } from "@/api/api";
import { shortAddress } from "@/utils/shortAddress";

const baseClassName = "leaderboard-table";

// const leaderboardSoetedData = [...mockedData].sort(
//   (a, b) => b.rewards - a.rewards
// );

const LeaderboardTable = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const response = await fetchLeaderboard();
        setLeaderboard(response.result.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getLeaderboard();
  }, []);

  if (isLoading) {
    return (
      <div className={baseClassName}>
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <CircularProgress />
        </Box>
      </div>
    );
  }

  return (
    <div className={baseClassName}>
      <Table headers={["Rank", "Name", "Invited By", "Rewards"]}>
        {leaderboard.map(({ no, address, rewards, invited }) => (
          <TableRow
            sx={{
              "@media (max-width:768px)": {
                display: "flex",
                flexDirection: "column",
                borderBottom: "solid 1px #3E4257",
              },
            }}
            key={no}
          >
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Rank</p>
                <p
                  className={clsx({
                    [`${baseClassName}__rank-gold`]: no === 1,
                    [`${baseClassName}__rank-silver`]: no === 2,
                    [`${baseClassName}__rank-bronze`]: no === 3,
                  })}
                >
                  {no}
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Name</p>
                <p className={`${baseClassName}__text`}>
                  {shortAddress(address)}
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>
                  Invited By
                </p>
                <LinkRedirect url={shortAddress(invited.address)} />
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Rewards</p>
                <div className={`${baseClassName}__cell-mobile`}>
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
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default LeaderboardTable;
