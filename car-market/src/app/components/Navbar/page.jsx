"use client";

import { Heart, ChartNoAxesColumnDecreasing, Search  } from 'lucide-react';

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";
import DropDown from "../DropDown/page";

import logo from "./assets/logo.png";
import callIcon from "./assets/call-icon.png";

function Navbar() {
  return (
    <nav>
      <div className="top">
        <div className="left">
          <Menu className="menu-icon" />
          <Image
            className="logo"
            alt="logo"
            src={logo}
            width={50}
            height={50}
          />
          <div className="title-logo">
            <p className="title">ABC AUTO</p>
            <p className="subtitle">Официальный дилер</p>
          </div>
        </div>
        <div className="right">
          <p className="ten-years">
            <span className="red-text">10 лет</span> превосходим <br /> ваши
            ожидания
          </p>
          <Link href="/car-selection">Подбор авто</Link>
          <Link href="/about">О компании</Link>
          <Link href="/service">Техцентр</Link>
          <Link href="/reviews">Отзывы</Link>
          <Link href="/contacts">Контакты</Link>
          <div className="phone-numbers">
            <p className="number-1">
              <Image
                className="call-icon"
                src={callIcon}
                alt="call-icon"
                width={20}
                height={20}
              />
              +7 (800) 551-94-31
            </p>
            <p className="number-2">+7 (495) 292-18-67</p>
          </div>
          <button className="btn-call">ОБРАТНЫЙ ЗВОНОК</button>
        </div>
      </div>
      <div className="bottom">
        <div className="selects">
          <DropDown
            className="select"
            title="Каталог авто"
            variants={{
              sedan: "Sedan",
              hatchback: "Hatchback",
              coupe: "Coupe",
              suv: "SUV",
            }}
          />
          <DropDown
            className="select"
            title="Авто с пробегом"
            variants={{
              sedan: "Sedan",
              hatchback: "Hatchback",
              coupe: "Coupe",
              suv: "SUV",
            }}
          />
          <DropDown
            className="select"
            title="Кредит и рассрочка"
            variants={{
              sedan: "Sedan",
              hatchback: "Hatchback",
              coupe: "Coupe",
              suv: "SUV",
            }}
          />
          <DropDown
            className="select"
            title="Спецпредложения"
            variants={{
              sedan: "Sedan",
              hatchback: "Hatchback",
              coupe: "Coupe",
              suv: "SUV",
            }}
          />
          <DropDown
            className="select"
            title="Такси в кредит"
            variants={{
              sedan: "Sedan",
              hatchback: "Hatchback",
              coupe: "Coupe",
              suv: "SUV",
            }}
          />
        </div>
        <div className="icons">
            <Heart className="icon" color="#737373" />
            <ChartNoAxesColumnDecreasing className="icon" color="#737373" />
            <Search className="icon" color="#737373" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
