import { useState } from "react";

const useProducts = () => {
    const products = [
        {
            id: 1,
            title: "Indicaciones y áreas de aplicación",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. ",
            image: "http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-4-1.png"
        },
        {
            id: 2,
            title: "Características",
            description: [
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut "
            ],
            image: "http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-4-1.png"
        },
        {
            id: 3,
            title: "Ventajas",
            description: [
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut ",
                " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut "
            ],
            image: "http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-4-1.png"
        },
        {
            id: 4,
            image: "http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-5-5.png  "
        },
    ];

    const bibliografias = {
        title: "Tipos de tejido en una herida",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut. ",
        image: "http://localhost/api-proxis/wp-content/uploads/2021/12/Recurso-6-1.png"
    }

    // States
    const [width, setWidth] = useState<number>(window.innerWidth);

    // Listeners
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return {
        products,
        width,
        bibliografias,
    };
}

export default useProducts;