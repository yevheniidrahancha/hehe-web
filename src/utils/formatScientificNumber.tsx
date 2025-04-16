export const formatScientificNumber = (num: number, chart = false) => {
  if (num >= 1) {
    return num.toFixed(4);
  }

  const fixed = num.toFixed(12);
  const match = fixed.match(/^0\.0*(\d+)/);
  if (!match) return fixed;

  const significantDigits = match[1].slice(0, 4); // первые 4 цифры
  const zeroCount = fixed.split(".")[1].match(/^0*/)?.[0].length || 0;

  if (chart) {
    return `0.${"0".repeat(zeroCount)}${significantDigits}`;
  }

  // Версия с подстрочным числом нулей
  const subscript = [...zeroCount.toString()]
    .map((d) => String.fromCharCode(0x2080 + parseInt(d)))
    .join("");

  return `0.0${subscript}${significantDigits}`;
};
