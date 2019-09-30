export class Todo {

    public id?: number ;
    public name: string ;
    public isComplete: boolean

    constructor(
     _id: number | undefined ,
     _name: string ,
     _isComplete: boolean
    ){
     this.id=_id;   
     this.name=_name;
     this.isComplete=_isComplete;

    }

    

}
