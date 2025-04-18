import {
  tableCellClasses,
  TableCell as MUITableCell,
  styled,
} from "@mui/material";
import { ReactNode } from "react";

const StyledTableCell = styled(MUITableCell)(() => ({
  [`&.${tableCellClasses.root}`]: {
    backgroundColor: "#252836",
    color: "#fff",
    borderBottom: "1px solid #35394B",
    borderRight: "1px solid #35394B",
    padding: "8px 12px",
    "@media (max-width: 768px)": {
      borderBottom: "none",
      borderRight: "none",
      backgroundColor: "#2f3344",
    },

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

const TableCell = ({ children }: TableCellProps) => {
  return (
    <StyledTableCell component="th" scope="row">
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
