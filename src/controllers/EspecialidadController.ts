import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

class EspecialidadController{

    private prisma: PrismaClient

    constructor(){
        this.prisma = new PrismaClient()
    }

    async obtenerEspecialidad(req:Request, res:Response){
        const especialidad = await this.prisma.especialidad.findMany()
        res.json(especialidad)
    }
}

export default EspecialidadController