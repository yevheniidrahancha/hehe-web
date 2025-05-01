import LinearProgress from "@/components/LinearProgress/LinearProgress";
import Table from "@/components/Table/Table";
import TableCell from "@/components/TableCell/TableCell";
import { Box, CircularProgress, TableRow } from "@mui/material";
import CopyToClipboard from "@/components/CopyToClipboard/CopyToClipboard";
import CopyIcon from "../../../../assets/copy-green.svg";
import "./styles.scss";
import { useEffect, useState } from "react";
import { Holder, fetchHolders } from "@/api/api";
import { shortAddress } from "@/utils/shortAddress";

const baseClassName = "holders-table";

const formatMillions = (value: number): string => {
  return (value / 1_000_000).toFixed(2) + "M";
};

const HoldersTable = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [holders, setHolders] = useState<Holder[]>([]);

  useEffect(() => {
    const getHolders = async () => {
      try {
        const response = await fetchHolders();
        setHolders(response.result.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getHolders();
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
      <Table headers={["Address", "Supply", "Amount", "Value"]}>
        {holders?.map(({ address, supply, amount, amount_usd }) => (
          <TableRow
            sx={{
              "@media (max-width:768px)": {
                display: "flex",
                flexDirection: "column",
                borderBottom: "solid 1px #3E4257",
              },
            }}
            key={address}
          >
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Address</p>
                <div className={`${baseClassName}__cell-mobile`}>
                  <p className={`${baseClassName}__text`}>
                    {shortAddress(address)}
                  </p>
                  <CopyToClipboard
                    altText="copy"
                    textToCopy={address}
                    imageSrc={CopyIcon}
                  />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Supply</p>
                <p className={`${baseClassName}__text`}>{supply}%</p>
                <LinearProgress value={80} />
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Amount</p>
                <p>{formatMillions(amount)}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Value</p>
                <p>
                  ${amount_usd.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </p>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default HoldersTable;
