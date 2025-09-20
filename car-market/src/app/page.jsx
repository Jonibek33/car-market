import Link from "next/link";
import Image from "next/image";
import { ChartNoAxesColumnDecreasing, Heart } from 'lucide-react';

function Home() {
  return (
    
    <main>
      <div className="part_1">
        <div className="conteiner">
          <h1>Автомобили в наличии с ПТС</h1>
          <div className="cards">
            <div className="card">
              <h2>Skoda Octavia <br/> 1.6 MPI MT Active </h2>
              <div className="icons">
                <Heart color="#737373" />
                <ChartNoAxesColumnDecreasing color="#737373" />
              </div>
              <Image 
                src="/predlozhenie_dnya.png" 
                alt="Предложение дня" 
                height={20} 
                width={120}
              />
            </div>
          </div>
        </div>
      </div>
    </main>

  );
}
export default Home;