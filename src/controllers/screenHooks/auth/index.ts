import useApi from "api";
import useModels from "models";
import { ILoginAction, IRecoverPasswordAction, IRegisterAction } from "models/interfaces/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"

const useAuth = () => {
    // Actions
    const { useActions } = useApi();
    const { dispatch, useAuthActions } = useActions();
    const { actLogin, actRecover, actRegister } = useAuthActions();

    // Selectors
    const { useSelectors } = useModels();
    const { useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const login = useSelector(loginSelector);

    // States
    const [open, setOpen] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [variant, setVariant] = useState<string>("success");

    // History
    const history = useHistory();

    // Use Form
    const {
        register,
        handleSubmit
    } = useForm();

    // Handlers
    const handleLogin = (data: any) => {
        if(data.email !== "" && data.password !== ""){
            let formData = new FormData();
            formData.append('email', data.email);
            formData.append('password', data.password);
            const request : ILoginAction = {
                login: formData,
                onSuccess: () => {
                    setOpen(true);
                    setText("Bienvenido otra vez!");
                    setVariant("success");

                    setTimeout(() => {
                        history.push('/')
                    }, 5000)
                },
                onError: (error: any) => {
                    setOpen(true);
                    setText(error);
                    setVariant("error");
                }
            }

            dispatch(actLogin(request));
        }else{
            setOpen(true);
            setText("Debes llenar todos los datos para poder ingresar");
            setVariant("error");
        }
    }

    // Use Form
    const {
        control: registerRegister,
        handleSubmit: handleSubmitRegister
    } = useForm();

    // Handlers
    const handleRegister = (data: any) => {
        if(
            data.email !== "" && 
            data.password !== "" &&
            data.name !== "" && 
            data.last_name !== "" &&
            data.profesion !== "" && 
            data.username !== "" &&
            data.phone
        ){
            let formData = new FormData();
            formData.append('email', data.email);
            formData.append('last_name', data.last_name);
            formData.append('name', data.name);
            formData.append('password', data.password);
            formData.append('phone', data.phone);
            formData.append('profesion', data.profesion);
            formData.append('username', data.username);

            const request : IRegisterAction = {
                register: formData,
                onSuccess: () => {
                    setOpen(true);
                    setText("Gracias! ahora puedes ingresar a nuestra plataforma");
                    setVariant("success");

                    setTimeout(() => {
                        history.push('/login')
                    }, 5000)
                },
                onError: (error: any) => {
                    setOpen(true);
                    setText(error);
                    setVariant("error");
                }
            }

            dispatch(actRegister(request));
        }else{
            setOpen(true);
            setText("Debes llenar todos los datos para poder registrarte");
            setVariant("error");
        }
    }

    // Use Form
    // const {
    //     control: registerRecover,
    //     handleSubmit: handleSubmitRecover
    // } = useForm();

    // Handlers
    // const handleRecover = (data: any) => {
    //     if(
    //         data.email !== "" && 
    //         data.password !== "" 
    //     ){
    //         if(data.password === data.confirm_password){
    //             const request : IRecoverPasswordAction = {
    //                 recover: data,
    //                 onSuccess: () => {
    //                     setOpen(true);
    //                     setText("Gracias! ahora puedes ingresar a nuestra plataforma");
    //                     setVariant("success");
    
    //                     setTimeout(() => {
    //                         history.push('/login')
    //                     }, 5000)
    //                 },
    //                 onError: (error: any) => {
    //                     setOpen(true);
    //                     setText(error);
    //                     setVariant("error");
    //                 }
    //             }
    
    //             dispatch(actRecover(request));
    //         }
    //     }else{
    //         setOpen(true);
    //         setText("Debes llenar todos los datos para poder recuperar la contraseña");
    //         setVariant("error");
    //     }
    // }

    const handleClose = () => {
        setOpen(false);
        setText("");
    }

    return {
        login,
        register,
        handleLogin,
        handleSubmit,
        open,
        text,
        variant,
        handleClose,
        handleRegister,
        registerRegister,
        handleSubmitRegister
    };
}

export default useAuth;