function replacer(key: string, value: any) {
  return typeof value === "bigint" ? value.toString() : value;
}

function reviver(key: string, value: any) {
  // try to parse as BigInt if it looks like a bigint
  if (typeof value === "string" && /^\d+$/.test(value)) {
    try {
      return BigInt(value);
    } catch {
      return value;
    }
  }
  return value;
}

export { replacer, reviver };
