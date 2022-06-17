import React from 'react';
import {useTranslation} from "react-i18next";

const AddedUsers = () => {
    const {t} = useTranslation()
    return (
        <div style={{fontSize:"18px",color:"#be0303",FontFamily:"KoHo"}}>
            {t('dashboard_table.not_user')}
        </div>
    );
};

export default AddedUsers;