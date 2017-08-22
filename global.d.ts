declare type ZipCode = number;
declare type Name = { first: string, last: string, middleInitial?: string};
declare type Email = { primary: string, secondary?: string };
declare type Address = { street: string, streetAdditional?: string, city: string, state: string, zip: ZipCode};
declare type Phone = { primary: string, secondary?: string };