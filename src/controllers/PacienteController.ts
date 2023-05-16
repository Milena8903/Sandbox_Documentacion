import { Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'

class PacienteController{

    private prismaClient:PrismaClient//objeto de la clase prisma

    //Se genera la clase y apartir de eso se ponen los controladores

    constructor(){
        this.prismaClient = new PrismaClient()
    }


    //paso lo que habia en /pacientes
    //crea un objeto pacientes y va a guardar todo lo q devuelva
    //prisma cuando aplique la funcion findMany en el objeto pacienntes
    async obtenerPacientes(req:Request, res:Response){
        const pacientes = await this.prismaClient.paciente.findMany()
        res.json(pacientes)
    }

        //Pasa de ser funcion flecha a un método
    async crearPaciente(req:Request, res:Response){ //funcion de calback q se ejecuta cuando se accede a esa ruta
            //Ya no va relacionado con ty	
                //res.send('Bienvenidos a TypeScript') //envar al cliente una respuesta
                //llamo a un método, eje bus y personas q estan dentro
                //call center, los q trabajan adentro son los q devuelven coasas
            
            //ruta relacionada ya con la bd
                //acceso a lo q el usuario envie en la peticion
                //se desestroctura
                
                    //req.body //devuelve el json que se envio en el send(cliente)
                    //res.send('To Do')

        //para exepciones
        try{
                //utilizando prisma
                const{
                    cedula,
                    nombre,
                    apellido,
                    fecha,
                    telefono
                } = req.body

                //en fecha nacimiento espera un date y esta sacando un strstring
                //entonces se destructura
                //se crea un objeto del tipo fecha
                //asi se cambio el formato

                //TO DO: Falta verificar la validez y connsistencia 
                //de los datos de entrada
                const fechaNacimiento = new Date(fecha) 


                //ahora señor prisma tome estos datos y guardelos en la base de datos
                //ese paciente = a llamar a prisma
                //se llama al objeto que se creo
                //y q cree un nuevo paciente, al metodo crear del objeto paciente
                const paciente = await this.prismaClient.paciente.create(
                    //ese método va a necesitar un json, q tiene una llave llamada data donde van a estar los datos
                        {
                            //datos que quiero guardar en el paciente
                            //se pasan los datos para q cree un nuevo paciente
                            data:{
                                cedula,
                                nombre,
                                apellido,
                                fechaNacimiento,
                                telefono
                            }
                        }
                    )
                
                //ahora se le dice que devuelva lo que ahí en paciente
                res.json(paciente)
                //res.json(req.body)
                //como respuesta respondame lo q me envio 						
                        
                
            }catch(e:any){
                //q haga algo si sucede un error
                res.status(400)
                res.json({error:e.message})
        }
    }




}

export default PacienteController