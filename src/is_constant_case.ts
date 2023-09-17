
/* IMPORT */

import toConstantCase from './to_constant_case';

/* MAIN */

const isConstantCase = ( value: string ): boolean => {

  return value === toConstantCase ( value );

};

/* EXPORT */

export default isConstantCase;
