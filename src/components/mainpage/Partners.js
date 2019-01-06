import React, { Component, Fragment } from 'react';
import {
    Paper, Typography, Button 
  } from '@material-ui/core';

import FormattedInput from './PhoneInput';

class Partners extends Component {
  render() {
    const typeBodyStyle = {
      width: '90%', marginLeft: '5%', marginTop: '3%', marginBottom: '3%'
    };
    return (
      <Fragment >
        <Paper
          style = {{marginTop: 10, textAlign: 'center', paddingTop: '5%', paddingBottom: '5%'}}
        >
          <Typography
            align = 'center'
            color = 'primary'
            variant = 'h6'
          >
            Партнерам
          </Typography>
          <img 
            style = {{ 
              width: '30%', marginLeft: '5%', marginTop: 20
            }}
            src = './img/partnership.jpg' 
            alt = 'partners'

            />
            <Typography
            align = 'justify'
            color = 'primary'
            variant = 'body1'
            style = {typeBodyStyle}
            >Мы находим новых клиентов для наших партнеров. Фотографии, видео контент, дизайн, истории и привлечение трафика - это наша работа. Мы упакуем услугу и она станет стильным подарком. Продажи - это то, что мы любим и умеем. Партнерам мы предлагаем новый канал продаж. Например у вас сейчас есть картинг клуб в котором можно покататься на классных картах. Мы знаем как продать вас людям которые никогда не думали о картингах, но им нужен необычный подарок. На день рождения, на день нефтяника или как награду для лучшего отдела в организации. Вас смогут подарить - это совершенно новые для вас клиенты. Их не было у вас раньше. Они о вас не думали. Если вы при этом сумеете им понравиться - они к вам вернуться много раз и приведут своих друзей. Через нас или напрямую к вам. Хотите попробовать? Оставьте свой контакт и сообщите удобное для вас время - мы свяжемся с вами.

          </Typography>
          <div>
          <FormattedInput />
          </div>
          <Button 
            style = {{ margin: 5}}
            variant="contained"
          >
            Заказать звонок
          </Button>
        </Paper>

      </Fragment>
    )
  }
}

export default Partners;
