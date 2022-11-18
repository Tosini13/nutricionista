export const copyToBilboard =
  <T>(value: string) =>
  async (e: React.MouseEvent<T, MouseEvent>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
    } catch (e) {
      console.error("error", e);
    }
  };
