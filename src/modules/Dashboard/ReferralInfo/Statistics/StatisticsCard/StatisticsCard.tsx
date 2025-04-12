import "./styles.scss";

const baseClassName = "statisticsCard";

interface StatisticsCardProps {
  title: string;
  value: string;
  note: string;
}

const StatisticsCard = ({ title, value, note }: StatisticsCardProps) => {
  return (
    <div className={baseClassName}>
      <p className={`${baseClassName}__title`}>{title}</p>
      <p className={`${baseClassName}__value`}>
        {value}
        <span className={`${baseClassName}__note`}>+{note}</span>
      </p>
    </div>
  );
};

export default StatisticsCard;
