export function pxToRem(px: number): string {
  return px / 16 + "rem";
}
export function formatNumbers(num: number): string {
  const splittedNums = String(num).split("").reverse();
  for (let i = 0; i < splittedNums.length; i += 4) {
    splittedNums.splice(i, 0, ",");
  }
  splittedNums.shift();
  return splittedNums.reverse().join("");
}

export const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export function getFormattedLink(link: string): string {
  return link.split(" ").join("-").replace(/[,':.$@!%^*]/, "");
}
