export interface IAssets {
    logo: string
}

export interface IDispatch {
    type: string,
    payload: any
}

export interface ITransaction {
    status: boolean;
}

export interface IMessage {
    type: string;
    content: string;
    code: number;
}

export interface IResponse {
    status: ITransaction;
    message: IMessage;
    data: any | Array;
}