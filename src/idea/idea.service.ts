import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Idea } from './idea.dto';
import { IdeaEntity } from './idea.entity';

@Injectable()
export class IdeaService {
    constructor(@InjectRepository(IdeaEntity) private ideaRepository: Repository<IdeaEntity>) {}

    async findAll(): Promise<Idea[]> {
        return await this.ideaRepository.find();
    }

    async create(idea: Idea): Promise<Idea>
    {
        const ideaEntity = await this.ideaRepository.create(idea);
        return await this.ideaRepository.save(ideaEntity);
    }

    async update(id: number, idea:  Partial<Idea>): Promise<Idea> {
        await this.ideaRepository.update({id}, idea);

        return await this.ideaRepository.findOne({id});
    }

    async delete(id: number): Promise<boolean> {
        await this.ideaRepository.delete({id})
        return true;
    }
}
