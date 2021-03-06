export class Device {
    public name: string;
    public oneEnterenceFee: number;
    public fiveEnterenceFee: number;
    public tenEnterenceFee: number;
    public description: string;
    public effects: any;
    public imagePath: string;

    constructor(name: string, oneEnterenceFee: number, fiveEnterenceFee: number, tenEnterenceFee: number, description: string, effects: any, imagePath: string) {
        this.name = name;
        this.oneEnterenceFee = oneEnterenceFee;
        this.fiveEnterenceFee = fiveEnterenceFee;
        this.tenEnterenceFee = tenEnterenceFee;
        this.description = description;
        this.effects = effects;
        this.imagePath = imagePath;
    }
}