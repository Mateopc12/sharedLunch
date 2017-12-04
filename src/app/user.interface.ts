export interface IUser {
    active: boolean;
    currentMatch: string;
    email: string;
    firstName: string;
    lastName: string;
    location: number;
    matchConfirmed: boolean;
    matches: IMatch;
}

export interface IMatch {
    id: string;
    amount: number;
}
