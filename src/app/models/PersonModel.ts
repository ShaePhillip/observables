export class PersonModel{
    name: string | undefined ;
    cell: string | undefined ; 
    blackListed? : boolean = false ; 
    hired? : boolean = false ;
    
    constructor(){console.log("loaded");
    }
}

