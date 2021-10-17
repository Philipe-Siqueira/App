/**
 * Receive an object and an array e return an object without array values
 * @param {object} object 
 * @param {string} [omitArray] 
 * @returns {object}
 */
 export const OmitObjectItens = (object: object, omitArray: Array<string>): object => {
  return Object.fromEntries(
    Object.entries(object)
    .filter((value) => !omitArray.includes(value[0]))
  );
}
