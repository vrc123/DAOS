import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AddEnsembleDTO } from './dtos/add-ensemble.dto'; 
import { EditEnsembleDTO } from './dtos/edit-ensemble.dto'; 
import { EnsemblesService } from './ensembles.service';
import { Ensemble } from './schemas/ensemble.schema';

@Controller('ensembles')
export class EnsemblesController {
    // Dependency injection = imports data for use
    // Dependency injection - ensembles service
    constructor(private readonly ensemblesService: EnsemblesService) {}

    // URL = /ensembles
    @Get()
    findAll(): Promise<Ensemble[]> {
        return this.ensemblesService.findAll().then((result) => {
            if(!(result.length === 0)) {
                return result;
            } else {
                throw new HttpException('Ensembles not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    @Post()
    create(@Body() createEnsemble: AddEnsembleDTO): Promise<Ensemble> {
        return this.ensemblesService.create(createEnsemble);
    }

    // URL = /ensembles/:id
    @Get(':id')
    findSpecific(@Param('id') id): Promise<Ensemble> {
        return this.ensemblesService.findSpecific(id).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    @Put(':id')
    edit(@Param('id') id, @Body() editEnsemble: EditEnsembleDTO): Promise<Ensemble> {
        return this.ensemblesService.update(id, editEnsemble).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        })
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<Ensemble> {
        return this.ensemblesService.delete(id).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Ensemble not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
        })
    }
}