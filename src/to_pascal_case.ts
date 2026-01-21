
/* IMPORT */

import toLowerCase from './to_lower_case';

/* HELPERS */

const upperRe = /(?:^|\s)(\w)/g;

/* MAIN */

const toPascalCase = ( value: string ): string => {

  return toLowerCase ( value ).replace ( upperRe, ( _, char ) => char.toUpperCase () );

};

/* EXPORT */

export default toPascalCase;
