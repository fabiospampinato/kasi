
/* IMPORT */

import toLowerCase from './to_lower_case';

/* MAIN */

const toSnakeCase = ( value: string ): string => {

  return toLowerCase ( value ).replaceAll ( ' ', '_' );

};

/* EXPORT */

export default toSnakeCase;
