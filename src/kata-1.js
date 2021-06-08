export function kata1(number) {
  const s = number.toString();
  const v = s.split("");
  return v.sort().reverse().join("");
}
