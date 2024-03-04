import {useCallback} from "react";
import {useTranslation} from "react-i18next";

const TranslationSelect = () => {
    const {i18n} = useTranslation();

    const onChange = useCallback((e) => {
        i18n.changeLanguage(e.target.value);
    }, [])

    return <select onChange={onChange}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
    </select>;
}

export default TranslationSelect;