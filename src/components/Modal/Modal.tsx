"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  SxProps,
  Theme,
} from "@mui/material";
import CloseIcon from "../../assets/close-icon.svg";
import { ReactNode } from "react";
import Image from "next/image";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const modalPaperSx: SxProps<Theme> = {
  width: "618px",
  padding: "0",
  backgroundColor: "#2F3344",
  borderRadius: "16px",
  boxSizing: "border-box",
  "@media (max-width: 600px)": {
    width: "321px",
    padding: "0 16px",
  },
};

const modalTitleSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  color: "#FFF",
  fontSize: "20px",
  lineHeight: "28px",
  fontWeight: 600,
};

const Modal = ({ open, onClose, title, children }: ModalProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    slotProps={{
      paper: { sx: modalPaperSx },
    }}
  >
    <DialogTitle sx={modalTitleSx}>
      {title}
      <IconButton
        onClick={onClose}
        sx={{ color: "#797A91", marginLeft: "auto" }}
      >
        <Image src={CloseIcon} alt="Close" width={20} height={20} />
      </IconButton>
    </DialogTitle>

    <DialogContent sx={{ padding: 0 }}>{children}</DialogContent>
  </Dialog>
);

export default Modal;
