export const setAutomaticMessageContent = (message: string) => {
  const textarea = document.getElementById("content");
  if (textarea) {
    textarea.textContent = message;
  }
};
