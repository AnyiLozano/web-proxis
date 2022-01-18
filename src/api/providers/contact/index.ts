import axios, { AxiosResponse } from "axios";

//Interfaces
import { IContactData } from "models/interfaces/contact";
import { IResponse } from "models/interfaces/general";

const useContactProviders = () => {
    const sendContact = (data: IContactData) : Promise<AxiosResponse<IResponse>> => axios.post('/contact/send-contact', data);

    return {
        sendContact,
    }
}

export default useContactProviders;