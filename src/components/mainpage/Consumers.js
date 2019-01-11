import React, { Component, Fragment } from 'react';
import {
    Paper, Typography, Button,  
} from '@material-ui/core';

class Consumers extends Component {
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
            ПОКУПАТЕЛЯМ
                    </Typography>
                    <img 
                        style = {{ 
                            width: '90%', marginLeft: '5%', marginTop: 20
                        }}
                        src = './img/main_cover_1200.jpeg' alt = 'main_cover_image' 
                    />
                    <Typography
                        align = 'justify'
                        color = 'primary'
                        variant = 'body1'
                        style = {typeBodyStyle}
                    >
            Мы с нашими партнерами, каждый день придумываем для вас подарки. Хотим, что бы у вас была возможность одарить по достоинству любого и по любому поводу. Что-то необычное, яркое и запоминающееся. Думаем что эмоции - самый лучший подарок. Истории которые создают яркие позитивные эмоции мы упаковываем, что бы вы могли их дарить. Такой подарок вы можете отправить как открытку, можете подарить лично, а можете подарить тайно и сохранить интригу. Еще, мы сами любим дарить подарки. Подписывайтесь на нас в соцсетях, участвуйте в конкурсах и получайте наши подарки. Для того, что бы начать поиск подарка выбирайте Ваш город и мы переведем Вас на нужную страничку.

                    </Typography>
            
                    <Button 
                        style = {{ margin: 5}}
                        variant="contained"
                        color="primary"
                    >
            Выбрать подарок
                    </Button>
                </Paper>

            </Fragment>
        );
    }
}

export default Consumers;
