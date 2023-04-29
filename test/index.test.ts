//1. Importar las bibliotecas

import request from 'supertest'
import App from '../src/App' //el . es la carpeta donde esta el archivo esta en esa misma

//reglas de prueba
//agrupacion de elementos de prueba
//crear modulos de prueba, se puede ejecutar uno o varios
describe(
    'GET /',//caracteristicas del nombre de la prueba
    ()=>{//Funcion callback 
        let app:App//Crear objeto de la clase app, se declara

        //secciones
        //1. lo q ocurre antes de q empice la prueba
        beforeAll(
            ()=>{
                app = new App()
                //q inicialice el servidor
                app.start()
            }
        )
        
        //2. Lo q ocurre despues de q empiece la prueba
        //apagar el servidor
        //debe ir en uns funcion callback
        afterAll(
            ()=>{
                app.close()
            }
        )

        //3. la prueba
            test(
                'Debe devolder un mensaje',//Descripcion de la prueba
                async()=>{ //debe ser asincrono porque se hace peticion a una api y debe ser asincrono
                    const res = await request(app.app).get('/')//peticion a la api q estamos probando
                    expect(res.statusCode).toEqual(200)
                    expect(res.text).toEqual('Bienvenidos a TypeScript')
                } 
            )

    } 
)  