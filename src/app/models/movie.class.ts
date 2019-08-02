export class Movie{
    public id: number;
    public name: string;
    public link: string;
    public author: string;

    constructor(id: number, name: string, link: string, author: string){
        this.id = id;
        this.name = name;
        this.link = link;
        this.author = author;
    }
}