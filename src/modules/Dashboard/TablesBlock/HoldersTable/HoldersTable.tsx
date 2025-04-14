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
          <TableRow key={index}>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__text`}>{address}</p>
                <CopyToClipboard
                  altText="copy"
                  textToCopy={address}
                  imageSrc={CopyIcon}
                />
              </div>
            </TableCell>
            <TableCell>
              <div className={`${baseClassName}__cell-content`}>
                <p className={`${baseClassName}__text`}>{supply}</p>
                <LinearProgress value={80} />
              </div>
            </TableCell>
            <TableCell>
              <p>{amount}</p>
            </TableCell>
            <TableCell>
              <p>${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default HoldersTable;
