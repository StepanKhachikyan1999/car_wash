// styles
import "./modals.scss"


import * as React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import cookies from 'js-cookie'

// custom imports
import closeButton from '../../images/closeIcon.svg'
import {useTranslation} from "react-i18next";
import {getComponents, goAddComponent} from "../../redux/actions/componentsAction";
import {useNavigate} from "react-router-dom";
//import {componentsReducer} from "../../redux/reducers/componentsReducer";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function AddComponents({id, addComponent}) {
    const dispatch = useDispatch()
    const {t} = useTranslation()
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false)
    const components = useSelector(state => state.componentsReducer.components)
    const language = cookies.get('i18next')


    useEffect(() => {
        dispatch(getComponents())
    }, [])


    const [data, setData] = useState({
        component_name:''
    })

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        data.device_id = id
        const components_data = components.filter(t => (t.name_en === `${data.component_name}`)
            || (t.name_ru === `${data.component_name}`) || (t.name_am === `${data.component_name}`));
        data.value = components_data[0].id
        data.name_en = components_data[0].name_en
        data.name_am = components_data[0].name_am
        data.name_ru = components_data[0].name_ru
        delete data.component_name
        setData(data)
    }

    const addComponentHandler = e => {
        e.preventDefault()
        if (!data.name_en || !data.name_am || !data.name_ru || !data.value || !data.device_id) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
         dispatch(goAddComponent(data))
            handleClose()
            navigate("/loadingPage");
        }
    }

    return (
        <div>
            <Button
                className="link" onClick={handleOpen}>+ {t('add_components')}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >

                <div className="container_modal">
                    <form onChange={onChangeHandler} onSubmit={addComponentHandler} id="contact">
                        <h3>{t('add_components')}</h3>

                        <fieldset>
                            <div className="select">
                                <select name="component_name" onChange={onChangeHandler}>
                                    <option selected>{t("change_name")}</option>
                                    {
                                        components?.map((component) => {
                                            return(
                                                <option
                                                    name="component_name"
                                                    key={component?.id}>
                                                    {language == "en" && component?.name_en}
                                                    {language == "am" && component?.name_am}
                                                    {language == "ru" && component?.name_ru}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </fieldset>
                        <fieldset>
                            <button type="submit" id="contact-submit">
                                Save
                            </button>
                        </fieldset>
                        <div onClick={handleClose} className="closeBtn">
                            <img src={closeButton} alt="close icon"/>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}