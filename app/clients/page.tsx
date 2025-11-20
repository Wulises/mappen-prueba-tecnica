import { FaWhatsapp } from 'react-icons/fa'

async function fetchPlans() {
  const res = await fetch(
    'https://proyectoshm.com/pruebas-hm/mensualidades.json',
    {
      cache: 'no-store',
    }
  )
  const data = await res.json()
  return data.plans.filter(
    (plan) => plan.id === '12-meses' || plan.id === '24-meses'
  ) // Solo los planes de 12 y 24 meses
}

export default async function ClientPage() {
  const plans = await fetchPlans()

  return (
    <>
      {/* 🔴 BANNER ROJO - Primer sección al inicio */}
      <section className="w-full bg-[#0A1A33] text-white">
        <div className="relative">
          <img
            src="/images/llego_el_balck_friday2.jpg" // Coloca la ruta de tu imagen de fondo
            alt="35% Off Black Friday"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 max-w-[1200px] mx-auto">
            <h2 className="text-white font-bold text-[32px] md:text-[40px] leading-tight drop-shadow">
              35% de descuento
            </h2>
            <p className="text-white text-[20px] md:text-[22px] font-medium drop-shadow">
              en nuestra plataforma posventa
            </p>
            <button className="mt-8 bg-[#F9C623] text-[#0A1A33] px-7 py-3 rounded-lg font-semibold text-[18px] hover:bg-[#fbd54d] transition">
              Obtener el 35% off
            </button>
          </div>
        </div>
      </section>

      {/* 🔵 SECCIÓN AZUL - Texto y botón, además de la imagen de la empresa */}
      <section className="bg-[#0A1A33] text-white py-14">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
          {/* Columna izquierda */}
          <div>
            <h1 className="text-[30px] md:text-[38px] font-bold leading-tight">
              Optimiza tu{' '}
              <span className="font-extrabold text-white">
                gestión posventa
              </span>{' '}
              desde hoy
            </h1>
            <p className="mt-4 text-[16px] md:text-[18px] opacity-90 max-w-[450px]">
              Únete al grupo exclusivo de{' '}
              <span className="font-extrabold text-white">usuarios beta</span>.
              Accede primero a nuevas funciones y comparte tus comentarios para
              ayudarnos a perfeccionar la experiencia.
            </p>
            <ul className="mt-5 space-y-2 list-disc pl-6 text-white marker:text-white">
              <li>Sin instalación compleja</li>
              <li>Descuento automático</li>
            </ul>
            <button className="mt-8 bg-[#F9C623] text-[#0A1A33] px-7 py-3 rounded-lg font-semibold text-[18px] hover:bg-[#fbd54d] transition">
              Ver demo
            </button>
          </div>

          {/* Imagen derecha */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/imagen_1.jpg" // Coloca aquí la ruta de la imagen de la empresa
              alt="App posventa"
              className="w-[260px] md:w-[330px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🔵 SECCIÓN DE PLANES - Solo 12 y 24 meses */}
      <section className="bg-[#0A1A33] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 rounded-xl border shadow-md bg-white relative ${
                  plan.destacado
                    ? 'border-yellow-400 shadow-lg'
                    : 'border-naranja'
                }`}
              >
                {/* Badge "Más popular" */}
                {plan.destacado && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#0A1A33] px-4 py-1 rounded-full text-sm font-semibold">
                    Más popular
                  </span>
                )}

                <h3 className="text-[22px] font-bold text-center text-[#0A1A33] mb-3">
                  {plan.nombre}
                </h3>

                <p className="text-gray-700 text-center mb-4">
                  {plan.descripcionCorta}
                </p>

                <p className="text-[18px] font-bold text-center text-[#0A1A33] mb-6">
                  Ahorro: {plan.ahorroPorcentaje}%
                </p>

                <a
                  href={plan.boton.url}
                  className="flex items-center justify-center gap-2 bg-azul text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  <FaWhatsapp className="text-white" />
                  Saber más
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
