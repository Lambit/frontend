import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <div className='fixed-bottom text-center p-4 text-light'>
      {t('title')} &copy; 2022 - {t('foot')}
    </div>
  );
};