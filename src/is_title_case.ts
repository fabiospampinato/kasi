
/* IMPORT */

import toTitleCase from './to_title_case';

/* MAIN */

const isTitleCase = ( value: string ): boolean => {

  return value === toTitleCase ( value );

};

/* EXPORT */

export default isTitleCase;
