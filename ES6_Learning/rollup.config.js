/**
 * buble plugin is used to compile ES2015 (ES6) to ES5 which all browsers understand
 * !! Remember !! first buble plugin has to be installed via: npm install --save-dev rollup-plugin-buble
 * ( which is in install_rollup.bat already )
 */
import buble from 'rollup-plugin-buble';

export default {
        input: 'src/main.js',
        output: {
              file: "public/js/main.compiled.js",
              format: "es"
        },
        plugins: [ buble() ]     
}
