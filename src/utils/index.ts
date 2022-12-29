export const compareOnTheBasisOfName = (
  elemA: Record<string, string> | string,
  elemB: Record<string, string> | string,
  fieldName: string,
  desc?: boolean,
) => {
  const fieldA = fieldName
    ? String((elemA as Record<string, string>)[fieldName]).toUpperCase()
    : (elemA as string).toUpperCase();
  const fieldB = fieldName
    ? String((elemB as Record<string, string>)[fieldName]).toUpperCase()
    : (elemB as string).toUpperCase();
  if (desc) {
    if (fieldA > fieldB) return -1;
    else if (fieldA < fieldB) return 1;
  } else {
    if (fieldA < fieldB) return -1;
    else if (fieldA > fieldB) return 1;
  }

  return 0;
};

export const doesStringAincludesB = (stringA: string, stringB: string) => {
  return stringA.toLowerCase().includes(stringB.toLowerCase());
};
