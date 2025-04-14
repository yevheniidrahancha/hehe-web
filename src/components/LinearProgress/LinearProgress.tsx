import {
  LinearProgress as MUILinearProgress,
  linearProgressClasses,
  styled,
} from "@mui/material";

const StylesLinearProgress = styled(MUILinearProgress)(() => ({
  height: 4,
  borderRadius: 999,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#34374C",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 999,
    backgroundColor: "#6AB67C",
  },
}));

interface LinearProgressProps {
  value: number;
}

const LinearProgress = ({ value }: LinearProgressProps) => {
  return <StylesLinearProgress variant="determinate" value={value} />;
};

export default LinearProgress;
