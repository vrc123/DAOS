export class EnsemblePostsDTO {
    
    readonly title: string;

    readonly description: string;

    readonly instrument: string;

    readonly minimumSkillLevel: string;

    readonly genre: [string]

    constructor(title: string, description: string, instrument: string, minimumSkillLevel: string, genre: [string]) {
        this.title = title;
        this.description = description;
        this.instrument = instrument;
        this.minimumSkillLevel = minimumSkillLevel;
        this.genre = genre;
    }
}