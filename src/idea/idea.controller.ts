import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Idea } from './idea.dto';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {
    constructor(private ideaService : IdeaService){}

    @Get()
    getAll(): Promise<Idea[]> {
        return this.ideaService.findAll();
    }

    @Post()
    create(@Body() idea: Idea): Promise<Idea> {
        return this.ideaService.create(idea);
    }

    @Put(":id")
    update(@Body() idea: Idea, @Param('id') id: number): Promise<Idea> {
        return this.ideaService.update(id, idea);
    }

    @Delete(":id")
    delete(@Param('id') id: number): Promise<boolean> {
        return this.ideaService.delete(id);
    }
}
