
/* IMPORT */

import toLowerCase from './to_lower_case';

/* HELPERS */

const upperRe = /\s(\w)/g;

/* MAIN */

const toCamelCase = ( value: string ): string => {

  return toLowerCase ( value ).replace ( upperRe, ( _, char ) => char.toUpperCase () );

};

/* EXPORT */

export default toCamelCase;
