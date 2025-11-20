import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full">

      {/* 🔴 BANNER ROJO */}
      <div className="w-full relative">

        <img
          src="/images/llego_el_balck_friday2.jpg"
          alt="Black Friday 35%"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 max-w-[1200px] mx-auto">
          <h2 className="text-white font-bold text-[32px] md:text-[40px] leading-tight drop-shadow">
            35% de descuento
          </h2>

          <p className="text-white text-[20px] md:text-[22px] font-medium drop-shadow">
            en nuestra plataforma posventa
          </p>

        <Link href="/clientes">
          <button className="mt-8 bg-[#F9C623] text-[#0A1A33] px-7 py-3 rounded-lg font-semibold text-[18px] hover:bg-[#fbd54d] transition">
            Obtener el 35% off
          </button>
        </Link>
     
        </div>
      </div>

      {/* 🔵 SECCIÓN AZUL */}
      <div className="bg-[#0A1A33] text-white py-14">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

          {/* Columna izquierda */}
          <div>
            <h1 className="text-[30px] md:text-[38px] font-bold leading-tight">
              Optimiza tu <span className="font-extrabold text-white">gestión posventa</span> desde hoy
            </h1>

            <p className="mt-4 text-[16px] md:text-[18px] opacity-90 max-w-[450px]">
              Únete al grupo exclusivo de <span className="font-extrabold text-white">usuarios beta</span>.
              Accede primero a nuevas funciones y comparte tus comentarios para ayudarnos a perfeccionar la experiencia.
            </p>

            {/* Bullets blancos */}
            <ul className="mt-5 space-y-2 list-disc pl-6 text-white marker:text-white">
              <li>Sin instalación compleja</li>
              <li>Descuento automático</li>
            </ul>

            {/* Botón dentro de la misma columna */}
            <Link href={"/clientes"}>
              <button className="mt-8 bg-[#F9C623] text-[#0A1A33] px-7 py-3 rounded-lg font-semibold text-[18px] hover:bg-[#fbd54d] transition">
                Ver demo
              </button>
            </Link>

          </div>

          {/* Imagen derecha */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/imagen_1.jpg"
              alt="App posventa"
              className="w-[260px] md:w-[330px] rounded-lg shadow-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
