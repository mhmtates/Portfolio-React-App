import Card from "../components/UI/Card";
import { services } from "../../data";

const Services = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <section>
        <h2 className="font-bold text-4xl text-center mb-12 text-zinc-900">
          Hizmetler
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-neutral-400 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="p-8 flex flex-col h-full">
                <h3 className="font-bold text-2xl mb-4 text-zinc-950">
                  {service.title}
                </h3>
                <p className="text-zinc-800 text-lg flex-grow">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
