
/* IMPORT */

import toSpaceCase from './to_space_case';

/* MAIN */

const toSnakeCase = ( value: string ): string => {

  return toSpaceCase ( value ).replaceAll ( ' ', '_' );

};

/* EXPORT */

export default toSnakeCase;
