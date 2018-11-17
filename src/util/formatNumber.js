const formatNum = num => {
  // Need to default to string 00 since will get undefined if user does not enter a decimal number
  const [int, dec = "00"] = String(num).split(".");
  return (
    int
      .split("")
      .reverse()
      // If index of reversed interger is divisible by 3 and it is not a 0 add comma.
      .map((a, b) => (b % 3 === 0 && b !== 0 ? a + "," : a))
      .reverse()
      .join("")
      // Join decimal number with dot
      .concat(".", dec)
  );
};

export default formatNum;
