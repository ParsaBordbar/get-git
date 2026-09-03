export function asset(path: string) {
  return path.replace(/^\.\//, import.meta.env.BASE_URL);
}
