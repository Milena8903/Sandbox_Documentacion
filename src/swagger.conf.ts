
//1. Importar la biblioteca de trabajo
import swaggerJSDoc from "swagger-jsdoc";

//configuración de swagger como una funcion
//exporto la opciones
export const swaggerOptions={
    //creo el objeto json
    definition:{
        openapi: "3.0.0",
        info:{
            title:"API de las IPS AteneaIPS",
            version:"1.0.0",
            description:"En esta API tenemos la funcionalidad que soporta la operación de la IPS AteneaIPS"
        },
        servers:[//publicar la info de la api
            {
                url:"http://localhost:3000",
                description:"Servidor local de documentación"
            }
        ]
    },
    //llave donde voy a documentar o donde lo voy a encontrar
    //encontrar info para trabajar instrucciones y datos
    apis:["src/index.ts", "./swagger/*.swagger.ts"]
}

//Exportar documento de documentación de swageer
//caracteristicas de swagger
//exporto especificaciones
export const swaggerSpec = swaggerJSDoc(swaggerOptions)