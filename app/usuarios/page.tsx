import { AiOutlineClockCircle } from 'react-icons/ai'

export default async function UserPage() {
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

          <div className="flex justify-center md:justify-end">
            <button className="mt-8 bg-[#F9C623] text-[#0A1A33] px-7 py-3 rounded-lg font-semibold text-[18px] hover:bg-[#fbd54d] transition">
              Ver demo
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Actualizaciones */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[32px] font-bold text-[#0A1A33] mb-8">
            Actualizaciones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tarjeta de Actualización 1 */}
            <div className="flex flex-col items-center bg-[#F8F8F8] p-6 rounded-lg shadow-md">
              <div className="w-full mb-4">
                <h3 className="font-bold text-[#0A1A33] text-[18px] mb-3">
                  Disponibilidad simplificada
                </h3>
                <p className="text-[#333333] text-[14px] md:text-[16px] text-center">
                  Simplificación en el proceso de disponibilidad para nuestros
                  usuarios.
                </p>
              </div>
              {/* Imagen de la tarjeta */}
              <div className="w-full p-3">
                <img
                  src="/images/logo.png" // Asegúrate de reemplazar con la ruta correcta
                  alt="Disponibilidad simplificada"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Tarjeta de Actualización 2 */}
            <div className="flex flex-col items-center bg-[#F8F8F8] p-6 rounded-lg shadow-md">
              <div className="w-full mb-4">
                <h3 className="font-bold text-[#0A1A33] text-[18px] mb-3">
                  Descuentos financieros en cotización
                </h3>
                <p className="text-[#333333] text-[14px] md:text-[16px] text-center">
                  Descuentos exclusivos para cotizaciones financieras.
                </p>
              </div>
              {/* Imagen de la tarjeta */}
              <div className="w-full p-3">
                <img
                  src="/images/imagen_1.jpg" // Asegúrate de reemplazar con la ruta correcta
                  alt="Descuentos financieros"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Tarjeta de Actualización 3 */}
            <div className="flex flex-col items-center bg-[#F8F8F8] p-6 rounded-lg shadow-md">
              <div className="w-full mb-4">
                <h3 className="font-bold text-[#0A1A33] text-[18px] mb-3">
                  Mappen AI (Beta)
                </h3>
                <p className="text-[#333333] text-[14px] md:text-[16px] text-center">
                  Inteligencia artificial para optimizar tus procesos.
                </p>
              </div>
              {/* Imagen de la tarjeta */}
              <div className="w-full p-3">
                <img
                  src="/images/imagen_6.jpg" // Asegúrate de reemplazar con la ruta correcta
                  alt="Mappen AI"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
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
