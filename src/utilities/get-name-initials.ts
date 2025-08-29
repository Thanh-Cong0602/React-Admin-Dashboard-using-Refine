/**
 * Extracts name initials from a full name string.
 *
 * @param {string} name - The full name string, e.g. "Nguyen Van A".
 * @param {number} [count=2] - The number of initials to return (default = 2).
 * @returns {string} - Uppercase initials containing only alphabetic characters.
 *
 * @example
 * getNameInitials("Nguyen Van A"); // "NV"
 * getNameInitials("John Doe", 1);  // "J"
 * getNameInitials("123 @abc XYZ"); // "AX"
 */

export const getNameInitials = (name: string, count = 2): string => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');
  const filtered = initials.replace(/[^a-zA-Z]/g, '');
  return filtered.slice(0, count).toUpperCase();
};
