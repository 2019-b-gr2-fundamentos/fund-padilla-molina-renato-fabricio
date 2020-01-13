//const sumaLib=require('reno-lib-1/lib/suma');
import * as sumaLib from 'reno-lib-1/lib/suma'
import * as restaLib from 'reno-lib-1/lib/resta'
import * as multiplicacionLib from 'reno-lib-1/lib/multiplicacion'
import * as divisionLib from 'reno-lib-1/lib/division'
import * as potenciaLib from 'reno-lib-1/lib/potencia'
import * as radicacionLib from 'reno-lib-1/lib/radicacion'
import * as factorialLib from 'reno-lib-1/lib/factorial'
import * as piLib from 'reno-lib-1/lib/pi'
console.log("La respuesta es: "+sumaLib(4,7));
console.log("La respuesta es: "+restaLib(4,7));
console.log("La respuesta es: "+multiplicacionLib(4,7));
console.log("La respuesta es: "+divisionLib(4,7));
console.log("La respuesta es: "+potenciaLib(4,3));
console.log("La respuesta es: "+radicacionLib(4,2));
console.log("La respuesta es: "+factorialLib(4));
console.log(piLib);