export const wrapperStyle = () => {

    return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
}

export const errorStyle = () => {

    return {
        fontSize: "12px",
        color: "red",
        width: "100%",
        textAlign: "center",
    }
}

export const titleStyle = () => {

    return {
        fontSize: "42px",
        color: "#2da7ff",
        width: "100%",
        textAlign: "center",
    }
}

export const subtitleStyle = () => {

    return {
        width: "100%",
        fontSize: "14px",
        textAlign: "center",
        margin: "0px",
    }
}

export const userContainerStyle = () => {

    const mq = [`@media (min-width : 320px) and (max-width: 767px)`];

    return {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        [mq[0]]: {
            flexDirection: "column",
            alignItems: "center",
        }
    }
}

export const userWrapperStyle = () => {

    return {
        display: "flex",
        width: "150px",
        margin: "10px",
        justifyContent: "space-around",
        alignItems: "center",
        background: "#333",
        borderRadius: "10px",
        color: "white",
        padding: "6px 10px",
        cursor: "pointer",
        "p": {
            margin: "0"
        }
    }
}

export const thumbnailWrapperStyle = () => {

    return {
        width: "36px",
        height: "36px",
    }
}

export const uidWrapperStyle = () => {

    return {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "div": {
            width: "100%"
        }
    }
}

export const inputWrapperStyle = () => {

    return {
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "input": {
            outline: "none",
            margin: "10px 30px",
            padding: "8px 10px",
            borderRadius: "5px",
            border: "1px solid #bbb"
        }
    }
}

export const loginBtn = () => {

    return {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "button": {
            outline: "none",
            backgroundColor: "#333",
            borderRadius: "10px",
            color: "white",
            padding: "10px 25px",
            "&:hover": {
                cursor: "pointer",
            }
        },

    }
}

export const form = () => {
    return {
        width: "450px !important",
        minHeight: "500px !important",
        height: "auto !important",
        borderRadius: "5px !important",
        margin: "2% auto !important",
        boxShadow: "0 9px 50px hsla(20, 67%, 75%, 0.31) !important",
        padding: "2% !important",
        backgroundImage: "linear-gradient(-225deg, #e3fdf5 50%, #ffe6fa 50%) !important"
    }
}

export const form_con = () => {
    return {
        display: "flex !important",
        justifyContent: "space-around !important",
        flexWrap: "wrap !important",
        margin: "0 auto !important"
    }
}

export const header = () => {
    return {
        margin: "2% auto 10% auto !important",
        textAlign: "center !important"
    }
}

export const header_h2 = () => {
    return {
        fontSize: "250% !important",
        fontFamily: '"Playfair Display", serif !important',
        color: "#3e403f !important",
    }
}

export const header_p = () => {
    return {
        letterSpacing: "0.05em !important",
    }
}

export const input_item = () => {
    return {
        background: "#fff !important",
        color: "#333 !important",
        padding: "18px 0px 16px 9px !important",
        borderRadius: "5px 0px 0px 5px !important",
    }
}

export const input_item1 = () => {
    return {
        background: "#fff !important",
        color: "#333 !important",
        padding: "17px 0px 17px 9px !important",
        borderRadius: "5px 0px 0px 5px !important",
    }
}

export const eye = () => {
    return {
        background: "#fff !important",
        color: "#333 !important",
        margin: "5.9px 0 0 0 !important",
        marginLeft: "-20px !important",
        padding: "18px 9px 18px 0px !important",
        borderRadius: "0px 5px 5px 0px !important",
        float: "right !important",
        position: "relative !important",
        right: "1% !important",
        /* top: -0.2% !important, */
        zIndex: "5 !important",
      
        cursor: "pointer !important",
    }
}

export const input_form_input = () => {
    return {
        width: "240px !important",
        height: "50px !important",
        marginTop: "2% !important",
        padding: "15px !important",
        fontSize: "16px !important",
        fontFamily: '"Abel", sans-serif !important',
        color: "#5e6472 !important",
        outline: "none !important",
        border: "none !important",
        borderRadius: "0px 5px 5px 0px !important",
        transition: "0.2s linear !important",
    }
}

export const input_txt_input = () => {
    return {
        width: "255px !important",
        height: "50px !important",
        marginTop: "2% !important",
        padding: "15px !important",
        fontSize: "16px !important",
        fontFamily: '"Abel", sans-serif !important',
        color: "#5e6472 !important",
        outline: "none !important",
        border: "none !important",
        borderRadius: "0px 5px 5px 0px !important",
        transition: "0.2s linear !important",
    }
}

export const button = () => {
    return {
        display: "inline-block !important",
        color: "#252537 !important",
      
        width: "280px !important",
        height: "50px !important",
      
        padding: "0 20px !important",
        background: "#fff !important",
        borderRadius: "5px !important",
      
        outline: "none !important",
        border: "none !important",
      
        cursor: "pointer !important",
        textAlign: "center !important",
        transition: "all 0.2s linear !important",
      
        margin: "7% auto !important",
        letterSpacing: "0.05em !important",
    }
}

export const submits = () => {
    return {
        width: "48% !important",
        display: "inline-block !important",
        float: "left !important",
        marginLeft: "2% !important",
        display: "inline-block !important",
        color: "#252537 !important",
        height: "50px !important",
      
        padding: "0 20px !important",
        background: "#fff !important",
        borderRadius: "5px !important",
      
        outline: "none !important",
        border: "none !important",
      
        cursor: "pointer !important",
        textAlign: "center !important",
        transition: "all 0.2s linear !important",
      
        margin: "7% auto !important",
        letterSpacing: "0.05em !important",
        background: "transparent !important",
    }
}

export const frgt_pass = () => {
    return {
        background: "transparent !important",
    }
}

export const sign_up = () => {
    return {
        background: "#b8f2e6 !important",
        display: "inline-block !important",
        color: "#252537 !important",
        height: "50px !important",
        padding: "0 20px !important",
        borderRadius: "5px !important",
        outline: "none !important",
        border: "none !important",
        cursor: "pointer !important",
        textAlign: "center !important",
        transition: "all 0.2s linear !important",
        margin: "7% auto !important",
        letterSpacing: "0.05em !important",
    }
}

export const body = () => {
    return {
        backgroundImage: "linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%)",
        backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        fontFamily: '"Vibur", cursive',
        fontFamily: '"Abel", sans-serif',
        opacity: "0.95"
    }
}