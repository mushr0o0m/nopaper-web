import React from 'react';
import Button from "@/shared/Button";
import {useNavigate} from "react-router-dom";
import {freeSvg, vipSvg, premiumSvg} from "@/pages/Settings/svg";
import styles from './styles/settings.module.css'

const Settings = () => {
    const isAuthorized = true;
    const plan = {
        free: {
            title: 'БЕСПЛАТНЫЙ ПЛАН',
            description: 'ВАМ ДОСТУПНЫ 3 УРОВНЯ',
            image: <img alt='' src={freeSvg}/>,
        },
        vip: {
            title: 'ВЕЧНАЯ ИНДИВИДИУАЛЬНАЯ ПОДПИСКА (ВИП)',
            description: 'СРОК ДЕЙСТВИЯ ПОДПИСКИ НЕ ОГРАНИЧЕН. ДОСТУПЕН ВЕСЬ КОНТЕНТ ПРИЛОЖЕНИЯ БЕЗ ОГРАНИЧЕНИЙ.',
            image: <img alt='' src={vipSvg}/>,
        },
        subscription: {
            title: 'ПРЕМИУМ ПОДПИСКА ПОМЕСЯЧНАЯ',
            description: 'МЫ АВТОМАТИЧЕСКИ СПИШЕМ 190 РУБ С КАРТЫ {*5089} {23 СЕНТЯБРЯ}',
            image: <img alt='' src={premiumSvg}/>,
        },
    }
    const currentStatus = plan.subscription;

    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate(-1)
    }

    return (
        <div className={styles.settingsPage}>
            <Button
                className={styles.returnButton}
                onClick={() => goBackHandler()}>
                Назад
            </Button>
            {!isAuthorized ? (
                <div className={styles.settingsContent}>
                    <p className={styles.bigTitle}>Настройки</p>
                    <div className={styles.unauthBtnsList}>
                        <Button
                            className={styles.settingsBtn}
                            linkTo={'/auth'}>
                            Авторизоваться
                        </Button>
                        <Button
                            className={styles.settingsBtn}
                            linkTo={''}>
                            Инструкция
                        </Button>
                        <Button
                            className={styles.settingsBtn}
                            linkTo={''}>
                            Написать нам
                        </Button>
                    </div>
                </div>
            ) : (
                <div className={styles.settingsContent}>
                    <p className={styles.smallTitle}>Настройки</p>
                    <div className={styles.authContent}>
                        <div className={styles.planInfo}>
                            {currentStatus.image}
                            <p className={styles.planTitle}>{currentStatus.title}</p>
                            <p className={styles.planDescription}>{currentStatus.description}</p>

                            {currentStatus === plan.free ? (
                                <div>
                                    <p className={styles.planNote}>
                                        ДЛЯ ДОСТУПА КО ВСЕМ УРОВНЯМ (30) НЕОБХОДИМО
                                    </p>
                                    <Button linkTo={''}>Купить подписку</Button>
                                </div>
                            ) : currentStatus === plan.subscription ? (
                                <a className={styles.actButton}>ОТМЕНИТЬ ПОДПИСКУ</a>
                            ) : ''}
                        </div>
                        <div>
                            <p className={styles.userMail}>ALEXANDRA@GMAIL.COM</p>
                            <a className={styles.actButton}>Выйти из аккаунта</a>
                            <Button
                                className={styles.settingsBtn}
                                linkTo={''}>
                                Инструкция
                            </Button>
                            <Button
                                className={styles.settingsBtn}
                                linkTo={''}>
                                Написать нам
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Settings;
