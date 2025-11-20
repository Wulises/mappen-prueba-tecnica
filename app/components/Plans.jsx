import { FaWhatsapp } from "react-icons/fa";

export default async function Plans() {
  const res = await fetch("https://proyectoshm.com/pruebas-hm/mensualidades.json", {
    cache: "no-store",
  });

  const data = await res.json();
  const plans = data.plans;

  return (
    <section className="bg-[#0A1A33] py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-xl border shadow-md bg-white relative ${
                plan.destacado ? "border-yellow-400 shadow-lg" : "border-naranja"
              }`}
            >
              {/* Badge "Más popular" */}
              {plan.destacado && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#0A1A33] px-4 py-1 rounded-full text-sm font-semibold">
                  Más popular
                </span>
              )}

              <h3 className="text-[22px] font-bold text-center text-[#0A1A33] mb-3 ">
                
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
  );
}
