
/* HELPERS */

const splitRe = /([a-z])([A-Z]+)(?=([a-z])?)|([.:/_-])/g;

/* MAIN */

const toSpaceCase = ( value: string ): string => {

  return value.replace ( splitRe, ( _, $1, $2, $3, $4 ) => $4 ? ' ' : $3 && $2.length > 1 ? `${$1} ${$2.slice ( 0, -1 )} ${$2.slice ( -1 )}` : `${$1} ${$2}` ).toLowerCase ().trim ();

};

/* EXPORT */

export default toSpaceCase;
