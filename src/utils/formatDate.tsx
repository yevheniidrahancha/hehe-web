export const formatDate = (ms: number) => {
  const date = new Date(ms);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const time = date.toTimeString().slice(0, 8);

  return (
    <>
      <span style={{ color: "#6AB67C" }}>{`${day}${month}`}</span> {time}
    </>
  );
};

export const formatDateWithDDMMYYTime = (date: number | string) => {
  const dateValue = new Date(
    typeof date === "string" ? Date.parse(date) : date
  );

  const formattedDate = dateValue.toLocaleDateString("ru-RU");
  const formattedTime = dateValue.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <span>
      <span style={{ color: "#6AB67C" }}>{formattedDate}</span> {formattedTime}
    </span>
  );
};
