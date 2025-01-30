import Cards from "./UI/Cards.jsx";
import { services } from "../constants/services";

const Services = () => {
  return (
    <main className="container mx-auto">
      <section>
        <h2 className="font-bold text-3xl text-center">Hizmetler</h2>
        <Cards className="">
          {services.map((service) => (
            <div key={service.id} className="w-[400px] h-[400px] mx-auto gap-x-6 my-8">
              <div className="shadow-lg p-8 rounded-lg bg-sky-500">
                <h3 className="font-bold text-xl">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </Cards>
      </section>
      
    </main>
  );
}

export default Services;