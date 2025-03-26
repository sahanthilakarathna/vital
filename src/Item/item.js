import React from "react";
import './item.css';
import {useTranslation} from "react-i18next";

const Item = props =>{
    const {data,age} = props;
    const {t} = useTranslation();
    let date = new Date(data.dob.date);
    let newDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return(
        <div className={'main'}>
            <div>
                <img className={'image'} src={data.picture.large} alt="image"/>
            </div>
            <div className={'name'}>
                <p>{t('Name')}:</p>
                <p>{data.name.first}{' '}{data.name.last}</p>
            </div>
            <div className={'city'}>
                <p>{t('City')}:</p>
                <p>{data.location.city}</p>
            </div>
            <div className={'dob'}>
                <p>{t('Dob')}:</p>
                <p>{newDate}</p>
            </div>
            <div className={'age'}>
                <p>{t('Age')}:</p>
                <p>{age ? age.age : null}</p>
            </div>
        </div>
    )
}
export default Item;
