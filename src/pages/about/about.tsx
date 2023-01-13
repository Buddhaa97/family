import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SAboutPage } from './styles/about-styles';

const About = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

  return (
    <SAboutPage>
        <h1>About</h1>
        <button onClick={() => navigate('/about-detail')}>{t('LABEL_ABOUT_DETAIL')}</button>
    </SAboutPage>
  )
}
export default About;
