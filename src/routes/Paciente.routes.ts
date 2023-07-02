//en prisma se debe definir los atributos de una clase antes de utilizarlos
//Express tiene una clase q se llama router donde defino todas las rutas
//q voy a trabajar
import { Router, Response, Request } from 'express'

//Tengo q llamar a la lógica de la clase
import PacienteController from '../controllers/PacienteController'

class PacienteRouter{

    router:Router
    pacienteController:PacienteController

    constructor(){
        this.router = Router()
        this.pacienteController = new PacienteController()
        //Cuando costruya el objeto llame a routers
        this.routes()
    }

    //estas rutas no se acceden de manera directa sino se llama 

    //metodos
    //crea las rutas y los llama
    private routes():void{
        //cambio el .app con router xq router permite gestionar las rutas
        this.router.get(
			'/pacientes', //lo que habia lo dejo en la logica del negocio en controladores
            //ahora enlazo con la logica de negocio que esta definida en la clase
            //cuando alguien acceda a la ruta pacientes ejecute esta funcion
            //Se puede hacer de 2 maneras con reques y response o con la funcion tipo flecha
            //donde se pasa el objeto requ y res
            (req:Request, res:Response)=>{
                //valla al paciente controller y ejecute la funcion 
                //obtener pacientes pasandole la peticion del usuario
                //y un objeto de respuesta para que la arme y la envie
                this.pacienteController.obtenerPacientes(req,res)
                //se llama al metodo especifico del controlador que va
                //q va a gestionar la peticion
            }
		)

		this.router.post(//ruta q nos devuelve algo cuando entramos a ella
			'/crear_paciente', //url de la ruta
            (req:Request, res:Response)=>{
                this.pacienteController.crearPaciente(req,res)
            }
		)
    }
}

const miRouter = new PacienteRouter()
export default miRouter.router