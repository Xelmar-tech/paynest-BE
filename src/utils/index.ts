function replacer(_key: string, value: any) {
  return typeof value === "bigint" ? value.toString() : value;
}

function reviver(_key: string, value: any) {
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

async function withRetry<T>(fn: () => Promise<T>, retries = 3) {
  try {
    return await fn();
  } catch (err) {
    console.log("retrying", retries);
    if (retries <= 0) throw err;
    await new Promise((r) => setTimeout(r, 1000));
    return withRetry(fn, retries - 1);
  }
}

function formatEmailDate(date: Date): string {
  const optionsIntl: Intl.DateTimeFormatOptions = {
    month: "2-digit", // "10"
    day: "2-digit", // "15"
    year: "numeric", // "2025"
    hour: "numeric",
    minute: "2-digit",
  };

  return date.toLocaleString("en-US", optionsIntl);
}

export { replacer, reviver, withRetry, formatEmailDate };
