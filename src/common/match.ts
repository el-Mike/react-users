export const match = (haystack: string, needle: string) => {
  if (!needle || needle.length === 0) {
    return true;
  }

  return haystack.match(new RegExp(needle, 'i'));
};
