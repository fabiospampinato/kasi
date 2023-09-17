
/* IMPORT */

import toKebabCase from './to_kebab_case';

/* MAIN */

const isKebabCase = ( value: string ): boolean => {

  return value === toKebabCase ( value );

};

/* EXPORT */

export default isKebabCase;
