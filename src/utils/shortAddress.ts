export const shortAddress = (addr: string) =>
  addr.slice(0, 6) + "..." + addr.slice(-4);
