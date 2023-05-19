import swaggerUi  from 'swagger-ui-express'
//desestructurar un objeto
import { swaggerSpec } from './swagger.conf'
import express,{Application, Request, Response} from 'express'
//ya no se necesita prisma porque todo se va a conectar
//por los controllers y ahí con prisma
//import { PrismaClient } from '@prisma/client' //se utiliza el cliente prisma para conectarse a la bd
//import { error } from 'console'

//importo las rutas
import PacienteRouter from './routes/Paciente.routes'
import MedicoRouter from './routes/Medico.routes'
import FormularioRouter from './routes/Formulario.routes'
import cors from 'cors'
/**
 * Clase principal de la API. Define las rutas de la API
 * 
 * @author Milena Prieto
 * @description Clase inicial de ejemplo para manejar rutas y documentacion
 */

class App{
	//Atributos
	public app:Application //varialble q va a ser de cualquier tipo, cuando no sabe ese tipo de varible
	private server:any //servidor q se ejecuta al arrancar la aplicación, prender y apagar
	
	/**
     * Método constructor de la clase
     * 
     * @author Milena Prieto
     */

	constructor(){

		/**
         * Expres es la biblioteca para definir API en el ecosistema de Node.js 
         */

		//se ejecuta apartir de la plantilla
		this.app=express()  //creo objeto de la biblioteca
		this.app.use(express.json()) //generar archivos json
		this.app.use(
			'/api-docs', //donde quiero publicar la documentación de swagger/
			swaggerUi.serve, //cual es el servidor donde se va a publicar, manejar la publicación
			swaggerUi.setup(swaggerSpec)// De donde voy a sacar los datos de configuración
		)
		
		//se debe crear un objeto de la clase prismaCliente
		//va a ser un nuevo objeto de la clase prima
		//this.prismaClient = new PrismaClient() //No se necesita por estar en controller
		
		this.app.use(cors())
		this.routes() //definir los punto de entrada al proyecto
	}

	/**
	 * Definir y agregar las rutas de la API con express
	 */

	private routes():void{ //no devuelve ningun tipo de dato
		//this.app.get(//ruta q nos devuelve algo cuando entramos a ella
		//	'/', //url de la ruta
		//	(req:Request, res:Response)=>{ //funcion de calback q se ejecuta cuando se accede a esa ruta
		//		res.send('Bienvenidos a TypeScript') //envar al cliente una respuesta
				//llamo a un método, eje bus y personas q estan dentro
				//call center, los q trabajan adentro son los q devuelven coasas
		//	}  
		// ) 

		//Ahora usa las rutas que se crearon en pacienteRouter
		//agregando nuevos elementos al stack de expres
		//utilice todas las rutas q se tengan
		this.app.use('/', PacienteRouter)	
		this.app.use('/', MedicoRouter)
		this.app.use('/', FormularioRouter)
	}
    
	public start():void{ //funcion q arranca el servidor
		this.server = this.app.listen(
			3000, //abre un puerto en el servidor
			()=>{console.log('El servidor está escuchando en el puerto 3000')}
		)
	}

	public close():void{ //cerrar el servidor
		this.server.close()
	}  
}

//cree un modulo y lo exporte apartir de esta clase
export default App