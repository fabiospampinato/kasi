
/* IMPORT */

import toPascalCase from './to_pascal_case';

/* MAIN */

const isPascalCase = ( value: string ): boolean => {

  return value === toPascalCase ( value );

};

/* EXPORT */

export default isPascalCase;
