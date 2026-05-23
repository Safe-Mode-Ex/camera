export const hasProperFilter = (
  filter: string,
  filters: string[],
  filterMap: Record<string, string>,
) => !filters.length || filters.some((filterItem) => filterMap[filterItem] === filter);
