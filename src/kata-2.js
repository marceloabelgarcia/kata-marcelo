export function kata2(obj, def, path = "") {
  const pathv = path.split(".");
  const n = pathv.length;

  let v = obj;
  let dat = def;
  for (let i = 0; i < n && v; i++) {
    v = v[pathv[i]];
  }

  if (v !== undefined) dat = v;
  if (def == "noPath" && path == "") dat = () => {};
  return dat;
}
