
/* IMPORT */

import toCamelCase from './to_camel_case';

/* MAIN */

const isCamelCase = ( value: string ): boolean => {

  return value === toCamelCase ( value );

};

/* EXPORT */

export default isCamelCase;
