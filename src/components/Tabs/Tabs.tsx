import { Tabs as MUITabs, Tab } from "@mui/material";
import { SyntheticEvent } from "react";

export type Tab = {
  value: string;
  label: string;
};

interface TabsProps {
  value: string;
  tabs: Tab[];
  onChange: (event: SyntheticEvent, newValue: string) => void;
}

const Tabs = ({ value, onChange, tabs }: TabsProps) => {
  return (
    <MUITabs
      sx={{
        minHeight: "36px",
        "& .MuiTabs-indicator": {
          backgroundColor: "#6AB67C",
          height: "2px",
        },
      }}
      value={value}
      onChange={onChange}
    >
      {tabs.map((item) => (
        <Tab
          sx={{
            textTransform: "none",
            minHeight: "40px",
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "SF Pro Display medium",
            color: "#797A91",
            "&.Mui-selected": {
              color: "#fff",
            },
            "&:hover": {
              color: "#ddd",
            },
          }}
          key={item.value}
          value={item.value}
          label={item.label}
        />
      ))}
    </MUITabs>
  );
};

export default Tabs;
