export class Task {
    public id: number;
    public texto: string;
    public completed: boolean;
    public uri: string;

    constructor(texto: string, completed?: boolean,uri?: string) {
        this.id = Math.random();
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        completed ? this.completed = completed : this.completed = false;
        uri ? this.uri = uri : this.uri = 'https://i.pinimg.com/originals/24/58/5f/24585fc9b7433a224a6ff5506e346969.png';
    }
}