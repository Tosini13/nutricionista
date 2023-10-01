export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });
