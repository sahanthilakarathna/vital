import React, {useContext} from 'react';
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";

const Language = props =>{

    const { locale } = useContext(LocaleContext);
    function changeLocale (l) {
        console.log(l)
        if (locale !== l.target.value) {
            i18n.changeLanguage(l.target.value);
        }
    }
    console.log('llll',locale)
    return(
       <div>
           Change Language:
           <select onChange={changeLocale} defaultValue={locale} >
               <option value={'en'}>English</option>
               <option value={'ar'}>عربى</option>
               <option value={'si'}>සිංහල</option>
           </select>
       </div>
    )
}
export default Language;
