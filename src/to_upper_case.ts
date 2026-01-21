
/* IMPORT */

import toSpaceCase from './to_space_case';

/* MAIN */

const toUpperCase = ( value: string ): string => {

  return toSpaceCase ( value ).toUpperCase ();

};

/* EXPORT */

export default toUpperCase;
