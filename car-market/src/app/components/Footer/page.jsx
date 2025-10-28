"use client";

import { Dropdown } from "@mui/joy";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock4, MapPin } from "lucide-react";
import DropDown from "../DropDown/page";

function Footer() {
  const links = [
    { name: "Kia", path: "/catalog/kia" },
    { name: "Hyundai", path: "/catalog/hyundai" },
    { name: "Skoda", path: "/catalog/skoda" },
    { name: "Volkswagen", path: "/catalog/volkswagen" },
    { name: "Toyota", path: "/catalog/toyota" },
    { name: "Brilliance", path: "/catalog/brilliance" },
    { name: "Changan", path: "/catalog/changan" },
    { name: "Chery", path: "/catalog/chery" },
    { name: "CheryExeed", path: "/catalog/cheryexeed" },
    { name: "Chevrolet", path: "/catalog/chevrolet" },
    { name: "Citroen", path: "/catalog/citroen" },
    { name: "Datsun", path: "/catalog/datsun" },
    { name: "Dongfeng", path: "/catalog/dongfeng" },
    { name: "DW Hower", path: "/catalog/dwhower" },
    { name: "FAW", path: "/catalog/faw" },
    { name: "Ford", path: "/catalog/ford" },
    { name: "Foton", path: "/catalog/foton" },
    { name: "Geely", path: "/catalog/geely" },
    { name: "Great Wall", path: "/catalog/greatwall" },
    { name: "Haima", path: "/catalog/haima" },
    { name: "Haval", path: "/catalog/haval" },
    { name: "Honda", path: "/catalog/honda" },
    { name: "JAC", path: "/catalog/jac" },
    { name: "Lada", path: "/catalog/lada" },
    { name: "Lifan", path: "/catalog/lifan" },
    { name: "Mazda", path: "/catalog/mazda" },
    { name: "Mitsubishi", path: "/catalog/mitsubishi" },
    { name: "Nissan", path: "/catalog/nissan" },
    { name: "Opel", path: "/catalog/opel" },
    { name: "Peugeot", path: "/catalog/peugeot" },
    { name: "Ravon", path: "/catalog/ravon" },
    { name: "Renault", path: "/catalog/renault" },
    { name: "SsangYong", path: "/catalog/ssangyong" },
    { name: "Suzuki", path: "/catalog/suzuki" },
    { name: "UAZ", path: "/catalog/uaz" },
    { name: "Zotye", path: "/catalog/zotye" },
  ];

  return (
    <main>
      <div className="top">
        <Link href={"/catalog"}>КАТАЛОГ АВТО</Link>
        <Link href={"/used-cars"}>АВТО С ПРОБЕГОМ</Link>
        <Link href={"/credit"}>КРЕДИТ И РАССРОЧКА</Link>
        <Link href={"/special-offers"}>СПЕЦПРЕДЛОЖЕНИЯ</Link>
        <Link href={"/taxi-in-credit"}>ТАКСИ В КРЕДИТ</Link>
      </div>
      <div className="middle">
        <div className="brends-avto">
          <div className="left">
            <div className="title">
              <p>КАТАЛОГ АВТО</p>
              <a href="/catalog">Подробнее</a>
              <a href="/sitemap">Карта сайта</a>
            </div>
            <div className="links">
              {links.map((link) => (
                <Link href={link.path}>{link.name}</Link>
              ))}
            </div>
          </div>
          <div className="middle">
            <div className="title">
                <p>КРЕДИТ И РАССРОЧКА</p>
            </div>
            <div className="links">
                <Link href="/express-credit">Экспресс-кредит</Link>
                <Link href="/family-car">Семейный автомобиль</Link>
                <Link href="/first-car">Первый автомобиль</Link>
                <Link href="/medicine-worker">Работникам медицины</Link>
                <Link href="/leasing">Рассрочка</Link>
                <Link href="/trade-in">Trade-in</Link>
            </div>
          </div>
          <div className="right">
            <div className="title">
                <p>Контакты</p>
            </div>
            <div className="info">
                <p> <Phone /> +7 (800) 551-94-31 <br /> <span>+7 (495) 292-18-67</span></p>
                <p> <Clock4 /> Ежедневно с 08:00 до 21:00</p>
                <p> <MapPin /> Россия, Москва, 38КМ МКАД, 6Бс1 <br /> <a href="#">Схема проезда</a></p>
                <DropDown />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Footer;
