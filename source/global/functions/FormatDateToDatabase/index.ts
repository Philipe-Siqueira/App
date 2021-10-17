/**
 * Takes a date in string format and converts it to
 * the format used in the database
 * @param {string} data 
 * @returns {string} data
 */
export const FormatDateToDatabase = (data: string): string => {
  data = data.replace(/\D/g, '');
  data = data.replace(/^(\d{2})(\d{2})(\d{4})/, '$3-$2-$1');
  return data;
}
