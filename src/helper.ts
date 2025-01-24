export function isSubset<T>({
  subset,
  superset,
}: {
  subset: Set<T>;
  superset: Set<T>;
}): boolean {
  return [...subset].every((item) => superset.has(item));
}
