const formatNum = num => {
  // Need to default to string 00 since will get undefined if user does not enter a decimal number
  const [int, dec = "00"] = String(num).split(".");
  let formatedNumber = int
    .split("")
    // Filter out - for algorithm to correctly work for negative numbers
    .filter(x => x !== "-")
    // Need to reverse int for algorithm to correctly work
    .reverse()
    // If index of reversed interger is divisible by 3 and it is not a 0 add comma.
    .map((a, b) => (b % 3 === 0 && b !== 0 ? a + "," : a))
    // Revese back to original format
    .reverse()
    // Join to string
    .join("")
    // Join decimal number with dot
    .concat(".", dec.slice(0, 2));
  // Add - if number is negative, otherwise default to original formatedNumber
  return num >= 0 ? formatedNumber : "-" + formatedNumber;
};

export default formatNum;
