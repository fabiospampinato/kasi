
/* IMPORT */

import toSpaceCase from './to_space_case';

/* MAIN */

const toConstantCase = ( value: string ): string => {

  return toSpaceCase ( value ).replaceAll ( ' ', '_' ).toUpperCase ();

};

/* EXPORT */

export default toConstantCase;
