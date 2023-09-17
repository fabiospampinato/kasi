
/* IMPORT */

import toLowerCase from './to_lower_case';

/* MAIN */

const isLowerCase = ( value: string ): boolean => {

  return value === toLowerCase ( value );

};

/* EXPORT */

export default isLowerCase;
