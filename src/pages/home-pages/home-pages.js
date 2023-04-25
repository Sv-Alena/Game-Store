import React from "react";
import { ProductItems } from "../../components/product-items/product-items";
import './home-pages.css';


const PRODUCTS = [

{   id: 1,
    image:'/img/battlefield_2042.jpg',
    title: 'Battlefield 2042',
    genres: ['Экшен', 'Шутер', 'Война'],
    video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
    price: 2433,
    description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
},

{   id: 2,
    image: '/img/forza_5.jpeg',
    title: 'Forza Horizon 5',
    genres: ['Гонки', 'Симулятор', 'Открытый мир'],
    price: 2343,
    video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
},
{   id: 3,
    image:'/img/gta_v.jpeg',
    title: 'Grand Theft Auto V',
    genres: ['Открытый мир', 'Экшен'],
    video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    price: 789,
    description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
},

{   id: 4,
    image:'/img/life_is_strange_true_colors.jpeg',
    title: 'Life is Strange True Colors',
    genres: ['Глубокий сюжет', 'Протагонистка'],
    video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
    price: 3021,
    description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
},

{   id: 5,
    image:'/img/rainbow_siege.jpeg',
    title: 'Tom Clancy\'s Rainbow Six® Siege',
    video: 'https://www.youtube.com/embed/6wlvYh0h63k',
    genres: ['Тактика', 'Шутер'],
    price: 982,
    description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
},

{   id: 6,
    image:'/img/assassins_creed_valhalla.png',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
},
]

export const HomePages = () => {
    return(
        <div className="home-pages">
            { PRODUCTS.map(product => <ProductItems product={product} key={product.id}/>)}
            
        </div>
    )
}


