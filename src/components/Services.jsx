import Card from "../components/UI/Card"
import { services } from "../constants/services";

const Services = () => {
  return (
    <main className="container mx-auto px-4">
      <section>
        <h2 className="font-bold text-3xl text-center mb-8">Hizmetler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id}>
              <div className="shadow-lg h-[400px]  p-8">
                <h3 className="font-bold text-xl my-4">{service.title}</h3>
                <p className="text-zinc-900 text-balance text-lg my-4 ">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;