import {  NavLink, } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AppLink = (props) => {
    const { to, onClick, text } = props;
    const { t } = useTranslation();

    return (
        <>
            <NavLink
                to={to}
                onClick={onClick}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                }     
                style={({ isActive, isPending }) => {
                    return {
                      borderColor: isActive ? 'orangered' : 'yellow',
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? 'orangered' :'yellow',
                      padding: '10px',
                      marginLeft: '14px',
                      marginRight: '14px',
                      borderWidth: '2px',
                      textDecoration: 'none',
                      borderStyle: 'solid',
                      borderRadius: '20%'
                    };
                }}>
                    {t(`${text}`)}
            </NavLink>
        </>
    )
};
export default AppLink;