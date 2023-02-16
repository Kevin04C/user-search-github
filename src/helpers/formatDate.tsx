export const formatDate = (date: string): string => {
  const newDate = new Date(date);

  return newDate.toLocaleDateString("EN-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
