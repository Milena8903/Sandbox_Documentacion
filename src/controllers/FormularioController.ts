import { Request, Response } from 'express'
import * as jsonSchema from '../json-schema.json'

//cree un nuevo tipo de dato que provenga de un registro de dato
//no ponga tanto problema ty entonces guarde en cadena texto todo lo q entre
//string y cualquier otra cosa
type JsonSchema = Record<string, any>

class FormularioController{
    obtenerDefinicion(req:Request, res:Response){

        // 1. Extraer el nombre del formulario
            //traiga, desestructure los parametros de la peticion
            //para obtener la variable formulario
        const { formulario } = req.params
        //los nombres de las llaves del objeto q estoy llamando 
        //simpre va a ser un string y despues se convierte en cualquier cosa
        const miEsquema: JsonSchema = jsonSchema 

            //busque en el schema json una definicion q tenga el nombre
            //del formulario
            //Si en el objeto json schema existe una definicion q sea la del
            //formulario q la devuelva en la respuesta
            //sino devuelva un mensaje de error
            if(miEsquema.definitions[formulario]){
                res.json(miEsquema.definitions[formulario])
            }else{
                res.status(400)
                res.json({error: `No se encotró el formulario ${formulario}`})
            }

    }
}

export default FormularioController