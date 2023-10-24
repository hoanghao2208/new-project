import Localization from 'translation/modules/Localization';
import {
    LocalizationProps,
    TranslationReceiverProps,
    TranslationLanguage,
} from 'translation/modules/Localization';

export type {
    LocalizationProps,
    TranslationReceiverProps,
    TranslationLanguage,
};

export default Localization;

export { default as useTranslation } from 'translation/modules/useTranslation';
