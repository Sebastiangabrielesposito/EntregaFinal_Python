import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/MainSection/Button';
const AboutPage: React.FC = () => {
    return (        
        <div className=' bg-dark-100 h-screen '>
          <section  className="about ">
            <div className="img-about ">
              <img src="./1681917768006-removebg-preview.png" alt="Profile-Photo" />
              <div className="info-about1">
                <span>2+</span>
                <p>Años de experiencia</p>
              </div>
              <div className="info-about2">
                <span>20+</span>
                <p>Proyectos completos</p>
              </div>
              <div className="info-about3">
                <span>10+</span>
                <p>Clientes satisfechos</p>
              </div>
            </div>
  
            <div className="about-content">
              <span>Permíteme presentarme</span>
              <h2>Acerca de mí</h2>
              <h3>Conoce mi historia</h3>
              <p>
                Como desarrollador Full Stack con experiencia en múltiples
                tecnologías, mi perfil profesional está orientado a crear
                aplicaciones web escalables, atractivas y funcionales tanto desde
                el Frontend como en el Backend. Soy capaz de trabajar en cada etapa
                del ciclo de vida de una aplicación, desde la planificación y el
                diseño hasta la implementación y la optimización.
              </p>
            </div>
          </section>
          <Link href="/">
              <div className="flex justify-center ">
                  <button className='text-white' >Volver al inicio</button>
              </div>
          </Link>
        </div>

    );
  };
  
  export default AboutPage;