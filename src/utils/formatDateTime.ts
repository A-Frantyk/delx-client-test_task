import { format } from 'date-fns';

export function formatDateTime(timestamp: string): string {
  const date = new Date(timestamp);

  return format(date, 'MMMM d, HH:mm');
}
