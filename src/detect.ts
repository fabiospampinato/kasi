
/* MAIN */

import isCamelCase from './is_camel_case';
import isConstantCase from './is_constant_case';
import isDotCase from './is_dot_case';
import isKebabCase from './is_kebab_case';
import isLowerCase from './is_lower_case';
import isPascalCase from './is_pascal_case';
import isPathCase from './is_path_case';
import isSnakeCase from './is_snake_case';
import isTitleCase from './is_title_case';
import isUpperCase from './is_upper_case';
import type {Casing} from './types';

/* MAIN */

const detect = ( value: string ): Casing => {

  if ( value.length ) {

    if ( !/\s/.test ( value ) ) {

      if ( value.includes ( '-' ) ) {

        if ( isKebabCase ( value ) ) return 'kebab';

      } else if ( value.includes ( '_' ) ) {

        if ( isSnakeCase ( value ) ) return 'snake';

        if ( isConstantCase ( value ) ) return 'constant';

      } else if ( value.includes ( '.' ) ) {

        if ( isDotCase ( value ) ) return 'dot';

      } else if ( value.includes ( '/' ) ) {

        if ( isPathCase ( value ) ) return 'path';

      }

      if ( isUpperCase ( value[0] ) ) {

        if ( isUpperCase ( value ) ) return 'upper';

        if ( isPascalCase ( value ) ) return 'pascal';

      }

      if ( isLowerCase ( value ) ) return 'lower';

      if ( isCamelCase ( value ) ) return 'camel';

    } else {

      if ( isTitleCase ( value ) ) return 'title';

    }

  }

  return 'unknown';

};

/* EXPORT */

export default detect;
