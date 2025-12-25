export const sendContactForm = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", data);
      resolve({ success: true });
    }, 1000);
  });
};
