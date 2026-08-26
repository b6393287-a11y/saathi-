/**
 * Convert current time to a specific timezone
 * @param date - Date object to convert
 * @param timeZone - IANA timezone string (e.g., 'America/New_York')
 * @returns Date object adjusted to the timezone
 */
export function getTimeInTimeZone(date: Date, timeZone: string): Date {
  try {
    // Use toLocaleString with timezone option
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: timeZone,
    });

    const parts = formatter.formatToParts(date);
    const dateObj: { [key: string]: string } = {};

    parts.forEach(part => {
      dateObj[part.type] = part.value;
    });

    // Reconstruct the date object
    const tzDate = new Date(
      parseInt(dateObj.year),
      parseInt(dateObj.month) - 1,
      parseInt(dateObj.day),
      parseInt(dateObj.hour),
      parseInt(dateObj.minute),
      parseInt(dateObj.second)
    );

    return tzDate;
  } catch (error) {
    console.error(`Invalid timezone: ${timeZone}`, error);
    return date;
  }
}

/**
 * Get timezone offset from UTC in minutes
 * @param date - Date object
 * @param timeZone - IANA timezone string
 * @returns Offset in minutes from UTC
 */
export function getTimezoneOffset(date: Date, timeZone: string): number {
  try {
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone }));
    return Math.round((utcDate.getTime() - tzDate.getTime()) / (1000 * 60));
  } catch (error) {
    console.error(`Invalid timezone: ${timeZone}`, error);
    return 0;
  }
}

/**
 * Format time difference between two timezones
 * @param offset1 - Offset in minutes for timezone 1
 * @param offset2 - Offset in minutes for timezone 2
 * @returns Formatted time difference string
 */
export function getTimeDifference(offset1: number, offset2: number): string {
  const diff = Math.abs(offset1 - offset2);
  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;

  if (hours === 0 && minutes === 0) return 'Same time';
  if (hours === 0) return `${minutes}m difference`;
  if (minutes === 0) return `${hours}h difference`;
  return `${hours}h ${minutes}m difference`;
}
