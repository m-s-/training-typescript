import {ParentClass} from "./parent";
import {ChildType} from "../enums/ChildType";

/**
 * Child Class
 */
export class ChildClass extends ParentClass{
    public type: ChildType;

    constructor(){
        super();
    }
}

// Show the difference between Extends and implements
 
/* export class ChildInterface implements ParentClass{

} */