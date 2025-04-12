import StatisticsCard from "./StatisticsCard/StatisticsCard";
import "./styles.scss";

const baseClassName = "statistics";

const data = [
  {
    title: "Partners",
    value: "0",
    note: "0",
  },
  {
    title: "Team",
    value: "0",
    note: "0",
  },
  {
    title: "Rewards",
    value: "0%",
    note: "0.00%",
  },
];

const Statistics = () => {
  return (
    <div className={baseClassName}>
      {data.map((item, index) => {
        return (
          <StatisticsCard
            key={index}
            title={item.title}
            value={item.value}
            note={item.note}
          />
        );
      })}
    </div>
  );
};

export default Statistics;
