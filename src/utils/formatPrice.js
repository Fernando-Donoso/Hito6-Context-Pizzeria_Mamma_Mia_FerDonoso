/**
 * Formatea un número como precio con separador de miles.
 * Ejemplo: 25000 → "25.000"
 *
 * @param {number} value - El valor numérico a formatear
 * @returns {string} - El valor formateado como string
 */
export const formatPrice = (value) => {
  return value.toLocaleString("es-CL");
};
 