
/* IMPORT */

import benchmark from 'benchloop';
import {isCamelCase, isConstantCase, isKebabCase, isLowerCase, isPascalCase, isSnakeCase, isUpperCase} from '../dist/index.js';
import {toCamelCase, toConstantCase, toKebabCase, toLowerCase, toPascalCase, toSnakeCase, toUpperCase} from '../dist/index.js';
import {copy, detect} from '../dist/index.js';

/* HELPERS */

const FIXTURES = ['camelCase', 'CONSTANT_CASE', 'SCREAMING-KEBAB', 'kebab-case', 'lowercase', 'PascalCase', 'snake_case', 'UPPERCASE', 'sYlLyCaSe', 'SyLlYcAsE', '  multi UPPER word  '];

/* MAIN */

benchmark.config ({
  iterations: 10_000
});

benchmark.group ( 'check', () => {

  for ( const is of [isCamelCase, isConstantCase, isKebabCase, isLowerCase, isPascalCase, isSnakeCase, isUpperCase] ) {

    benchmark ({
      name: is.name,
      fn: () => {
        FIXTURES.forEach ( is );
      }
    });

  }

});

benchmark.group ( 'convert', () => {

  for ( const to of [toCamelCase, toConstantCase, toKebabCase, toLowerCase, toPascalCase, toSnakeCase, toUpperCase] ) {

    benchmark ({
      name: to.name,
      fn: () => {
        FIXTURES.forEach ( to );
      }
    });

  }

});

benchmark.group ( 'extra', () => {

  benchmark ({
    name: 'copy',
    fn: () => {
      copy ( 'sYlLyCaSe', 'syllycase' );
    }
  });

  benchmark ({
    name: 'detect',
    fn: () => {
      detect ( 'sYlLyCaSe', 'syllycase' );
    }
  });

});

benchmark.summary ();
