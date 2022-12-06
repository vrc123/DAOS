import { IsAlpha, IsNumberString, MinLength } from "class-validator";

export class PostEnsembleDTO {
    
    @MinLength(1)
    readonly title: string;

    readonly description: string;

    @IsAlpha()
    readonly instrument: string;

    @IsNumberString()
    readonly minimumSkillLevel: string;

    readonly genre: string[];

    constructor(title: string, description: string, instrument: string, minimumSkillLevel: string, genre: string[]) {
        this.title = title;
        this.description = description;
        this.instrument = instrument;
        this.minimumSkillLevel = minimumSkillLevel;
        this.genre = genre;
    }
    
}
