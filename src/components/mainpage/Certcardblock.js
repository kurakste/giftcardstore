import React, { Component, Fragment } from 'react';
import {
    Paper, Typography, Button 
  } from '@material-ui/core';

class Certcardblock extends Component {

  render() {
    return (
      <Fragment>
        <Paper
          style = {{textAlign: 'center'}}
        >
          <Typography
            align = 'center'
            color = 'primary'
            variant = 'h6'
          >
            СЕРТИФИКАТ
          </Typography>
          <Typography
          align = 'justify'
          color = 'primary'
          variant = 'body1'
          style = {{
            width: '90%', marginLeft: '5%', marginTop: '3%', marginBottom: '3%'
          }}
          >
          Вам подарили похожий сертификат?
            Мы рады что нам доверили Вас поздравить. Сделаем все что бы вы получили удовольствие от вашего подарка. Введите пожалуйста код сертификата.
            </Typography>
          <img 
            style = {{ 
              width: '90%', marginLeft: '5%', marginBottom: 0}}

            src = './img/vaucher-exp.png' 
          />

          <Typography
          align = 'justify'
          color = 'primary'
          variant = 'body1'
          style = {{
            width: '90%', marginLeft: '5%', marginTop: '3%', marginBottom: '3%'
          }}
          >

            Кнопка "Уточнить" переведет вас на страницу с подробным описанием товара. Кнопка "активировать" - активация подарка. Нажмите ее и мы свяжимся для уточнения деталей организации вашего мероприятия.

          </Typography>
          <Button 
            style = {{ margin: 5}}
            variant="contained"
            color="primary"
          >
          Уточнить
          </Button>
          <Button
            style = {{ margin: 5}}
            variant="contained"
            color="primary"
          >
          Активировать
          </Button>
        </Paper>

      </Fragment>
    )
  }
}

export default Certcardblock;


