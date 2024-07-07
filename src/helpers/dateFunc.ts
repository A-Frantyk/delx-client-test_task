export const getFormattedDateTime = (date: Date) => {
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, "0")}.${minutes
    .toString()
    .padStart(2, "0")}`;

  return `${month} ${day}, ${formattedTime}`;
};
