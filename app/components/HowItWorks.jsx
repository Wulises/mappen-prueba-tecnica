import { IoPlayCircleOutline } from "react-icons/io5"; // Importamos el ícono de play

export default function HowItWorks() {
  
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0A1A33] mb-14">
        ¿Cómo funciona?
      </h2>

      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Izquierda: Logo + texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">

          <img 
            src="/images/logo.png" 
            alt="Hausiva Residencial" 
            className="w-36 mx-auto md:mx-0"
          />

          <h3 className="font-semibold text-xl text-[#0A1A33]">Control total, operación eficiente</h3>

          <p className="text-gray-700 max-w-md">
            Optimiza la gestión posventa con una plataforma diseñada para maximizar eficiencia.
          </p>

        </div>

        {/* Derecha: Imagen con ícono de play */}
        <div className="flex flex-col justify-center items-center gap-6 relative">

          {/* Imagen siempre visible */}
          <img 
            src="/images/imagen_2.png" // Esta imagen siempre visible
            alt="Hausiva Residencial"
            className="rounded-lg p-8"
          />

          {/* Imagen visible solo en móviles y tabletas (oculta en pantallas grandes) */}
          <img 
            src="/images/imagen_4.jpg" // Esta imagen solo visible en pantallas pequeñas
            alt="Hausiva Residencial"
            className="rounded-lg p-8 md:hidden" // Se oculta en pantallas medianas y grandes
          />

          <IoPlayCircleOutline className="absolute text-white text-5xl py-2 " />

        </div>
      </div>
    </section>
  );
}
