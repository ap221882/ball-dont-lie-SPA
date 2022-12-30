import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          appHeading: {
            title: 'NBA Teams',
          },
          tableColumns: {
            column1: 'Team Name',
            column2: 'City',
            column3: 'Abbreviation',
            column4: 'Conference',
            column5: 'Division',
          },
          drawerLabels: {
            header: {
              label1: 'Team full name',
              label2: 'Total Games in 2021',
            },
            randomGameDetail: {
              heading: 'Random Game Details',
              row1: 'Date',
              row2: 'Home Team',
              row3: 'Home Team Score',
              row4: 'Visitor Team',
              row5: 'Visitor Team Score',
            },
          },
        },
      },
    },
  });

export default i18n;
