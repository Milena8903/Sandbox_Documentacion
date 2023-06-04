//va a tener una ruta que es variable
import { Router, Request, Response } from 'express'
import FormularioController   from '../controllers/FormularioController'

class FormularioRouter{

    //Atributos de la clase
    router = Router()
    miFormularioController:FormularioController

    constructor(){
        this.router==Router()
        this.miFormularioController = new FormularioController()
        //metodo
        this.routes()
    }

    private routes(){
        //obtener info
        this.router.get(
            //Va a pasar el nombre de una variable
            //van a ir a la ruta formulario y despues le van a pasar una variable
            //y guardela en el objeto formulario
            '/formulario/:formulario',
            (req:Request, res:Response)=>{
                this.miFormularioController.obtenerDefinicion(req, res)
            }
        )
    }
}

export default new FormularioRouter().router