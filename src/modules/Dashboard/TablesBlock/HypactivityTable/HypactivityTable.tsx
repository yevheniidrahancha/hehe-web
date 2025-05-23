import Table from "@/components/Table/Table";
import TableCell from "@/components/TableCell/TableCell";
import { TableRow } from "@mui/material";
import CopyIcon from "../../../../assets/copy-green.svg";

import CopyToClipboard from "@/components/CopyToClipboard/CopyToClipboard";

import LinkRedirect from "@/components/LinkRedirect/LinkRedirect";
import "./styles.scss";
import { formatDateWithDDMMYYTime } from "@/utils/formatDate";

const baseClassName = "hypactivity-table";

interface HypactivityMockedDataInterface {
  date: number;
  id: number;
  program: string;
  level: number;
  transaction: string;
  event: string;
}

const mockedData: HypactivityMockedDataInterface[] = [
  {
    date: 1742966580000,
    id: 48683748383,
    program: "X3 Monster Ball",
    level: 2,
    transaction: "0xf52...140b",
    event: "1009184.9834 HEHE",
  },
  {
    date: 1742966580000,
    id: 48683748383,
    program: "X3 Monster Ball",
    level: 2,
    transaction: "0xf52...140b",
    event: "1009184.9834 HEHE",
  },
  {
    date: 1742966580000,
    id: 48683748383,
    program: "X3 Monster Ball",
    level: 2,
    transaction: "0xf52...140b",
    event: "1009184.9834 HEHE",
  },
  {
    date: 1742966580000,
    id: 48683748383,
    program: "X3 Monster Ball",
    level: 2,
    transaction: "0xf52...140b",
    event: "1009184.9834 HEHE",
  },
];

const HypactivityTable = () => {
  return (
    <div className={baseClassName}>
      <Table
        headers={["Date", "ID", "Program", "Level", "Transaction", "Events"]}
      >
        {mockedData.map(
          ({ date, id, program, level, transaction, event }, index) => (
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
                  <p className={`${baseClassName}__cell-mobile-title`}>Date</p>
                  <p className={`${baseClassName}__text`}>
                    {formatDateWithDDMMYYTime(date)}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div className={`${baseClassName}__cell-content`}>
                  <p className={`${baseClassName}__cell-mobile-title`}>ID</p>
                  <p className={`${baseClassName}__text-id`}>{id}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className={`${baseClassName}__cell-content`}>
                  <p className={`${baseClassName}__cell-mobile-title`}>
                    Program
                  </p>
                  <p className={`${baseClassName}__text`}>{program}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className={`${baseClassName}__cell-content`}>
                  <p className={`${baseClassName}__cell-mobile-title`}>Level</p>
                  <p className={`${baseClassName}__text`}>{level}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className={`${baseClassName}__cell-content`}>
                  <p className={`${baseClassName}__cell-mobile-title`}>
                    Transaction
                  </p>
                  <div className={`${baseClassName}__cell-mobile`}>
                    <LinkRedirect url={transaction} />
                    <CopyToClipboard
                      textToCopy={transaction}
                      altText="Copy"
                      imageSrc={CopyIcon}
                    />
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className={`${baseClassName}__cell-content`}>
                  <p className={`${baseClassName}__cell-mobile-title`}>
                    Events
                  </p>
                  <p className={`${baseClassName}__text`}>{event}</p>
                </div>
              </TableCell>
            </TableRow>
          )
        )}
      </Table>
    </div>
  );
};

export default HypactivityTable;
