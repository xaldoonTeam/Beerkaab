export interface userRegisterInterface {
    full_name: string;
    email: string;
    password: string;
    type_id:number
    company_id: string
  }
  
  export const errorMsg = 'Uh sorry the server is Down.';
  export const Url = 'http://localhost:3000';