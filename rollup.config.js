/**
 * Created by lu_hb on 2017/11/13.
 */
import babel from 'rollup-plugin-babel'

export default{
    input:'src/jquery.js',
    output:{
        file:'jquery.js',
        format:'umd'
    },
    name:'jquery',
    sourcemap:"inline",
    plugins:[babel()]

};