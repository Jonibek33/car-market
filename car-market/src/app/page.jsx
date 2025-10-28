"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChartNoAxesColumnDecreasing,
  Heart,
  Gift,
  BrainCog,
  Fuel,
  Gauge,
  Timer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./home.scss";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

function Home() {
  return (
    <main>
      <Navbar />

      <div className="cars_with_pts">
        <h1>Автомобили в наличии с ПТС</h1>
        <div className="cards">
          <div className="card">
            <h2>
              Skoda Octavia <br /> 1.6 MPI MT Active{" "}
            </h2>
            <div className="icons">
              <Heart className="icon1" color="#737373" />
              <ChartNoAxesColumnDecreasing className="icon" color="#737373" />
            </div>
            <div className="pred_vigoda">
              <Image
                className="img_predlozhenie"
                src="/predlozhenie_dnya.png"
                alt="Предложение дня"
                height={20}
                width={120}
              />
              <p>
                Выгода <br />
                до 300 000 ₽
              </p>
            </div>
            <div className="podarki">
              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Оборудование <br />{" "}
                  <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  КАСКО <br /> <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Комплект <br /> резины{" "}
                  <span className="red-text">
                    {" "}
                    <br /> в подарок
                  </span>
                </p>
              </div>
            </div>
            <div className="prices">
              <span className="price">от 1 615 000 ₽ </span>
              <span className="credit">Кредит от 115 000 ₽/мес. </span>
            </div>
            <div className="car-specs">
              <span>
                <BrainCog className="icon" />
                <p>115 л.с.</p>
              </span>

              <span>
                <Fuel className="icon" />
                <p>5.3 л/км</p>
              </span>

              <span>
                <Gauge className="icon" />
                <p>189 км/ч</p>
              </span>

              <span>
                <Timer className="icon" />
                <p>10,3 c.</p>
              </span>
            </div>
            <div className="card-actions">
              <button className="reserve-btn">Резерв онлайн</button>
              <button className="buy-btn">Купить</button>
              <button className="info-btn">Подробнее</button>
            </div>
            <Image
              className="img-city"
              src="/city.png"
              alt="#"
              height={150}
              width={200}
            />

            <Image
              className="img-car"
              src="/car.png"
              alt="#"
              height={150}
              width={200}
            />
          </div>
          <div className="card">
            <h2>
              Skoda Octavia <br /> 1.6 MPI MT Active{" "}
            </h2>
            <div className="icons">
              <Heart className="icon1" color="#737373" />
              <ChartNoAxesColumnDecreasing className="icon" color="#737373" />
            </div>
            <div className="pred_vigoda">
              <Image
                className="img_predlozhenie"
                src="/predlozhenie_dnya.png"
                alt="Предложение дня"
                height={20}
                width={120}
              />
              <p>
                Выгода <br />
                до 300 000 ₽
              </p>
            </div>
            <div className="podarki">
              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Оборудование <br />{" "}
                  <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  КАСКО <br /> <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Комплект <br /> резины{" "}
                  <span className="red-text">
                    {" "}
                    <br /> в подарок
                  </span>
                </p>
              </div>
            </div>
            <div className="prices">
              <span className="price">от 1 615 000 ₽ </span>
              <span className="credit">Кредит от 115 000 ₽/мес. </span>
            </div>
            <div className="car-specs">
              <span>
                <BrainCog className="icon" />
                <p>115 л.с.</p>
              </span>

              <span>
                <Fuel className="icon" />
                <p>5.3 л/км</p>
              </span>

              <span>
                <Gauge className="icon" />
                <p>189 км/ч</p>
              </span>

              <span>
                <Timer className="icon" />
                <p>10,3 c.</p>
              </span>
            </div>
            <div className="card-actions">
              <button className="reserve-btn">Резерв онлайн</button>
              <button className="buy-btn">Купить</button>
              <button className="info-btn">Подробнее</button>
            </div>
            <Image
              className="img-city"
              src="/city.png"
              alt="#"
              height={150}
              width={200}
            />

            <Image
              className="img-car"
              src="/car.png"
              alt="#"
              height={150}
              width={200}
            />
          </div>
          <div className="card">
            <h2>
              Skoda Octavia <br /> 1.6 MPI MT Active{" "}
            </h2>
            <div className="icons">
              <Heart className="icon1" color="#737373" />
              <ChartNoAxesColumnDecreasing className="icon" color="#737373" />
            </div>
            <div className="pred_vigoda">
              <Image
                className="img_predlozhenie"
                src="/predlozhenie_dnya.png"
                alt="Предложение дня"
                height={20}
                width={120}
              />
              <p>
                Выгода <br />
                до 300 000 ₽
              </p>
            </div>
            <div className="podarki">
              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Оборудование <br />{" "}
                  <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  КАСКО <br /> <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Комплект <br /> резины{" "}
                  <span className="red-text">
                    {" "}
                    <br /> в подарок
                  </span>
                </p>
              </div>
            </div>
            <div className="prices">
              <span className="price">от 1 615 000 ₽ </span>
              <span className="credit">Кредит от 115 000 ₽/мес. </span>
            </div>
            <div className="car-specs">
              <span>
                <BrainCog className="icon" />
                <p>115 л.с.</p>
              </span>

              <span>
                <Fuel className="icon" />
                <p>5.3 л/км</p>
              </span>

              <span>
                <Gauge className="icon" />
                <p>189 км/ч</p>
              </span>

              <span>
                <Timer className="icon" />
                <p>10,3 c.</p>
              </span>
            </div>
            <div className="card-actions">
              <button className="reserve-btn">Резерв онлайн</button>
              <button className="buy-btn">Купить</button>
              <button className="info-btn">Подробнее</button>
            </div>
            <Image
              className="img-city"
              src="/city.png"
              alt="#"
              height={150}
              width={200}
            />

            <Image
              className="img-car"
              src="/car.png"
              alt="#"
              height={150}
              width={200}
            />
          </div>
          <div className="card">
            <h2>
              Skoda Octavia <br /> 1.6 MPI MT Active{" "}
            </h2>
            <div className="icons">
              <Heart className="icon1" color="#737373" />
              <ChartNoAxesColumnDecreasing className="icon" color="#737373" />
            </div>
            <div className="pred_vigoda">
              <Image
                className="img_predlozhenie"
                src="/predlozhenie_dnya.png"
                alt="Предложение дня"
                height={20}
                width={120}
              />
              <p>
                Выгода <br />
                до 300 000 ₽
              </p>
            </div>
            <div className="podarki">
              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Оборудование <br />{" "}
                  <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  КАСКО <br /> <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Комплект <br /> резины{" "}
                  <span className="red-text">
                    {" "}
                    <br /> в подарок
                  </span>
                </p>
              </div>
            </div>
            <div className="prices">
              <span className="price">от 1 615 000 ₽ </span>
              <span className="credit">Кредит от 115 000 ₽/мес. </span>
            </div>
            <div className="car-specs">
              <span>
                <BrainCog className="icon" />
                <p>115 л.с.</p>
              </span>

              <span>
                <Fuel className="icon" />
                <p>5.3 л/км</p>
              </span>

              <span>
                <Gauge className="icon" />
                <p>189 км/ч</p>
              </span>

              <span>
                <Timer className="icon" />
                <p>10,3 c.</p>
              </span>
            </div>
            <div className="card-actions">
              <button className="reserve-btn">Резерв онлайн</button>
              <button className="buy-btn">Купить</button>
              <button className="info-btn">Подробнее</button>
            </div>
            <Image
              className="img-city"
              src="/city.png"
              alt="#"
              height={150}
              width={200}
            />

            <Image
              className="img-car"
              src="/car.png"
              alt="#"
              height={150}
              width={200}
            />
          </div>
          <div className="card">
            <h2>
              Skoda Octavia <br /> 1.6 MPI MT Active{" "}
            </h2>
            <div className="icons">
              <Heart className="icon1" color="#737373" />
              <ChartNoAxesColumnDecreasing className="icon" color="#737373" />
            </div>
            <div className="pred_vigoda">
              <Image
                className="img_predlozhenie"
                src="/predlozhenie_dnya.png"
                alt="Предложение дня"
                height={20}
                width={120}
              />
              <p>
                Выгода <br />
                до 300 000 ₽
              </p>
            </div>
            <div className="podarki">
              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Оборудование <br />{" "}
                  <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  КАСКО <br /> <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Комплект <br /> резины{" "}
                  <span className="red-text">
                    {" "}
                    <br /> в подарок
                  </span>
                </p>
              </div>
            </div>
            <div className="prices">
              <span className="price">от 1 615 000 ₽ </span>
              <span className="credit">Кредит от 115 000 ₽/мес. </span>
            </div>
            <div className="car-specs">
              <span>
                <BrainCog className="icon" />
                <p>115 л.с.</p>
              </span>

              <span>
                <Fuel className="icon" />
                <p>5.3 л/км</p>
              </span>

              <span>
                <Gauge className="icon" />
                <p>189 км/ч</p>
              </span>

              <span>
                <Timer className="icon" />
                <p>10,3 c.</p>
              </span>
            </div>
            <div className="card-actions">
              <button className="reserve-btn">Резерв онлайн</button>
              <button className="buy-btn">Купить</button>
              <button className="info-btn">Подробнее</button>
            </div>
            <Image
              className="img-city"
              src="/city.png"
              alt="#"
              height={150}
              width={200}
            />

            <Image
              className="img-car"
              src="/car.png"
              alt="#"
              height={150}
              width={200}
            />
          </div>
          <div className="card">
            <h2>
              Skoda Octavia <br /> 1.6 MPI MT Active{" "}
            </h2>
            <div className="icons">
              <Heart className="icon1" color="#737373" />
              <ChartNoAxesColumnDecreasing className="icon" color="#737373" />
            </div>
            <div className="pred_vigoda">
              <Image
                className="img_predlozhenie"
                src="/predlozhenie_dnya.png"
                alt="Предложение дня"
                height={20}
                width={120}
              />
              <p>
                Выгода <br />
                до 300 000 ₽
              </p>
            </div>
            <div className="podarki">
              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Оборудование <br />{" "}
                  <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  КАСКО <br /> <span className="red-text">в подарок</span>
                </p>
              </div>

              <div className="podarok">
                <Gift className="icon" />
                <p>
                  Комплект <br /> резины{" "}
                  <span className="red-text">
                    {" "}
                    <br /> в подарок
                  </span>
                </p>
              </div>
            </div>
            <div className="prices">
              <span className="price">от 1 615 000 ₽ </span>
              <span className="credit">Кредит от 115 000 ₽/мес. </span>
            </div>
            <div className="car-specs">
              <span>
                <BrainCog className="icon" />
                <p>115 л.с.</p>
              </span>

              <span>
                <Fuel className="icon" />
                <p>5.3 л/км</p>
              </span>

              <span>
                <Gauge className="icon" />
                <p>189 км/ч</p>
              </span>

              <span>
                <Timer className="icon" />
                <p>10,3 c.</p>
              </span>
            </div>
            <div className="card-actions">
              <button className="reserve-btn">Резерв онлайн</button>
              <button className="buy-btn">Купить</button>
              <button className="info-btn">Подробнее</button>
            </div>
            <Image
              className="img-city"
              src="/city.png"
              alt="#"
              height={150}
              width={200}
            />

            <Image
              className="img-car"
              src="/car.png"
              alt="#"
              height={150}
              width={200}
            />
          </div>
        </div>
        <button className="show-more">Показать ещё</button>
      </div>
      <div className="collections">
        <div className="title">
          <div className="left">
            <h1>Наши подборки</h1>
            <button>Все подборки</button>
          </div>
          <div className="btns-l-r">
            <button>
              {" "}
              <ChevronLeft className="icon-1" />{" "}
            </button>
            <button>
              {" "}
              <ChevronRight className="icon-2" />{" "}
            </button>
          </div>
        </div>
        <div className="car-variants">
          <div className="car-family">
            <div className="title-btn">
              <p>
                Семейные <br /> автомобили{" "}
              </p>
              <button>Посмотреть</button>
            </div>
          </div>
          <div className="car-journey">
            <div className="title-btn">
              <p>
                Автомобили для
                <br /> путешествий
              </p>
              <button>Посмотреть</button>
            </div>
          </div>
          <div className="car-city">
            <div className="title-btn">
              <p>
                Городские <br /> автомобили{" "}
              </p>
              <button>Посмотреть</button>
            </div>
          </div>
        </div>
        <div className="get-offer">
          <Image
            className="img-boxing-glove"
            src="/boxing-glove.png"
            alt=""
            height={100}
            width={150}
          />
          <div className="form">
            <h2 className="title">Перебьем предложения от конкурентов!</h2>
            <p className="subtitle">
              Скидки <span className="red-text">от 10 до 25%</span> на стоимость
              автомобиля{" "}
            </p>
            <form>
              <input type="text" placeholder="Ваш телефон" />
              <button>Получить предложение</button>
            </form>
            <p className="agreement">
              Нажимая кнопку “Отправить” Вы даете согласие на обработку своих
              персональных данных
            </p>
          </div>
          <Image
            className="img-red-mask"
            src="/red-mask.png"
            alt=""
            height={100}
            width={150}
          />
        </div>
      </div>
      <div className="special-offer">
        <h1>Спецпредложения</h1>
        <div className="cards">
          <div className="card-1">
            <div className="info">
              <p className="title">Первый автомобиль</p>
              <p className="subtitle">1,9% по льготной ставке</p>
            </div>
            <button>Узнать больше</button>
          </div>
          <div className="card-2">
            <div className="info">
              <p className="title">Семейный автомобиль</p>
              <p className="subtitle">1,9% по льготной ставке</p>
            </div>
            <button>Узнать больше</button>
          </div>
          <div className="card-3">
            <div className="info">
              <p className="title">Экспресс-кредит</p>
              <p className="subtitle">1,9% по льготной ставке</p>
            </div>
            <button>Узнать больше</button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
export default Home;
