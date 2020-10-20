import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find();

        response.json(orphanages);
    },
    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about, 
            instruction,
            opening_hours,
            open_on_weekends
        } = request.body
    
        const orphanagesRepository = getRepository(Orphanage);
    
        const orphanage = orphanagesRepository.create({
            name, 
            latitude,
            longitude,
            about,
            instruction,
            opening_hours,
            open_on_weekends,
        });
    
        await orphanagesRepository.save(orphanage);
    
        return response.status(201).json(orphanage);
    }
}