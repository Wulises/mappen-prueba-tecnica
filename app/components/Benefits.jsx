import { CiWarning } from "react-icons/ci";
import { GrDocumentTime } from "react-icons/gr";
import { IoDocumentsOutline, IoCalendarNumberOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai"; 

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      icon: CiWarning,
      title: "Vicios ocultos",
      description: "Registra y da seguimiento a problemas estructurales sin complicaciones."
    },
    {
      id: 2,
      icon: GrDocumentTime,
      title: "Reportes de garantías",
      description: "Informa fallas o desperfectos de tu unidad directamente desde la app."
    },
    {
      id: 3,
      icon: IoDocumentsOutline,
      title: "Gestión centralizada",
      description: "Todo en un solo lugar, con historial y notificaciones en tiempo real."
    },
    {
      id: 4,
      icon: IoCalendarNumberOutline,
      title: "Reserva de amenidades",
      description: "Accede y gestiona espacios comunes de manera rápida y sencilla."
    }
  ];

  return (
    <div>

      {/* Beneficios */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0A1A33] mb-14">
          Beneficios para los residentes
        </h2>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {benefits.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center px-4 py-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition border-4 border-blue-200"
            >
              <Icon className="text-white bg-azul w-20 h-20 rounded-lg text-5xl mb-6" />
              <h3 className="font-semibold text-lg text-[#0A1A33] mb-2">{title}</h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* Call to Action */}
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

      {/* Footer */}
      <footer className="bg-white py-12 flex justify-center items-center">
        <img
          src="/images/logo.png"
          alt="Hausiva Residencial"
          className="w-36"
        />
      </footer>
    </div>
  );
}
