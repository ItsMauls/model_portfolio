/**
 * Dates in the CV are stored as ISO year-month strings ('2025-09') because
 * that is the precision a CV actually has. Never widen this to a Date at the
 * data layer: constructing one applies a timezone and can shift the month.
 */
export type YearMonth = `${number}-${number}` | string

const MONTH_YEAR: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }

function parse(value: YearMonth): Date {
  const [year, month] = value.split('-')
  // Noon UTC keeps the month stable in every timezone.
  return new Date(Date.UTC(Number(year), Number(month ?? '1') - 1, 1, 12))
}

export function formatYearMonth(value: YearMonth, locale: string): string {
  return new Intl.DateTimeFormat(locale, MONTH_YEAR).format(parse(value))
}

/** 'Sep 2025 - Present' / 'Sep 2025 - Sekarang'. `end` null means current. */
export function formatRange(
  start: YearMonth,
  end: YearMonth | null,
  locale: string,
  presentLabel: string,
): string {
  const from = formatYearMonth(start, locale)
  const to = end ? formatYearMonth(end, locale) : presentLabel
  return `${from} – ${to}`
}

/** Machine-readable value for <time dateTime>. */
export function isoRange(start: YearMonth, end: YearMonth | null): string {
  return end ? `${start}/${end}` : start
}
