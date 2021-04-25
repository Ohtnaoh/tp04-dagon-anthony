export class Person {
    id?: string;
    lastname?: string;
    firstname?: string;
    address?: string;
    postalCode?: string;
    login?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    salutation?: string;

    constructor(id: string, lastname: string, firstname: string, address: string, postalCode: string,
        login: string, email: string, password: string, phoneNumber: string, salutation: string) 
        { 
            this.id=id;
            this.lastname=lastname;
            this.firstname=firstname;
            this.address=address;
            this.postalCode=postalCode;
            this.login=login;
            this.email=email;
            this.password=password;
            this.phoneNumber=phoneNumber;
            this.salutation=salutation;
        }
        
  }