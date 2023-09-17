
/* HELPERS */

const splitRe = /([a-z])([A-Z]+)|([.:_-])/g;

/* MAIN */

const toSpaceCase = ( value: string ): string => {

  return value.replace ( splitRe, '$1 $2' ).toLowerCase ().trim ();

};

/* EXPORT */

export default toSpaceCase;
