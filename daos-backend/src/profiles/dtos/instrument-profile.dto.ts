import { IsAlpha, IsNumberString } from "class-validator";

export class InstrumentDTO {
    
    @IsAlpha()
    readonly instrumentName: string;
    
    @IsNumberString()
    readonly skillLevel: string;
    
    readonly genre: string[];

    constructor(instrumentName: string, skillLevel: string, genre: string[]) {
        this.instrumentName = instrumentName;
        this.skillLevel = skillLevel;
        this.genre = genre;
    }
    
}