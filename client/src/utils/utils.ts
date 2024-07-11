export function formatDate(isoString: string) {
  const date = new Date(isoString);

  // Formatting options for date and time separately
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = date.toLocaleDateString('en-US', dateOptions);
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  // Concatenating date and time with a dash separator
  return `${formattedDate} - ${formattedTime}`;
}

