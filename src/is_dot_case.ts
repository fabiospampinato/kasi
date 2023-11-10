
/* IMPORT */

import toDotCase from './to_dot_case';

/* MAIN */

const isDotCase = ( value: string ): boolean => {

  return value === toDotCase ( value );

};

/* EXPORT */

export default isDotCase;
