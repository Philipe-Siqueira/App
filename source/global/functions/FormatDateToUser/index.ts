
/**
 * Takes a date in database format and converts it to a user-friendly format
 * @param {string} data
 * @returns {string} data
 */
export const FormatDateToUser = (data: string): string => {
  data = data.replace(/\D/g, '');
  data = data.replace(/^(\d{4})(\d{2})(\d{2})/, '$3/$2/$1');
  return data;
}

