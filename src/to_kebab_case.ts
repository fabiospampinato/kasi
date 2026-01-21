
/* IMPORT */

import toLowerCase from './to_lower_case';

/* MAIN */

const toKebabCase = ( value: string ): string => {

  return toLowerCase ( value ).replaceAll ( ' ', '-' );

};

/* EXPORT */

export default toKebabCase;
