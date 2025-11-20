'use client'

import { useState } from 'react';

export default function ModalBanner() {

  const [isVisible, setIsVisible] = useState(true); //Estado para que cambie de verdadero a falso

  const closeBanner = () => setIsVisible(false); // Función para que se cierre

  if (!isVisible) return null;

  return (

    <div className="fixed inset-0 flex justify-center items-center z-50">

      {/* Modal */}
      <div className="relative max-w-[90%] sm:max-w-[600px] rounded-xl overflow-hidden shadow-lg">
        
        {/* Imagen de fondo */}
        <img
          src="/images/llego_el_balck_friday.jpg"
          alt="Black Friday"
          className="w-full h-auto object-cover"
        />

        {/* Botón de cerrar */}
        <button
          onClick={closeBanner}
          className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow hover:bg-gray-100 transition z-50"
        >
          ×
        </button>

        {/* Contenido sobre la imagen */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">

          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            ¡LLEGÓ EL BLACK FRIDAY!
          </h2>

          <p className="mt-2 text-lg text-white drop-shadow-md">
            Aprovecha los descuentos especiales
          </p>

          <button className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Ver Ofertas
          </button>
          
        </div>
      </div>
    </div>
  );
}
