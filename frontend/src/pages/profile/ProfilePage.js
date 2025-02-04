/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from '../../components/Menu/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './ProfilePage.module.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import API from '../../api/api';
import StatusProjectTag from '../../components/StatusProjectTag/StatusProjectTag';
import ThemeProjectTag from '../../components/ThemeProjectTag/ThemeProjectTag';

import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';

import localforage from 'localforage';

export default function ProfilePage() {
  const [profileActive, setprofileActive] = useState(true);
  const [myStartupsActive, setmyStartupsActive] = useState(false);
  const [mySubsActive, setmySubsActive] = useState(false);

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [patronymic, setPatronymic] = useState('')
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState('')
  const [email, setEmail] = useState('')
  useEffect(() => {
    const getUserDetails = async () => {
      const userIdStorage = await localforage.getItem('user_id');

      const userDetailResponse = await API.get(`/user/${userIdStorage}`)
      setName(userDetailResponse.data.detail.first_name)
      setSurname(userDetailResponse.data.detail.second_name)
      setPatronymic(userDetailResponse.data.detail.patronymic)
      setPhone(userDetailResponse.data.detail.phone)
      setPosition(userDetailResponse.data.detail.position)
      setEmail(userDetailResponse.data.email)
    }
    getUserDetails();
  }, []);

  const handleProfileTabIsClicked = () => {
    setprofileActive(true);
    setmyStartupsActive(false);
    setmySubsActive(false);
  };

  const handleStartupsTabIsClicked = () => {
    setprofileActive(false);
    setmyStartupsActive(true);
    setmySubsActive(false);
  };

  const handleSubsTabIsClicked = () => {
    setprofileActive(false);
    setmyStartupsActive(false);
    setmySubsActive(true);
  };

  useEffect(() => { }, []);

  const [defaultData, setdefaultData] = useState([1,2,3,4,5,6])

  return (
    <div className={styles.mainGrid}>
      <Header />
      <div className={styles.headerContainer}>
        <h2
          className={`${styles.boldHeader} ${styles.profileHeader} ${profileActive === true ? styles.profileHeaderActive : ''
            }`}
          onClick={handleProfileTabIsClicked}>
          Профиль
        </h2>
        <h2
          className={`${styles.boldHeader} ${styles.myStartupsHeader} ${myStartupsActive === true ? styles.myStartupsHeaderActive : ''
            }`}
          onClick={handleStartupsTabIsClicked}>
          Мои стартапы
        </h2>
        <h2
          className={`${styles.boldHeader} ${styles.mySubscribesHeader} ${mySubsActive === true ? styles.mySubscribesHeaderActive : ''
            }`}
          onClick={handleSubsTabIsClicked}>
          Мои подписки
        </h2>
      </div>

      <div className={`${styles.formContainer}`}>
        {profileActive && (
          <>
            <Avatar className={styles.avatar} />
            <div className={`${styles.firstLine}`}>
              <TextField
                className={styles.input}
                id='outlined-basic'
                label='Имя'
                variant='outlined'
                value={name}
              />
              <TextField
                className={styles.input}
                id='outlined-basic'
                label='Фамилия'
                variant='outlined'
                value={surname}
              />
              <TextField
                className={styles.input}
                id='outlined-basic'
                label='Номер телефона'
                variant='outlined'
                value={phone}
              />
              <TextField
                className={styles.input}
                id='outlined-basic'
                label='E-mail'
                variant='outlined'
                value={email}
              />
              <Button
                className={styles.muiEditButton}
                variant='text'
                startIcon={<EditIcon />}>
                Редактировать данные
              </Button>
            </div>
            <div className={`${styles.secondLine}`}>
              <TextField
                className={styles.input}
                id='outlined-basic'
                label='Пароль'
                variant='outlined'
                type='password'
                value={123456}
              />
              <Button
                className={styles.muiEditButton}
                variant='text'
                startIcon={<EditIcon />}

              >

                Изменить пароль
              </Button>
            </div>
          </>
        )}
        {myStartupsActive && (
          <>
            <div className={`${styles.ProjectCardsContainer}`}>
              {defaultData.map(() => (
                <Card className={styles.card} variant='outlined'>
                  <div className={styles.tagsContainer}>
                    <div className={styles.statusProjectTagContainer}>
                      {<StatusProjectTag status={3} />}
                    </div>
                    <div className={styles.themeProjectTagContainer}>
                      {<ThemeProjectTag theme={1} />}
                    </div>
                  </div>
                  <h1 className={styles.cardHeader}>
                    Обогреваемые остановки наземного транспорта
                  </h1>
                  <p className={styles.cardText}>
                    За последние 7 лет я создал самый передовой в мире разговорный
                    ИИ с открытым доменом для Replika - чат-бота №1 в США с более
                    чем 10 миллионами пользователей.
                  </p>
                  <div className={styles.cardFooter}>
                    <div className={styles.projectStatsContainer}>
                      <div className={styles.projectComments}>
                        <ChatBubbleOutlineIcon className={styles.iconComment} />
                        <span className={styles.statsAmount}>10</span>
                      </div>
                      <div className={styles.projectRate}>
                        <StarBorderIcon className={styles.iconStar} />
                        <span className={styles.statsAmount}>9/10</span>
                      </div>
                      <div className={styles.projectDate}>
                        <CalendarTodayIcon />
                        <span className={styles.statsAmount}>10.11.2021</span>
                      </div>
                    </div>
                    <div className={styles.projectButtonsContainer}>
                      <Button
                        className={styles.muiReadMoreButton}
                        variant='contained'>
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

            </div>
          </>
        )}
        {mySubsActive && (
          <>
            <div className={`${styles.firstLine}`}>
              <h3 className={`${styles.smallSectionHeader}`}>
                Подписка на рассылки
              </h3>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='Новые проекты по моему профилю'
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='Изменения статуса проектов из избранного'
                />
              </FormGroup>
            </div>
            <div className={`${styles.secondLine}`}>
              <h3 className={`${styles.smallSectionHeader}`}>
                Новые проекты и сообщения от авторов
              </h3>
              <p className={`${styles.smallSectionSubtitle}`}>
                Выберите канал для получения уведомлений
              </p>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label='E-mail' />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='Telegram'
                />
              </FormGroup>
            </div>
            <div className={`${styles.thirdLine}`}>
              <h3 className={`${styles.smallSectionHeader}`}>
                Ваши активные подписки:
              </h3>
              <div className={`${styles.subscriptionCard}`}>
                <span>Городской транспорт, Метрополитен</span>
                <div className={`${styles.subscriptionIconsBox}`}>
                  <PauseIcon className={`${styles.subscriptionIcon}`} />
                  <CloseIcon className={`${styles.subscriptionIcon}`} />
                </div>
              </div>
              <div className={`${styles.subscriptionCard}`}>
                <span>Городской транспорт, Наземный транспорт</span>
                <div className={`${styles.subscriptionIconsBox}`}>
                  <PauseIcon className={`${styles.subscriptionIcon}`} />
                  <CloseIcon className={`${styles.subscriptionIcon}`} />
                </div>
              </div>
              <div className={`${styles.subscriptionCard}`}>
                <span>Новые виды мобильности</span>
                <div className={`${styles.subscriptionIconsBox}`}>
                  <PlayArrowIcon className={`${styles.subscriptionIcon}`} />
                  <CloseIcon className={`${styles.subscriptionIcon}`} />
                </div>
              </div>
              <Button
                className={styles.muiEditButton}
                variant='text'
                startIcon={<AddIcon />}>
                Добавить ещё
              </Button>
            </div>
            <Button className={`${styles.muiSaveButton}`} variant='contained'>
              Сохранить изменения
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
