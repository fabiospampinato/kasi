
/* IMPORT */

import toSpaceCase from './to_space_case';

/* MAIN */

const toPathCase = ( value: string ): string => {

  return toSpaceCase ( value ).replaceAll ( ' ', '/' );

};

/* EXPORT */

export default toPathCase;
