"use client";

import "./style.scss";
import Image from "next/image";
import Link from "next/link";

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
        <p>КАТАЛОГ АВТО</p>
        <a>Подробнее</a>
        <div className="brends-avto">
          <div className="left">
            {links.map((link) => (
              <Link href={link.path}>{link.name}</Link>
            ))}
          </div>
          
        </div>
      </div>
    </main>
  );
}

export default Footer;
