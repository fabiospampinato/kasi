
/* IMPORT */

import toLowerCase from './to_lower_case';

/* MAIN */

const toPathCase = ( value: string ): string => {

  return toLowerCase ( value ).replaceAll ( ' ', '/' );

};

/* EXPORT */

export default toPathCase;
