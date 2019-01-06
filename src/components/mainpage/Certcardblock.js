import React, { Component, Fragment } from 'react';
import {
    Paper, Typography, Button, TextField 
  } from '@material-ui/core';

class Certcardblock extends Component {
  render() {
    const typeBodyStyle = {
      width: '90%', marginLeft: '5%', marginTop: '3%', marginBottom: '3%'
    };
    return (
      <Fragment>
        <Paper
          style = {{textAlign: 'center', paddingTop: '5%', paddingBottom: '5%'}}
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
          style = {typeBodyStyle}
          >
          Вам подарили похожий сертификат?
            Мы рады что нам доверили Вас поздравить. Сделаем все что бы вы получили удовольствие от вашего подарка. 
            </Typography>
          <img 
            style = {{ 
              width: '90%', marginLeft: '5%', marginBottom: 0}}
              src = './img/vaucher-exp.png' 
              alt = 'gift_cards'
          />
            
          <Typography
          align = 'justify'
          color = 'primary'
          variant = 'body1'
          style = {typeBodyStyle}
          >
          
          </Typography>

         <TextField
            id="standard-full-width"
            label="Введите код сертификата:"
            style={{ margin: 8, width: '80%' }}
            placeholder="XXXX-XXXXXX"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
        />
          <Typography
          align = 'justify'
          color = 'primary'
          variant = 'body1'
          style = {typeBodyStyle}
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


