import express,{Application, Request, Response} from 'express'

class App{

    //Atributos
    public app:any //varialble q va a ser de cualquier tipo, cuando no sabe ese tipo de varible
    private server:any //servidor q se ejecuta al arrancar la aplicación, prender y apagar

    constructor(){
        //se ejecuta apartir de la plantilla
        this.app=express()  //creo objeto de la biblioteca
        this.app.use(express.json()) //generar archivos json
        this.routes() //definir los punto de entrada al proyecto
    }

    private routes():void{ //no devuelve ningun tipo de dato
        this.app.get(//ruta q nos devuelve algo cuando entramos a ella
            "/", //url de la ruta
             (req:Request, res:Response)=>{ //funcion de calback q se ejecuta cuando se accede a esa ruta
                res.send("Bienvenidos a TypeScript") //envar al cliente una respuesta
                //llamo a un método, eje bus y personas q estan dentro
                //call center, los q trabajan adentro son los q devuelven coasas
             }  
        ) 
    }
    
    public start():void{ //funcion q arranca el servidor
        this.server = this.app.listen(
            3000, //abre un puerto en el servidor
            ()=>{console.log("El servidor está escuchando en el puerto 3000")}
            )
    }

    public close():void{ //cerrar el servidor
        this.server.close()
    }  
}

//cree un modulo y lo exporte apartir de esta clase
export default App