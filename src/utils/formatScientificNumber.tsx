export const formatScientificNumber = (num: number, chart = false) => {
  if (num >= 1) {
    return num.toFixed(4);
  }

  const decimalString = num.toFixed(10).replace(/0+$/, "");
  const [integerPart, decimalPart] = decimalString.split(".");

  if (!decimalPart) return integerPart;

  const leadingZerosMatch = decimalPart.match(/^0+/);
  const leadingZerosCount = leadingZerosMatch ? leadingZerosMatch[0].length : 0;

  const significantDigits = decimalPart.slice(
    leadingZerosCount,
    leadingZerosCount + 4
  );

  if (chart) {
    return `0.${"0".repeat(leadingZerosCount)}${significantDigits}`;
  }

  return `0.0<sub>${leadingZerosCount}</sub>${significantDigits}`;
};
export const renderFormattedNumber = (num: number) => {
  const formattedString = formatScientificNumber(num, false);

  return formattedString
    .split(/(<sub>\d+<\/sub>)/g)
    .map((part, index) =>
      part.startsWith("<sub>") ? (
        <sub key={index}>{part.replace(/<\/?sub>/g, "")}</sub>
      ) : (
        <span key={index}>{part}</span>
      )
    );
};
