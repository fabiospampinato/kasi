
/* IMPORT */

import {describe} from 'fava';
import {isCamelCase, isConstantCase, isKebabCase, isLowerCase, isPascalCase, isSnakeCase, isUpperCase} from '../dist/index.js';
import {toCamelCase, toConstantCase, toKebabCase, toLowerCase, toPascalCase, toSnakeCase, toUpperCase} from '../dist/index.js';
import {apply, copy, detect} from '../dist/index.js';

/* MAIN */

describe ( 'Kasi', it => {

  /* CHECK */

  it ( 'isCamelCase', t => {

    t.is ( isCamelCase ( 'camelCase' ), true );
    t.is ( isCamelCase ( 'CONSTANT_CASE' ), false );
    t.is ( isCamelCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isCamelCase ( 'kebab-case' ), false );
    t.is ( isCamelCase ( 'lowercase' ), true );
    t.is ( isCamelCase ( 'PascalCase' ), false );
    t.is ( isCamelCase ( 'snake_case' ), false );
    t.is ( isCamelCase ( 'UPPERCASE' ), false );
    t.is ( isCamelCase ( 'sYlLyCaSe' ), true );
    t.is ( isCamelCase ( 'SyLlYcAsE' ), false );
    t.is ( isCamelCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isConstantCase', t => {

    t.is ( isConstantCase ( 'camelCase' ), false );
    t.is ( isConstantCase ( 'CONSTANT_CASE' ), true );
    t.is ( isConstantCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isConstantCase ( 'kebab-case' ), false );
    t.is ( isConstantCase ( 'lowercase' ), false );
    t.is ( isConstantCase ( 'PascalCase' ), false );
    t.is ( isConstantCase ( 'snake_case' ), false );
    t.is ( isConstantCase ( 'UPPERCASE' ), true );
    t.is ( isConstantCase ( 'sYlLyCaSe' ), false );
    t.is ( isConstantCase ( 'SyLlYcAsE' ), false );
    t.is ( isConstantCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isKebabCase', t => {

    t.is ( isKebabCase ( 'camelCase' ), false );
    t.is ( isKebabCase ( 'CONSTANT_CASE' ), false );
    t.is ( isKebabCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isKebabCase ( 'kebab-case' ), true );
    t.is ( isKebabCase ( 'lowercase' ), true );
    t.is ( isKebabCase ( 'PascalCase' ), false );
    t.is ( isKebabCase ( 'snake_case' ), false );
    t.is ( isKebabCase ( 'UPPERCASE' ), false );
    t.is ( isKebabCase ( 'sYlLyCaSe' ), false );
    t.is ( isKebabCase ( 'SyLlYcAsE' ), false );
    t.is ( isKebabCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isLowerCase', t => {

    t.is ( isLowerCase ( 'camelCase' ), false );
    t.is ( isLowerCase ( 'CONSTANT_CASE' ), false );
    t.is ( isLowerCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isLowerCase ( 'kebab-case' ), true );
    t.is ( isLowerCase ( 'lowercase' ), true );
    t.is ( isLowerCase ( 'PascalCase' ), false );
    t.is ( isLowerCase ( 'snake_case' ), true );
    t.is ( isLowerCase ( 'UPPERCASE' ), false );
    t.is ( isLowerCase ( 'sYlLyCaSe' ), false );
    t.is ( isLowerCase ( 'SyLlYcAsE' ), false );
    t.is ( isLowerCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isPascalCase', t => {

    t.is ( isPascalCase ( 'camelCase' ), false );
    t.is ( isPascalCase ( 'CONSTANT_CASE' ), false );
    t.is ( isPascalCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isPascalCase ( 'kebab-case' ), false );
    t.is ( isPascalCase ( 'lowercase' ), false );
    t.is ( isPascalCase ( 'PascalCase' ), true );
    t.is ( isPascalCase ( 'snake_case' ), false );
    t.is ( isPascalCase ( 'UPPERCASE' ), false );
    t.is ( isPascalCase ( 'sYlLyCaSe' ), false );
    t.is ( isPascalCase ( 'SyLlYcAsE' ), true );
    t.is ( isPascalCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isSnakeCase', t => {

    t.is ( isSnakeCase ( 'camelCase' ), false );
    t.is ( isSnakeCase ( 'CONSTANT_CASE' ), false );
    t.is ( isSnakeCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isSnakeCase ( 'kebab-case' ), false );
    t.is ( isSnakeCase ( 'lowercase' ), true );
    t.is ( isSnakeCase ( 'PascalCase' ), false );
    t.is ( isSnakeCase ( 'snake_case' ), true );
    t.is ( isSnakeCase ( 'UPPERCASE' ), false );
    t.is ( isSnakeCase ( 'sYlLyCaSe' ), false );
    t.is ( isSnakeCase ( 'SyLlYcAsE' ), false );
    t.is ( isSnakeCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isUpperCase', t => {

    t.is ( isUpperCase ( 'camelCase' ), false );
    t.is ( isUpperCase ( 'CONSTANT_CASE' ), true );
    t.is ( isUpperCase ( 'SCREAMING-KEBAB' ), true );
    t.is ( isUpperCase ( 'kebab-case' ), false );
    t.is ( isUpperCase ( 'lowercase' ), false );
    t.is ( isUpperCase ( 'PascalCase' ), false );
    t.is ( isUpperCase ( 'snake_case' ), false );
    t.is ( isUpperCase ( 'UPPERCASE' ), true );
    t.is ( isUpperCase ( 'sYlLyCaSe' ), false );
    t.is ( isUpperCase ( 'SyLlYcAsE' ), false );
    t.is ( isUpperCase ( '  multi UPPER word  ' ), false );

  });

  /* CONVERT */

  it ( 'toCamelCase', t => {

    t.is ( toCamelCase ( 'camelCase' ), 'camelCase' );
    t.is ( toCamelCase ( 'CONSTANT_CASE' ), 'constantCase' );
    t.is ( toCamelCase ( 'SCREAMING-KEBAB' ), 'screamingKebab' );
    t.is ( toCamelCase ( 'kebab-case' ), 'kebabCase' );
    t.is ( toCamelCase ( 'lowercase' ), 'lowercase' );
    t.is ( toCamelCase ( 'PascalCase' ), 'pascalCase' );
    t.is ( toCamelCase ( 'snake_case' ), 'snakeCase' );
    t.is ( toCamelCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toCamelCase ( 'sYlLyCaSe' ), 'sYlLyCaSe' );
    t.is ( toCamelCase ( 'SyLlYcAsE' ), 'syLlYcAsE' );
    t.is ( toCamelCase ( '  multi UPPER word  ' ), 'multiUpperWord' );

  });

  it ( 'toConstantCase', t => {

    t.is ( toConstantCase ( 'camelCase' ), 'CAMEL_CASE' );
    t.is ( toConstantCase ( 'CONSTANT_CASE' ), 'CONSTANT_CASE' );
    t.is ( toConstantCase ( 'SCREAMING-KEBAB' ), 'SCREAMING_KEBAB' );
    t.is ( toConstantCase ( 'kebab-case' ), 'KEBAB_CASE' );
    t.is ( toConstantCase ( 'lowercase' ), 'LOWERCASE' );
    t.is ( toConstantCase ( 'PascalCase' ), 'PASCAL_CASE' );
    t.is ( toConstantCase ( 'snake_case' ), 'SNAKE_CASE' );
    t.is ( toConstantCase ( 'UPPERCASE' ), 'UPPERCASE' );
    t.is ( toConstantCase ( 'sYlLyCaSe' ), 'S_YL_LY_CA_SE' );
    t.is ( toConstantCase ( 'SyLlYcAsE' ), 'SY_LL_YC_AS_E' );
    t.is ( toConstantCase ( '  multi UPPER word  ' ), 'MULTI_UPPER_WORD' );

  });

  it ( 'toKebabCase', t => {

    t.is ( toKebabCase ( 'camelCase' ), 'camel-case' );
    t.is ( toKebabCase ( 'CONSTANT_CASE' ), 'constant-case' );
    t.is ( toKebabCase ( 'SCREAMING-KEBAB' ), 'screaming-kebab' );
    t.is ( toKebabCase ( 'kebab-case' ), 'kebab-case' );
    t.is ( toKebabCase ( 'lowercase' ), 'lowercase' );
    t.is ( toKebabCase ( 'PascalCase' ), 'pascal-case' );
    t.is ( toKebabCase ( 'snake_case' ), 'snake-case' );
    t.is ( toKebabCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toKebabCase ( 'sYlLyCaSe' ), 's-yl-ly-ca-se' );
    t.is ( toKebabCase ( 'SyLlYcAsE' ), 'sy-ll-yc-as-e' );
    t.is ( toKebabCase ( '  multi UPPER word  ' ), 'multi-upper-word' );

  });

  it ( 'toLowerCase', t => {

    t.is ( toLowerCase ( 'camelCase' ), 'camelcase' );
    t.is ( toLowerCase ( 'CONSTANT_CASE' ), 'constant_case' );
    t.is ( toLowerCase ( 'SCREAMING-KEBAB' ), 'screaming-kebab' );
    t.is ( toLowerCase ( 'kebab-case' ), 'kebab-case' );
    t.is ( toLowerCase ( 'lowercase' ), 'lowercase' );
    t.is ( toLowerCase ( 'PascalCase' ), 'pascalcase' );
    t.is ( toLowerCase ( 'snake_case' ), 'snake_case' );
    t.is ( toLowerCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toLowerCase ( 'sYlLyCaSe' ), 'syllycase' );
    t.is ( toLowerCase ( 'SyLlYcAsE' ), 'syllycase' );
    t.is ( toLowerCase ( '  multi UPPER word  ' ), '  multi upper word  ' );

  });

  it ( 'toPascalCase', t => {

    t.is ( toPascalCase ( 'camelCase' ), 'CamelCase' );
    t.is ( toPascalCase ( 'CONSTANT_CASE' ), 'ConstantCase' );
    t.is ( toPascalCase ( 'SCREAMING-KEBAB' ), 'ScreamingKebab' );
    t.is ( toPascalCase ( 'kebab-case' ), 'KebabCase' );
    t.is ( toPascalCase ( 'lowercase' ), 'Lowercase' );
    t.is ( toPascalCase ( 'PascalCase' ), 'PascalCase' );
    t.is ( toPascalCase ( 'snake_case' ), 'SnakeCase' );
    t.is ( toPascalCase ( 'UPPERCASE' ), 'Uppercase' );
    t.is ( toPascalCase ( 'sYlLyCaSe' ), 'SYlLyCaSe' );
    t.is ( toPascalCase ( 'SyLlYcAsE' ), 'SyLlYcAsE' );
    t.is ( toPascalCase ( '  multi UPPER word  ' ), 'MultiUpperWord' );

  });

  it ( 'toSnakeCase', t => {

    t.is ( toSnakeCase ( 'camelCase' ), 'camel_case' );
    t.is ( toSnakeCase ( 'CONSTANT_CASE' ), 'constant_case' );
    t.is ( toSnakeCase ( 'SCREAMING-KEBAB' ), 'screaming_kebab' );
    t.is ( toSnakeCase ( 'kebab-case' ), 'kebab_case' );
    t.is ( toSnakeCase ( 'lowercase' ), 'lowercase' );
    t.is ( toSnakeCase ( 'PascalCase' ), 'pascal_case' );
    t.is ( toSnakeCase ( 'snake_case' ), 'snake_case' );
    t.is ( toSnakeCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toSnakeCase ( 'sYlLyCaSe' ), 's_yl_ly_ca_se' );
    t.is ( toSnakeCase ( 'SyLlYcAsE' ), 'sy_ll_yc_as_e' );
    t.is ( toSnakeCase ( '  multi UPPER word  ' ), 'multi_upper_word' );

  });

  it ( 'toUpperCase', t => {

    t.is ( toUpperCase ( 'camelCase' ), 'CAMELCASE' );
    t.is ( toUpperCase ( 'CONSTANT_CASE' ), 'CONSTANT_CASE' );
    t.is ( toUpperCase ( 'SCREAMING-KEBAB' ), 'SCREAMING-KEBAB' );
    t.is ( toUpperCase ( 'kebab-case' ), 'KEBAB-CASE' );
    t.is ( toUpperCase ( 'lowercase' ), 'LOWERCASE' );
    t.is ( toUpperCase ( 'PascalCase' ), 'PASCALCASE' );
    t.is ( toUpperCase ( 'snake_case' ), 'SNAKE_CASE' );
    t.is ( toUpperCase ( 'UPPERCASE' ), 'UPPERCASE' );
    t.is ( toUpperCase ( 'sYlLyCaSe' ), 'SYLLYCASE' );
    t.is ( toUpperCase ( 'SyLlYcAsE' ), 'SYLLYCASE' );
    t.is ( toUpperCase ( '  multi UPPER word  ' ), '  MULTI UPPER WORD  ' );

  });

  /* EXTRA */

  it ( 'apply', t => {

    t.is ( apply ( 'some EXAMPLE', 'camel' ), 'someExample' );
    t.is ( apply ( 'some EXAMPLE', 'constant' ), 'SOME_EXAMPLE' );
    t.is ( apply ( 'some EXAMPLE', 'kebab' ), 'some-example' );
    t.is ( apply ( 'some EXAMPLE', 'lower' ), 'some example' );
    t.is ( apply ( 'some EXAMPLE', 'pascal' ), 'SomeExample' );
    t.is ( apply ( 'some EXAMPLE', 'snake' ), 'some_example' );
    t.is ( apply ( 'some EXAMPLE', 'unknown' ), 'some EXAMPLE' );
    t.is ( apply ( 'some EXAMPLE', 'upper' ), 'SOME EXAMPLE' );

  });

  it ( 'copy', t => {

    t.is ( copy ( 'sIlLy', 'lions' ), 'lIoNs' );
    t.is ( copy ( 'SiLlY', 'lions' ), 'LiOnS' );

  });

  it ( 'detect', t => {

    t.is ( detect ( 'camelCase' ), 'camel' );
    t.is ( detect ( 'CONSTANT_CASE' ), 'constant' );
    t.is ( detect ( 'SCREAMING-KEBAB' ), 'upper' );
    t.is ( detect ( 'kebab-case' ), 'kebab' );
    t.is ( detect ( 'lowercase' ), 'lower' );
    t.is ( detect ( 'PascalCase' ), 'pascal' );
    t.is ( detect ( 'snake_case' ), 'snake' );
    t.is ( detect ( 'UPPERCASE' ), 'upper' );
    t.is ( detect ( 'sYlLyCaSe' ), 'camel' );
    t.is ( detect ( 'SyLlYcAsE' ), 'pascal' );
    t.is ( detect ( '  multi UPPER word  ' ), 'unknown' );

  });

});
