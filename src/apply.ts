
/* IMPORT */

import toCamelCase from './to_camel_case';
import toConstantCase from './to_constant_case';
import toDotCase from './to_dot_case';
import toKebabCase from './to_kebab_case';
import toLowerCase from './to_lower_case';
import toPascalCase from './to_pascal_case';
import toPathCase from './to_path_case';
import toSnakeCase from './to_snake_case';
import toTitleCase from './to_title_case';
import toUpperCase from './to_upper_case';
import type {Casing} from './types';

/* MAIN */

const apply = ( value: string, casing: Casing ): string => {

  if ( casing === 'camel' ) return toCamelCase ( value );
  if ( casing === 'constant' ) return toConstantCase ( value );
  if ( casing === 'dot' ) return toDotCase ( value );
  if ( casing === 'kebab' ) return toKebabCase ( value );
  if ( casing === 'lower' ) return toLowerCase ( value );
  if ( casing === 'pascal' ) return toPascalCase ( value );
  if ( casing === 'path' ) return toPathCase ( value );
  if ( casing === 'snake' ) return toSnakeCase ( value );
  if ( casing === 'title' ) return toTitleCase ( value );
  if ( casing === 'upper' ) return toUpperCase ( value );

  return value;

};

/* EXPORT */

export default apply;
