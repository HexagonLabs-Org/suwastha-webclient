import { SectionloginModel } from "../Entities/sectionlogin.model";

export interface AuthSectionloginresponse {
    SectionLogin: SectionloginModel;
    Authentication:Authentication;
}

interface Authentication{
    token:string,
    id:string,
    expiresIn:string
}