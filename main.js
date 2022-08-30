

console.log (" Desafio I - Juan Braña ");



let nombre = prompt ( "Ingrese su nombre: ");

while(nombre != "juan" ) {
    console.log ( nombre );
    nombre = prompt ( "Ingrese su nombre: ");
}

const passwordAutorizado = 2207; 

let pass = prompt ("Ingrese su contraseña: "); 

for ( let i = 0; i < 3; i++ ){
    if ( pass == passwordAutorizado) {
        console.log ("Hola! " + nombre + " ------ >>>>> Bienvenido a tu panel de control! ");
        break;
    }else { 
        pass = prompt ("Su password ingresado es incorrecto. Intente nuevamente! ");  
        
    } alert (" Ud a sido bloqueado!  " );
    break;
}
