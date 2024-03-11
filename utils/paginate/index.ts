export const paginate = <T>(
  items: T[],
  pageNumber: number,
  pageSize: number,
) => {
  const startIndex = (pageNumber - 1) * pageSize
  const paginatedItems = items.slice(startIndex, startIndex + pageSize)
  return {
    items: paginatedItems,
    startIndex:
      startIndex === 0 && paginatedItems.length === 0 ? 0 : startIndex + 1,
    endIndex:
      startIndex +
      (paginatedItems.length < pageSize ? paginatedItems.length : pageSize),
  }
}
