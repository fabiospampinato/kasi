
/* IMPORT */

import toPathCase from './to_path_case';

/* MAIN */

const isPathCase = ( value: string ): boolean => {

  return value === toPathCase ( value );

};

/* EXPORT */

export default isPathCase;
