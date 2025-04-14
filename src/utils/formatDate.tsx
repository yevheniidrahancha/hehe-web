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
