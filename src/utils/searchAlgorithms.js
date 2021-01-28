export function binarySearch(sortedArray, value, start, end, searches = 1) {
  const searchStart = start ?? 0;
  const searchEnd = end ?? sortedArray.length - 1;

  if (searchStart > searchEnd) return { index: -1, searches };

  const middleIndex = Math.floor((searchStart + searchEnd) / 2);
  const middleValue = sortedArray[middleIndex];

  if (middleValue === value) {
    return { index: middleIndex, searches };
  }

  if (value < middleValue)
    return binarySearch(
      sortedArray,
      value,
      searchStart,
      middleIndex - 1,
      searches + 1
    );
  if (value > middleValue)
    return binarySearch(
      sortedArray,
      value,
      middleIndex + 1,
      searchEnd,
      searches + 1
    );

  return { index: -1, searches };
}

export function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return { index: i, searches: i + 1 };
  }
  return { index: -1, searches: array.length };
}
