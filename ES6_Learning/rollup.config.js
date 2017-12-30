/**
 * buble plugin is used to compile ES2015 (ES6) to ES5 which all browsers understand
 * !! Remember !! first buble plugin has to be installed via: 
 *   npm install --save-dev rollup-plugin-node-resolve
 *   npm install --save-dev rollup-plugin-babel
 * ( which is in install_rollup.bat already )
 */
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
        input: 'src/main.js',
        output: {
              file: "public/js/main.compiled.js",
              format: "es"
        },
       
        plugins: [
            resolve(),
            babel({
              exclude: 'node_modules/**' // only transpile our source code
            })
        ]
}
