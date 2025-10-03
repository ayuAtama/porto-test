// watermark.js
const MESSAGE = `
 ____            
|  _ \\ _ __ __ _ 
| |_) | '__/ _' |
|  __/| | | (_| |
|_|   |_|  \\__,_|
Hi there! If you're seeing this message, you're real man of culture!
`;

export const notifyConsole = () => {
  if (typeof window !== "undefined" && typeof console.log === "function") {
    console.log(MESSAGE);
  }
};
