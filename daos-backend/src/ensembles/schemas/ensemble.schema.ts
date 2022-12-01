import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Profile } from 'src/profiles/schemas/profile.schema';
import * as mongoose from 'mongoose';

export type EnsembleDocument = Ensemble & Document;

@Schema()
export class Posts {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    instrument: string;

    @Prop()
    minimumSkillLevel: string;

    @Prop()
    genre: [string]
}

@Schema()
export class Ensemble {

    @Prop({required: true})
    name: string;

    @Prop()
    description: string;
    
    @Prop()
    website: string;
    
    @Prop()
    zipCode: string;
    
    @Prop()
    city: string;
    
    @Prop()
    activeMusicians: string;
    
    @Prop()
    practiceFrequency: string;
    
    @Prop()
    continuously: boolean;
    
    @Prop()
    projectBased: boolean;
    
    @Prop()
    genre: [];
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Profile.name})
    admin: Profile;
    
    @Prop( [Posts] )
    posts: Posts[]
}

export const EnsembleSchema = SchemaFactory.createForClass(Ensemble);