
/* IMPORT */

import {describe} from 'fava';
import {isCamelCase, isConstantCase, isDotCase, isKebabCase, isLowerCase, isPascalCase, isPathCase, isSnakeCase, isTitleCase, isUpperCase} from '../dist/index.js';
import {toCamelCase, toConstantCase, toDotCase, toKebabCase, toLowerCase, toPascalCase, toPathCase, toSnakeCase, toTitleCase, toUpperCase} from '../dist/index.js';
import {apply, copy, detect} from '../dist/index.js';

/* MAIN */

describe ( 'Kasi', it => {

  /* CHECK */

  it ( 'isCamelCase', t => {

    t.is ( isCamelCase ( 'camelCase' ), true );
    t.is ( isCamelCase ( 'CONSTANT_CASE' ), false );
    t.is ( isCamelCase ( 'dot.case' ), false );
    t.is ( isCamelCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isCamelCase ( 'kebab-case' ), false );
    t.is ( isCamelCase ( 'lowercase' ), true );
    t.is ( isCamelCase ( 'PascalCase' ), false );
    t.is ( isCamelCase ( 'path/case' ), false );
    t.is ( isCamelCase ( 'snake_case' ), false );
    t.is ( isCamelCase ( 'Title Case' ), false );
    t.is ( isCamelCase ( 'UPPERCASE' ), false );
    t.is ( isCamelCase ( 'useHTMLBox' ), false );
    t.is ( isCamelCase ( 'sYlLyCaSe' ), true );
    t.is ( isCamelCase ( 'SyLlYcAsE' ), false );
    t.is ( isCamelCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isConstantCase', t => {

    t.is ( isConstantCase ( 'camelCase' ), false );
    t.is ( isConstantCase ( 'CONSTANT_CASE' ), true );
    t.is ( isConstantCase ( 'dot.case' ), false );
    t.is ( isConstantCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isConstantCase ( 'kebab-case' ), false );
    t.is ( isConstantCase ( 'lowercase' ), false );
    t.is ( isConstantCase ( 'PascalCase' ), false );
    t.is ( isConstantCase ( 'path/case' ), false );
    t.is ( isConstantCase ( 'snake_case' ), false );
    t.is ( isConstantCase ( 'Title Case' ), false );
    t.is ( isConstantCase ( 'UPPERCASE' ), true );
    t.is ( isConstantCase ( 'useHTMLBox' ), false );
    t.is ( isConstantCase ( 'sYlLyCaSe' ), false );
    t.is ( isConstantCase ( 'SyLlYcAsE' ), false );
    t.is ( isConstantCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isDotCase', t => {

    t.is ( isDotCase ( 'camelCase' ), false );
    t.is ( isDotCase ( 'CONSTANT_CASE' ), false );
    t.is ( isDotCase ( 'dot.case' ), true );
    t.is ( isDotCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isDotCase ( 'kebab-case' ), false );
    t.is ( isDotCase ( 'lowercase' ), true );
    t.is ( isDotCase ( 'PascalCase' ), false );
    t.is ( isDotCase ( 'path/case' ), false );
    t.is ( isDotCase ( 'snake_case' ), false );
    t.is ( isDotCase ( 'Title Case' ), false );
    t.is ( isDotCase ( 'UPPERCASE' ), false );
    t.is ( isDotCase ( 'useHTMLBox' ), false );
    t.is ( isDotCase ( 'sYlLyCaSe' ), false );
    t.is ( isDotCase ( 'SyLlYcAsE' ), false );
    t.is ( isDotCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isKebabCase', t => {

    t.is ( isKebabCase ( 'camelCase' ), false );
    t.is ( isKebabCase ( 'CONSTANT_CASE' ), false );
    t.is ( isKebabCase ( 'dot.case' ), false );
    t.is ( isKebabCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isKebabCase ( 'kebab-case' ), true );
    t.is ( isKebabCase ( 'lowercase' ), true );
    t.is ( isKebabCase ( 'PascalCase' ), false );
    t.is ( isKebabCase ( 'path/case' ), false );
    t.is ( isKebabCase ( 'snake_case' ), false );
    t.is ( isKebabCase ( 'Title Case' ), false );
    t.is ( isKebabCase ( 'UPPERCASE' ), false );
    t.is ( isKebabCase ( 'useHTMLBox' ), false );
    t.is ( isKebabCase ( 'sYlLyCaSe' ), false );
    t.is ( isKebabCase ( 'SyLlYcAsE' ), false );
    t.is ( isKebabCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isLowerCase', t => {

    t.is ( isLowerCase ( 'camelCase' ), false );
    t.is ( isLowerCase ( 'CONSTANT_CASE' ), false );
    t.is ( isLowerCase ( 'dot.case' ), true );
    t.is ( isLowerCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isLowerCase ( 'kebab-case' ), true );
    t.is ( isLowerCase ( 'lowercase' ), true );
    t.is ( isLowerCase ( 'PascalCase' ), false );
    t.is ( isLowerCase ( 'path/case' ), true );
    t.is ( isLowerCase ( 'snake_case' ), true );
    t.is ( isLowerCase ( 'Title Case' ), false );
    t.is ( isLowerCase ( 'UPPERCASE' ), false );
    t.is ( isLowerCase ( 'useHTMLBox' ), false );
    t.is ( isLowerCase ( 'sYlLyCaSe' ), false );
    t.is ( isLowerCase ( 'SyLlYcAsE' ), false );
    t.is ( isLowerCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isPascalCase', t => {

    t.is ( isPascalCase ( 'camelCase' ), false );
    t.is ( isPascalCase ( 'CONSTANT_CASE' ), false );
    t.is ( isPascalCase ( 'dot.case' ), false );
    t.is ( isPascalCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isPascalCase ( 'kebab-case' ), false );
    t.is ( isPascalCase ( 'lowercase' ), false );
    t.is ( isPascalCase ( 'PascalCase' ), true );
    t.is ( isPascalCase ( 'path/case' ), false );
    t.is ( isPascalCase ( 'snake_case' ), false );
    t.is ( isPascalCase ( 'Title Case' ), false );
    t.is ( isPascalCase ( 'UPPERCASE' ), false );
    t.is ( isPascalCase ( 'useHTMLBox' ), false );
    t.is ( isPascalCase ( 'sYlLyCaSe' ), false );
    t.is ( isPascalCase ( 'SyLlYcAsE' ), true );
    t.is ( isPascalCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isPathCase', t => {

    t.is ( isPathCase ( 'camelCase' ), false );
    t.is ( isPathCase ( 'CONSTANT_CASE' ), false );
    t.is ( isPathCase ( 'dot.case' ), false );
    t.is ( isPathCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isPathCase ( 'kebab-case' ), false );
    t.is ( isPathCase ( 'lowercase' ), true );
    t.is ( isPathCase ( 'PascalCase' ), false );
    t.is ( isPathCase ( 'path/case' ), true );
    t.is ( isPathCase ( 'snake_case' ), false );
    t.is ( isPathCase ( 'Title Case' ), false );
    t.is ( isPathCase ( 'UPPERCASE' ), false );
    t.is ( isPathCase ( 'useHTMLBox' ), false );
    t.is ( isPathCase ( 'sYlLyCaSe' ), false );
    t.is ( isPathCase ( 'SyLlYcAsE' ), false );
    t.is ( isPathCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isSnakeCase', t => {

    t.is ( isSnakeCase ( 'camelCase' ), false );
    t.is ( isSnakeCase ( 'CONSTANT_CASE' ), false );
    t.is ( isSnakeCase ( 'dot.case' ), false );
    t.is ( isSnakeCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isSnakeCase ( 'kebab-case' ), false );
    t.is ( isSnakeCase ( 'lowercase' ), true );
    t.is ( isSnakeCase ( 'PascalCase' ), false );
    t.is ( isSnakeCase ( 'path/case' ), false );
    t.is ( isSnakeCase ( 'snake_case' ), true );
    t.is ( isSnakeCase ( 'Title Case' ), false );
    t.is ( isSnakeCase ( 'UPPERCASE' ), false );
    t.is ( isSnakeCase ( 'useHTMLBox' ), false );
    t.is ( isSnakeCase ( 'sYlLyCaSe' ), false );
    t.is ( isSnakeCase ( 'SyLlYcAsE' ), false );
    t.is ( isSnakeCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isTitleCase', t => {

    t.is ( isTitleCase ( 'camelCase' ), false );
    t.is ( isTitleCase ( 'CONSTANT_CASE' ), false );
    t.is ( isTitleCase ( 'dot.case' ), false );
    t.is ( isTitleCase ( 'SCREAMING-KEBAB' ), false );
    t.is ( isTitleCase ( 'kebab-case' ), false );
    t.is ( isTitleCase ( 'lowercase' ), false );
    t.is ( isTitleCase ( 'PascalCase' ), false );
    t.is ( isTitleCase ( 'path/case' ), false );
    t.is ( isTitleCase ( 'snake_case' ), false );
    t.is ( isTitleCase ( 'Title Case' ), true );
    t.is ( isTitleCase ( 'UPPERCASE' ), false );
    t.is ( isTitleCase ( 'useHTMLBox' ), false );
    t.is ( isTitleCase ( 'sYlLyCaSe' ), false );
    t.is ( isTitleCase ( 'SyLlYcAsE' ), false );
    t.is ( isTitleCase ( '  multi UPPER word  ' ), false );

  });

  it ( 'isUpperCase', t => {

    t.is ( isUpperCase ( 'camelCase' ), false );
    t.is ( isUpperCase ( 'CONSTANT_CASE' ), true );
    t.is ( isUpperCase ( 'dot.case' ), false );
    t.is ( isUpperCase ( 'SCREAMING-KEBAB' ), true );
    t.is ( isUpperCase ( 'kebab-case' ), false );
    t.is ( isUpperCase ( 'lowercase' ), false );
    t.is ( isUpperCase ( 'PascalCase' ), false );
    t.is ( isUpperCase ( 'path/case' ), false );
    t.is ( isUpperCase ( 'snake_case' ), false );
    t.is ( isUpperCase ( 'UPPERCASE' ), true );
    t.is ( isUpperCase ( 'Title Case' ), false );
    t.is ( isUpperCase ( 'useHTMLBox' ), false );
    t.is ( isUpperCase ( 'sYlLyCaSe' ), false );
    t.is ( isUpperCase ( 'SyLlYcAsE' ), false );
    t.is ( isUpperCase ( '  multi UPPER word  ' ), false );

  });

  /* CONVERT */

  it ( 'toCamelCase', t => {

    t.is ( toCamelCase ( 'camelCase' ), 'camelCase' );
    t.is ( toCamelCase ( 'CONSTANT_CASE' ), 'constantCase' );
    t.is ( toCamelCase ( 'dot.case' ), 'dotCase' );
    t.is ( toCamelCase ( 'SCREAMING-KEBAB' ), 'screamingKebab' );
    t.is ( toCamelCase ( 'kebab-case' ), 'kebabCase' );
    t.is ( toCamelCase ( 'lowercase' ), 'lowercase' );
    t.is ( toCamelCase ( 'PascalCase' ), 'pascalCase' );
    t.is ( toCamelCase ( 'path/case' ), 'pathCase' );
    t.is ( toCamelCase ( 'snake_case' ), 'snakeCase' );
    t.is ( toCamelCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toCamelCase ( 'Title Case' ), 'titleCase' );
    t.is ( toCamelCase ( 'useHTMLBox' ), 'useHtmlBox' );
    t.is ( toCamelCase ( 'sYlLyCaSe' ), 'sYlLyCaSe' );
    t.is ( toCamelCase ( 'SyLlYcAsE' ), 'syLlYcAsE' );
    t.is ( toCamelCase ( '  multi UPPER word  ' ), 'multiUpperWord' );

  });

  it ( 'toConstantCase', t => {

    t.is ( toConstantCase ( 'camelCase' ), 'CAMEL_CASE' );
    t.is ( toConstantCase ( 'CONSTANT_CASE' ), 'CONSTANT_CASE' );
    t.is ( toConstantCase ( 'dot.case' ), 'DOT_CASE' );
    t.is ( toConstantCase ( 'SCREAMING-KEBAB' ), 'SCREAMING_KEBAB' );
    t.is ( toConstantCase ( 'kebab-case' ), 'KEBAB_CASE' );
    t.is ( toConstantCase ( 'lowercase' ), 'LOWERCASE' );
    t.is ( toConstantCase ( 'PascalCase' ), 'PASCAL_CASE' );
    t.is ( toConstantCase ( 'path/case' ), 'PATH_CASE' );
    t.is ( toConstantCase ( 'snake_case' ), 'SNAKE_CASE' );
    t.is ( toConstantCase ( 'Title Case' ), 'TITLE_CASE' );
    t.is ( toConstantCase ( 'UPPERCASE' ), 'UPPERCASE' );
    t.is ( toConstantCase ( 'useHTMLBox' ), 'USE_HTML_BOX' );
    t.is ( toConstantCase ( 'sYlLyCaSe' ), 'S_YL_LY_CA_SE' );
    t.is ( toConstantCase ( 'SyLlYcAsE' ), 'SY_LL_YC_AS_E' );
    t.is ( toConstantCase ( '  multi UPPER word  ' ), 'MULTI_UPPER_WORD' );

  });

  it ( 'toDotCase', t => {

    t.is ( toDotCase ( 'camelCase' ), 'camel.case' );
    t.is ( toDotCase ( 'CONSTANT_CASE' ), 'constant.case' );
    t.is ( toDotCase ( 'dot.case' ), 'dot.case' );
    t.is ( toDotCase ( 'SCREAMING-KEBAB' ), 'screaming.kebab' );
    t.is ( toDotCase ( 'kebab-case' ), 'kebab.case' );
    t.is ( toDotCase ( 'lowercase' ), 'lowercase' );
    t.is ( toDotCase ( 'PascalCase' ), 'pascal.case' );
    t.is ( toDotCase ( 'path/case' ), 'path.case' );
    t.is ( toDotCase ( 'snake_case' ), 'snake.case' );
    t.is ( toDotCase ( 'Title Case' ), 'title.case' );
    t.is ( toDotCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toDotCase ( 'useHTMLBox' ), 'use.html.box' );
    t.is ( toDotCase ( 'sYlLyCaSe' ), 's.yl.ly.ca.se' );
    t.is ( toDotCase ( 'SyLlYcAsE' ), 'sy.ll.yc.as.e' );
    t.is ( toDotCase ( '  multi UPPER word  ' ), 'multi.upper.word' );

  });

  it ( 'toKebabCase', t => {

    t.is ( toKebabCase ( 'camelCase' ), 'camel-case' );
    t.is ( toKebabCase ( 'CONSTANT_CASE' ), 'constant-case' );
    t.is ( toKebabCase ( 'dot.case' ), 'dot-case' );
    t.is ( toKebabCase ( 'SCREAMING-KEBAB' ), 'screaming-kebab' );
    t.is ( toKebabCase ( 'kebab-case' ), 'kebab-case' );
    t.is ( toKebabCase ( 'lowercase' ), 'lowercase' );
    t.is ( toKebabCase ( 'PascalCase' ), 'pascal-case' );
    t.is ( toKebabCase ( 'path/case' ), 'path-case' );
    t.is ( toKebabCase ( 'snake_case' ), 'snake-case' );
    t.is ( toKebabCase ( 'Title Case' ), 'title-case' );
    t.is ( toKebabCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toKebabCase ( 'useHTMLBox' ), 'use-html-box' );
    t.is ( toKebabCase ( 'sYlLyCaSe' ), 's-yl-ly-ca-se' );
    t.is ( toKebabCase ( 'SyLlYcAsE' ), 'sy-ll-yc-as-e' );
    t.is ( toKebabCase ( '  multi UPPER word  ' ), 'multi-upper-word' );

  });

  it ( 'toLowerCase', t => {

    t.is ( toLowerCase ( 'camelCase' ), 'camelcase' );
    t.is ( toLowerCase ( 'CONSTANT_CASE' ), 'constant_case' );
    t.is ( toLowerCase ( 'dot.case' ), 'dot.case' );
    t.is ( toLowerCase ( 'SCREAMING-KEBAB' ), 'screaming-kebab' );
    t.is ( toLowerCase ( 'kebab-case' ), 'kebab-case' );
    t.is ( toLowerCase ( 'lowercase' ), 'lowercase' );
    t.is ( toLowerCase ( 'PascalCase' ), 'pascalcase' );
    t.is ( toLowerCase ( 'path/case' ), 'path/case' );
    t.is ( toLowerCase ( 'snake_case' ), 'snake_case' );
    t.is ( toLowerCase ( 'Title Case' ), 'title case' );
    t.is ( toLowerCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toLowerCase ( 'useHTMLBox' ), 'usehtmlbox' );
    t.is ( toLowerCase ( 'sYlLyCaSe' ), 'syllycase' );
    t.is ( toLowerCase ( 'SyLlYcAsE' ), 'syllycase' );
    t.is ( toLowerCase ( '  multi UPPER word  ' ), '  multi upper word  ' );

  });

  it ( 'toPascalCase', t => {

    t.is ( toPascalCase ( 'camelCase' ), 'CamelCase' );
    t.is ( toPascalCase ( 'CONSTANT_CASE' ), 'ConstantCase' );
    t.is ( toPascalCase ( 'dot.case' ), 'DotCase' );
    t.is ( toPascalCase ( 'SCREAMING-KEBAB' ), 'ScreamingKebab' );
    t.is ( toPascalCase ( 'kebab-case' ), 'KebabCase' );
    t.is ( toPascalCase ( 'lowercase' ), 'Lowercase' );
    t.is ( toPascalCase ( 'PascalCase' ), 'PascalCase' );
    t.is ( toPascalCase ( 'path/case' ), 'PathCase' );
    t.is ( toPascalCase ( 'snake_case' ), 'SnakeCase' );
    t.is ( toPascalCase ( 'Title Case' ), 'TitleCase' );
    t.is ( toPascalCase ( 'UPPERCASE' ), 'Uppercase' );
    t.is ( toPascalCase ( 'useHTMLBox' ), 'UseHtmlBox' );
    t.is ( toPascalCase ( 'sYlLyCaSe' ), 'SYlLyCaSe' );
    t.is ( toPascalCase ( 'SyLlYcAsE' ), 'SyLlYcAsE' );
    t.is ( toPascalCase ( '  multi UPPER word  ' ), 'MultiUpperWord' );

  });

  it ( 'toPathCase', t => {

    t.is ( toPathCase ( 'camelCase' ), 'camel/case' );
    t.is ( toPathCase ( 'CONSTANT_CASE' ), 'constant/case' );
    t.is ( toPathCase ( 'dot.case' ), 'dot/case' );
    t.is ( toPathCase ( 'SCREAMING-KEBAB' ), 'screaming/kebab' );
    t.is ( toPathCase ( 'kebab-case' ), 'kebab/case' );
    t.is ( toPathCase ( 'lowercase' ), 'lowercase' );
    t.is ( toPathCase ( 'PascalCase' ), 'pascal/case' );
    t.is ( toPathCase ( 'path/case' ), 'path/case' );
    t.is ( toPathCase ( 'snake_case' ), 'snake/case' );
    t.is ( toPathCase ( 'Title Case' ), 'title/case' );
    t.is ( toPathCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toPathCase ( 'useHTMLBox' ), 'use/html/box' );
    t.is ( toPathCase ( 'sYlLyCaSe' ), 's/yl/ly/ca/se' );
    t.is ( toPathCase ( 'SyLlYcAsE' ), 'sy/ll/yc/as/e' );
    t.is ( toPathCase ( '  multi UPPER word  ' ), 'multi/upper/word' );

  });

  it ( 'toSnakeCase', t => {

    t.is ( toSnakeCase ( 'camelCase' ), 'camel_case' );
    t.is ( toSnakeCase ( 'CONSTANT_CASE' ), 'constant_case' );
    t.is ( toSnakeCase ( 'dot.case' ), 'dot_case' );
    t.is ( toSnakeCase ( 'SCREAMING-KEBAB' ), 'screaming_kebab' );
    t.is ( toSnakeCase ( 'kebab-case' ), 'kebab_case' );
    t.is ( toSnakeCase ( 'lowercase' ), 'lowercase' );
    t.is ( toSnakeCase ( 'PascalCase' ), 'pascal_case' );
    t.is ( toSnakeCase ( 'path/case' ), 'path_case' );
    t.is ( toSnakeCase ( 'snake_case' ), 'snake_case' );
    t.is ( toSnakeCase ( 'Title Case' ), 'title_case' );
    t.is ( toSnakeCase ( 'UPPERCASE' ), 'uppercase' );
    t.is ( toSnakeCase ( 'useHTMLBox' ), 'use_html_box' );
    t.is ( toSnakeCase ( 'useHTMLBox' ), 'use_html_box' );
    t.is ( toSnakeCase ( 'sYlLyCaSe' ), 's_yl_ly_ca_se' );
    t.is ( toSnakeCase ( 'SyLlYcAsE' ), 'sy_ll_yc_as_e' );
    t.is ( toSnakeCase ( '  multi UPPER word  ' ), 'multi_upper_word' );

  });

  it ( 'toTitleCase', t => {

    t.is ( toTitleCase ( 'camelCase' ), 'Camel Case' );
    t.is ( toTitleCase ( 'CONSTANT_CASE' ), 'Constant Case' );
    t.is ( toTitleCase ( 'dot.case' ), 'Dot Case' );
    t.is ( toTitleCase ( 'SCREAMING-KEBAB' ), 'Screaming Kebab' );
    t.is ( toTitleCase ( 'kebab-case' ), 'Kebab Case' );
    t.is ( toTitleCase ( 'lowercase' ), 'Lowercase' );
    t.is ( toTitleCase ( 'PascalCase' ), 'Pascal Case' );
    t.is ( toTitleCase ( 'path/case' ), 'Path Case' );
    t.is ( toTitleCase ( 'snake_case' ), 'Snake Case' );
    t.is ( toTitleCase ( 'Title Case' ), 'Title Case' );
    t.is ( toTitleCase ( 'UPPERCASE' ), 'Uppercase' );
    t.is ( toTitleCase ( 'useHTMLBox' ), 'Use Html Box' );
    t.is ( toTitleCase ( 'sYlLyCaSe' ), 'S Yl Ly Ca Se' );
    t.is ( toTitleCase ( 'SyLlYcAsE' ), 'Sy Ll Yc As E' );
    t.is ( toTitleCase ( '  multi UPPER word  ' ), 'Multi Upper Word' )

  });

  it ( 'toUpperCase', t => {

    t.is ( toUpperCase ( 'camelCase' ), 'CAMELCASE' );
    t.is ( toUpperCase ( 'CONSTANT_CASE' ), 'CONSTANT_CASE' );
    t.is ( toUpperCase ( 'dot.case' ), 'DOT.CASE' );
    t.is ( toUpperCase ( 'SCREAMING-KEBAB' ), 'SCREAMING-KEBAB' );
    t.is ( toUpperCase ( 'kebab-case' ), 'KEBAB-CASE' );
    t.is ( toUpperCase ( 'lowercase' ), 'LOWERCASE' );
    t.is ( toUpperCase ( 'PascalCase' ), 'PASCALCASE' );
    t.is ( toUpperCase ( 'path/case' ), 'PATH/CASE' );
    t.is ( toUpperCase ( 'snake_case' ), 'SNAKE_CASE' );
    t.is ( toUpperCase ( 'Title Case' ), 'TITLE CASE' );
    t.is ( toUpperCase ( 'UPPERCASE' ), 'UPPERCASE' );
    t.is ( toUpperCase ( 'useHTMLBox' ), 'USEHTMLBOX' );
    t.is ( toUpperCase ( 'sYlLyCaSe' ), 'SYLLYCASE' );
    t.is ( toUpperCase ( 'SyLlYcAsE' ), 'SYLLYCASE' );
    t.is ( toUpperCase ( '  multi UPPER word  ' ), '  MULTI UPPER WORD  ' );

  });

  /* EXTRA */

  it ( 'apply', t => {

    t.is ( apply ( 'some EXAMPLE', 'camel' ), 'someExample' );
    t.is ( apply ( 'some EXAMPLE', 'constant' ), 'SOME_EXAMPLE' );
    t.is ( apply ( 'some EXAMPLE', 'dot' ), 'some.example' );
    t.is ( apply ( 'some EXAMPLE', 'kebab' ), 'some-example' );
    t.is ( apply ( 'some EXAMPLE', 'lower' ), 'some example' );
    t.is ( apply ( 'some EXAMPLE', 'pascal' ), 'SomeExample' );
    t.is ( apply ( 'some EXAMPLE', 'path' ), 'some/example' );
    t.is ( apply ( 'some EXAMPLE', 'snake' ), 'some_example' );
    t.is ( apply ( 'some EXAMPLE', 'title' ), 'Some Example' );
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
    t.is ( detect ( 'dot.case' ), 'dot' );
    t.is ( detect ( 'SCREAMING-KEBAB' ), 'upper' );
    t.is ( detect ( 'kebab-case' ), 'kebab' );
    t.is ( detect ( 'lowercase' ), 'lower' );
    t.is ( detect ( 'PascalCase' ), 'pascal' );
    t.is ( detect ( 'path/case' ), 'path' );
    t.is ( detect ( 'snake_case' ), 'snake' );
    t.is ( detect ( 'Title Case' ), 'title' );
    t.is ( detect ( 'UPPERCASE' ), 'upper' );
    t.is ( detect ( 'useHTMLBox' ), 'unknown' );
    t.is ( detect ( 'sYlLyCaSe' ), 'camel' );
    t.is ( detect ( 'SyLlYcAsE' ), 'pascal' );
    t.is ( detect ( '  multi UPPER word  ' ), 'unknown' );

  });

});
