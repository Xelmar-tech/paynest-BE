export function formatEmailDate(date: Date, style: "short" | "compact" | "long" = "short"): string {
  const optionsIntl: Intl.DateTimeFormatOptions =
    style === "short"
      ? {
          month: "2-digit", // "10"
          day: "2-digit", // "15"
          year: "numeric", // "2025"
          hour: "numeric",
          minute: "2-digit",
        }
      : style === "compact"
      ? {
          month: "short", // "Oct"
          day: "numeric", // "15"
          year: "numeric", // "2025"
          hour: "numeric",
          minute: "2-digit",
        }
      : {
          weekday: "long", // "Tuesday"
          month: "long", // "October"
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        };

  return date.toLocaleString("en-US", optionsIntl);
}
