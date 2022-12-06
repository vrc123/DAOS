import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

@Schema()
export class Instrument {

    @Prop()
    instrumentName: string;
    
    @Prop()
    skillLevel: string;
    
    @Prop()
    genre: string[];

}

@Schema()
export class Profile {
    
    @Prop()
    firstName: string;
    
    @Prop()
    lastName: string;
    
    @Prop()
    email: string;
    
    @Prop()
    password: string;
    
    @Prop()
    description: string;
    
    @Prop()
    zipCode: string;
    
    @Prop()
    city: string;
    
    @Prop()
    phone: string;
    
    @Prop()
    status: boolean;
    
    @Prop()
    conditions: boolean;

    @Prop()
    newsletter: boolean;
    
    @Prop([Instrument])
    instruments: Instrument[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);