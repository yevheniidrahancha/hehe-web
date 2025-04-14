import {
  tableCellClasses,
  TableCell as MUITableCell,
  styled,
} from "@mui/material";
import { ReactNode } from "react";

const StyledTableCell = styled(MUITableCell)(() => ({
  [`&.${tableCellClasses.root}`]: {
    backgroundColor: "#292C3C",
    color: "#797A91",
    borderBottom: "1px solid #35394B",
    borderRight: "1px solid #35394B",
    padding: "8px 12px",

    "&:last-child": {
      borderRight: "none",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

interface TableCellProps {
  children: ReactNode;
}

const TableHeaderCell = ({ children }: TableCellProps) => {
  return (
    <StyledTableCell component="th" scope="row">
      {children}
    </StyledTableCell>
  );
};

export default TableHeaderCell;
