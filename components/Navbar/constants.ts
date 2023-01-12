enum navIcon {
  HOME,
  BLOG,
  ABOUT,
}

// @TODO define use-case else where
function titleCase(str: string) {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}

export const Navigator = Object.keys(navIcon)
  .map((icon) => titleCase(icon))
  .filter((val) => {
    return isNaN(Number(val));
  });
