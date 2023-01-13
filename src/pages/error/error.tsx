import React from 'react';
import { useTranslation } from 'react-i18next';

const Error = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1> {t('LABEL_404_MESSAGE')}</h1>
        </div>
    );
}

export default Error;
