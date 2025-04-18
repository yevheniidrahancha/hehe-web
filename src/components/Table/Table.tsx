import {
  TableContainer,
  Table as MUITable,
  TableHead,
  TableRow,
  tableCellClasses,
  styled,
  TableCell,
  TableBody,
} from "@mui/material";
import { ReactNode } from "react";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
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

interface TableProps {
  headers: string[];
  children: ReactNode;
}

const Table = ({ headers, children }: TableProps) => {
  return (
    <TableContainer>
      <MUITable>
        <TableHead
          sx={{
            "@media (max-width:768px)": {
              display: "none",
            },
          }}
        >
          <TableRow>
            {headers.map((item) => (
              <StyledTableCell key={item}>{item}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
