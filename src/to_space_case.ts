
/* HELPERS */

const separatorRe = /[.:/_-]/g;
const splitRe = /(^|[a-z ])([A-Z]+)(?=([a-z])?)/g;

/* MAIN */

const toSpaceCase = ( value: string ): string => {

  return value.replace ( separatorRe, ' ' ).replace ( splitRe, ( _, $1, $2, $3 ) => $3 && $2.length > 1 ? `${$1.trim ()} ${$2.slice ( 0, -1 )} ${$2.slice ( -1 )}` : `${$1.trim ()} ${$2}` ).trim ();

};

/* EXPORT */

export default toSpaceCase;
