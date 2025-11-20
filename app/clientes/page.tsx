import { AiOutlineClockCircle } from 'react-icons/ai'

import { FaWhatsapp } from 'react-icons/fa'

interface Plan {
  id: string
  slug: string
  nombre: string
  duracionMeses: number
  descripcionCorta: string
  ahorroPorcentaje: number
  boton: {
    texto: string
    url: string
  }
  categorias: string[]
  destacado: boolean
  activo: boolean
  orden: number
}

interface PlanData {
  plans: Plan[]
}

async function fetchPlans(): Promise<Plan[]> {
  const res = await fetch(
    'https://proyectoshm.com/pruebas-hm/mensualidades.json',
    {
      cache: 'no-store',
    }
  )

  const data: PlanData = await res.json()
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
            src="/images/imagen_5.jpg" // Coloca la ruta de tu imagen de fondo
            alt="35% Off Black Friday"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-end px-6 max-w-[1200px] mx-auto">
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

      {/* 🔵 SECCIÓN AZUL - Texto y botón, reemplazamos la imagen por el botón */}
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
          </div>

          {/* Reemplazamos la imagen por el botón */}
          <div className="flex justify-center md:justify-end">
            <button className="mt-8 bg-[#F9C623] text-[#0A1A33] px-7 py-3 rounded-lg font-semibold text-[18px] hover:bg-[#fbd54d] transition">
              Ver demo
            </button>
          </div>
        </div>
      </section>

      {/* 🔵 SECCIÓN DE LOGO - Aseguramos que la imagen del logo esté correctamente ajustada */}
      <div className="bg-white py-12 flex justify-center items-center">
        <img
          src="/images/logo.png" // Ruta de tu logo
          alt="Hausiva Residencial"
          className="w-full max-w-[300px] h-auto object-contain" // Ajustamos el logo para que se vea correctamente
        />
      </div>

      {/* 🔵 SECCIÓN DE PLANES - Solo 12 y 24 meses */}
      <section className="py-16">
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

      {/* 🔵 CALL TO ACTION */}
      <section className="bg-[#0A1A33] py-16 px-6 text-center">
        {/* Black Friday Offer Banner */}
        <section className="bg-[#F9C623] py-3 rounded-full max-w-fit mx-auto mb-6">
          <div className="flex justify-center items-center text-[#0A1A33] text-sm font-semibold">
            <AiOutlineClockCircle className="text-[#0A1A33] text-lg mr-2" />
            <p>Oferta válida solo durante el Black Friday</p>
          </div>
        </section>

        <h2 className="text-white font-bold py-5 text-[32px] md:text-[40px] leading-tight drop-shadow">
          Únete a la fase beta
        </h2>
        <button className="bg-[#F9C623] text-[#0A1A33] px-10 py-4 rounded-lg font-semibold text-xl hover:bg-yellow-400 transition">
          Contratar ahora
        </button>
      </section>

      {/* 🔵 SECCIÓN DE INFORMACIÓN */}
      <section className="bg-[#F8F8F8] text-[#333333] py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-lg md:text-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sollicitudin luctus urna vitae tincidunt. Donec consequat bibendum
            orci eget lobortis. Praesent faucibus sit amet mauris ac mollis.
            Aliquam sit amet viverra nisi. Phasellus id mauris enim. Quisque
            eleifend mi non libero malesuada suscipit. Nulla in blandit lectus.
            Vestibulum leo magna, consequat sit amet molestie eget, convallis id
            ex. Sed lectus ligula, aliquet at rutrum ac, malesuada eu nisi. Duis
            non dictum nisl.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Duis non mattis mi. Nam finibus at massa id elementum. Cras at massa
            lectus. Morbi blandit nunc eget commodo varius. Aenean pharetra
            massa magna, id bibendum mauris imperdiet eget. Cras id lacus id
            erat accumsan euismod. Sed volutpat, dolor convallis porta varius,
            nibh urna tincidunt lectus, a egestas ex nisi vel leo. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Sed id cursus augue, sit amet ornare erat.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Nulla eros odio, consectetur nec felis quis, dignissim sagittis dui.
            Sed egestas tincidunt ligula eu luctus. Mauris sed mi ut urna
            vestibulum semper a in lacus. Nullam mattis lorem a tortor
            facilisis, sit amet luctus ex placerat. Nulla tristique pharetra
            urna in lobortis. Integer diam odio, pharetra eget dapibus aliquam,
            pellentesque quis tellus. Sed rutrum accumsan mi vitae malesuada.
            Vivamus et libero sit amet eros tincidunt posuere vel et neque.
          </p>
        </div>
      </section>
    </>
  )
}
