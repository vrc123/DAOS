import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateProfileDTO } from './dtos/create-profile.dto';
import { InstrumentDTO } from './dtos/instrument-profile.dto';
import { UpdateNewsletterProfileDTO } from './dtos/update-newsletter-profile.dto';
import { UpdatePasswordProfileDTO } from './dtos/update-password-profile.dto';
import { UpdateProfileDTO } from './dtos/update-profile.dto';
import { ProfilesService } from './profiles.service';
import { Profile } from './schemas/profile.schema';

@Controller('profiles')
export class ProfilesController {
    // Dependency injection = imports data for use
    // Dependency injection - profiles service
    constructor(private readonly profilesService: ProfilesService) {}

    // URL = /profiles
    @Get()
    findAll(): Promise<Profile[]> {
        return this.profilesService.findAll().then((result) => {
            if(!(result.length === 0)) {
                return result;
            } else {
                throw new HttpException('Profiles not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    @Post()
    create(@Body() createProfile: CreateProfileDTO): Promise<Profile> {
        return this.profilesService.create(createProfile);
    }

    // URL = /profiles/:id
    @Get(':id')
    findSpecific(@Param('id') id): Promise<Profile> {
        return this.profilesService.findSpecific(id).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateProfile: UpdateProfileDTO): Promise<Profile> {
        return this.profilesService.update(id, updateProfile).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Profile> {
        return this.profilesService.delete(id).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    // URL = /profiles/:id/password
    @Put(':id/password')
    updatePassword(@Param('id') id, @Body() updatePasswordProfile: UpdatePasswordProfileDTO): Promise<Profile> {
        return this.profilesService.updatePassword(id, updatePasswordProfile).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    // URL = /profiles/:id/newsletter
    @Put(':id/newsletter')
    updateNewsletter(@Param('id') id, @Body() updateNewsletterProfile: UpdateNewsletterProfileDTO): Promise<Profile> {
        return this.profilesService.updateNewsletter(id, updateNewsletterProfile).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    // URL = /profiles/:id/instrument
    @Post(':id/instrument')
    addInstrument(@Param('id') id, @Body() addInstrument: InstrumentDTO): Promise<Profile> {
        return this.profilesService.addInstrument(id, addInstrument).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }

    // URL = /profiles/:id/instrument/:id
    @Put(':id/instrument/:instrumentId')
    editInstrument(@Param() params, @Body() editInstrument: InstrumentDTO): Promise<Profile> {
        return this.profilesService.editInstrument(params.id, params.instrumentId, editInstrument).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }
    
    @Delete(':id/instrument/:instrumentId')
    removeInstrument(@Param() params): Promise<Profile> {
        return this.profilesService.removeInstrument(params.id, params.instrumentId).then((result) => {
            if(result) {
                return result;
            } else {
                throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
            }
        }).catch(() => {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        });
    }
}