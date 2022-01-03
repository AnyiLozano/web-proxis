import axios from "axios";
import useModels from "models";
import { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useActiveUsers = () => {
    const history = useHistory()

    // Controllers
    const { useSelectors } = useModels();
    const { useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    // States
    const [items, setItems] = useState<any>({});
    const [users, setUsers] = useState<any>([]);
    const [totalPag, setTotalPag] = useState<number>(1);
    const [page, setPage] = useState<number>(1);

    // Handlers
    const getUsers = () : Promise<any> => {
        return axios.get(`${process.env.REACT_APP_BASE_URL_API}/users/get-users`)
        .then((res:any) => {
            console.log(res.data)
            setUsers(res.data.data);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const activeUser = (id: number) : Promise<any> => {
        return axios.get(`${process.env.REACT_APP_BASE_URL_API}/users/active-user?id=${id}`)
        .then((res:any) => {
            if(res.data.transaction.status){
                trackPromise(getUsers())
            }
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const activateUser = (id: number) => {
        trackPromise(activeUser(id));
    }

    const deteleUser = (id: number) : Promise<any> => {
        return axios.get(`${process.env.REACT_APP_BASE_URL_API}/users/delete-user?id=${id}`)
        .then((res:any) => {
            if(res.data.transaction.status){
                trackPromise(getUsers())
            }
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const deletedUser = (id: number) => {
        trackPromise(deteleUser(id));
    }

    // useEffect
    useEffect(() => {
        if(login.token && login.user.role !== "Administrador"){
            history.push('/')
        }
        trackPromise(getUsers());    
        // eslint-disable-next-line
    }, [])

    return {
        users,
        totalPag,
        page,
        activateUser,
        deletedUser
    };
}

export default useActiveUsers;