export const EXPERIENCE_PAGE_SIZE = 6;

export function totalPages(total: number, pageSize = EXPERIENCE_PAGE_SIZE) {
  return Math.max(1, Math.ceil(total / pageSize));
}

export function pageSlice<T>(items: T[], page: number, pageSize = EXPERIENCE_PAGE_SIZE) {
  const safePage = Math.max(1, page);
  const start = (safePage - 1) * pageSize;
  return items.slice(start, start + pageSize);
}
