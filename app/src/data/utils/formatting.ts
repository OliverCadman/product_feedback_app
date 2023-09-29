const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
};

export const formatString = (string: string) => {
  const splitString: string[] = string.split(/-/g);
  if (splitString.length > 1) {
    return splitString
      .map((string: string) => {
        return capitalize(string);
      })
      .join(" ");
  }

  return capitalize(string);
};
