
/* IMPORT */

import toUpperCase from './to_upper_case';

/* MAIN */

const toConstantCase = ( value: string ): string => {

  return toUpperCase ( value ).replaceAll ( ' ', '_' );

};

/* EXPORT */

export default toConstantCase;
