export function max(values) {
  if (values.length === 0) return null;
  return values.reduce((largest, value) =>
    value > largest ? value : largest
  );
}
