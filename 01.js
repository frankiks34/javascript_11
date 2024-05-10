function descargarnuevosclientes(){

    return new Promise( resolve =>{

        console.log('Desacrgando clientes ... espere...')

        setTimeout(()=>{

            resolve('Los clientes fueron Descargados');
        },5000 );

    });

}

async function app(){
    
  try{
      const resultado= descargarnuevosclientes();
console.log(resultado);
  }
  catch(error)
  {
    console.log(error);
  }

}
app();