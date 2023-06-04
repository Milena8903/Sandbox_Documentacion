import { Router, Request, Response } from 'express'
import CitaController from '../controllers/citaController'

class CitaRouter{

    router = Router()
    miCitaController:CitaController

    constructor(){
        this.router==Router()
        this.miCitaController = new CitaController()
        this.routes()
    }

    private routes(){
        this.router.get(
            '/cita',
            (req:Request, res:Response)=>{
                this.miCitaController.obtenerCita(req,res)
            }
        )
    }
}

export default new CitaRouter().router