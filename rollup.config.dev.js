/**
 * Created by lu_hb on 2017/11/13.
 */
var rollup = require( 'rollup' );
var babel = require('rollup-plugin-babel');

rollup.rollup({
    input: 'src/main.js',
    plugins: [ babel() ]
}).then( function ( bundle ) {
    bundle.write({
        format: 'cjs',
        moduleName: 'main', //umd或iife模式下，若入口文件含 export，必须加上该属性
        dest: './bundle.js'
    });
});