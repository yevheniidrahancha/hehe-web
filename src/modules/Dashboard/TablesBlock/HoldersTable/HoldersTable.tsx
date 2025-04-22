import LinearProgress from "@/components/LinearProgress/LinearProgress";
import Table from "@/components/Table/Table";
import TableCell from "@/components/TableCell/TableCell";
import { TableRow } from "@mui/material";
import CopyToClipboard from "@/components/CopyToClipboard/CopyToClipboard";
import CopyIcon from "../../../../assets/copy-green.svg";
import "./styles.scss";

const baseClassName = "holders-table";

interface HolderMockedDataInterface {
  address: string;
  supply: number;
  amount: string;
  value: number;
}

const mockedData: HolderMockedDataInterface[] = [
  {
    address: "A77H...QWE2",
    supply: 5.33,
    amount: "53.32M",
    value: 350893,
  },
  {
    address: "A77H...QWE2",
    supply: 5.33,
    amount: "53.32M",
    value: 350893,
  },
  {
    address: "A77H...QWE2",
    supply: 5.33,
    amount: "53.32M",
    value: 350893,
  },
  {
    address: "A77H...QWE2",
    supply: 5.33,
    amount: "53.32M",
    value: 350893,
  },
];

const HoldersTable = () => {
  return (
    <div className={baseClassName}>
      <Table headers={["Address", "ID", "Amount", "Value"]}>
        {mockedData.map(({ address, supply, amount, value }, index) => (
          <TableRow
            sx={{
              "@media (max-width:768px)": {
                display: "flex",
                flexDirection: "column",
                borderBottom: "solid 1px #3E4257",
              },
            }}
            key={index}
          >
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Address</p>
                <div className={`${baseClassName}__cell-mobile`}>
                  <p className={`${baseClassName}__text`}>{address}</p>
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
                <p className={`${baseClassName}__text`}>{supply}</p>
                <LinearProgress value={80} />
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Amount</p>
                <p>{amount}</p>
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__cell-mobile-title`}>Value</p>
                <p>${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default HoldersTable;
