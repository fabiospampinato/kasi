
/* IMPORT */

import toUpperCase from './to_upper_case';

/* MAIN */

const isUpperCase = ( value: string ): boolean => {

  return value === toUpperCase ( value );

};

/* EXPORT */

export default isUpperCase;
