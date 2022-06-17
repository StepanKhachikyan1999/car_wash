// styles
import "./navbar.scss";

import * as React from 'react';
import {useEffect, useState} from "react";
import i18next from "i18next";
import cookies from 'js-cookie'

// custom imports
import  am from "../../images/armenia.png"
import  ru from "../../images/russia.png"
import  en from "../../images/united-kingdom.png"


export default function SelectVariants() {
    const languages = [
        {id: 1, lang: 'en',langImg:en},
        {id: 2, lang: 'am',langImg:am},
        {id: 3, lang: 'ru',langImg:ru},
    ]
    const currentLang = cookies.get('i18next')
    const [activeLang, setActiveLang] = useState(currentLang)

    const selectlanguages = (lang) => {
        i18next.changeLanguage(lang)
        setActiveLang(lang)
    }


    // useEffect(() => {
    //     console.log(activeLang)
    // }, [])


    return (
        <div className="language_editor">
             <ul className="languages_slice">
                {
                    languages.map(({id, lang,langImg}) => {
                        return <li
                            key={id}
                            onClick={() => selectlanguages(lang, id)}
                            className={lang === activeLang ? 'language active_language' : 'language'}>
                            <img src={langImg} alt="lang"/>
                        </li>
                    })
                }
             </ul>
        </div>
    );
}
