import React from "react";
import {useTranslation} from "react-i18next";

const Button = props=>{
    const {click,disabled,title} = props;
    const {t} = useTranslation();
    return(
        <div>
            <button onClick={click} disabled={disabled}>{t(title)}</button>
        </div>
    )
}
export default Button;
