
/* IMPORT */

import toSpaceCase from './to_space_case';

/* MAIN */

const toKebabCase = ( value: string ): string => {

  return toSpaceCase ( value ).replaceAll ( ' ', '-' );

};

/* EXPORT */

export default toKebabCase;
