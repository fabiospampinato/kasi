
/* IMPORT */

import toSnakeCase from './to_snake_case';

/* MAIN */

const isSnakeCase = ( value: string ): boolean => {

  return value === toSnakeCase ( value );

};

/* EXPORT */

export default isSnakeCase;
