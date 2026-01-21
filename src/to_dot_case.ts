
/* IMPORT */

import toLowerCase from './to_lower_case';

/* MAIN */

const toDotCase = ( value: string ): string => {

  return toLowerCase ( value ).replaceAll ( ' ', '.' );

};

/* EXPORT */

export default toDotCase;
