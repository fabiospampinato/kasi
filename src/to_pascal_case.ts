
/* IMPORT */

import toSpaceCase from './to_space_case';

/* HELPERS */

const upperRe = /(?:^|\s)(\w)/g;

/* MAIN */

const toPascalCase = ( value: string ): string => {

  return toSpaceCase ( value ).replace ( upperRe, ( _, char ) => char.toUpperCase () );

};

/* EXPORT */

export default toPascalCase;
