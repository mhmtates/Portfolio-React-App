import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import { fetchProjectData } from "../redux/action/action";

const Projects = () => {

    const categories = ["Tümü", "Frontend", "Backend"];
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.projects);

    useEffect(() => {
        dispatch(fetchProjectData());
    }, [dispatch]);

    const [selectedCategory, setSelectedCategory] = useState("Tümü");

    const filteredProjects = selectedCategory === "Tümü"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-10 text-zinc-950">Projelerim</h1>

            
            <div className="flex justify-center gap-4 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-lg font-semibold ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                            } hover:bg-blue-500 hover:text-white transition`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <Card key={project.id} className="bg-white p-4">

                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md" />
                        <h2 className="text-xl font-bold mt-4">{project.title}</h2>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            role="button"
                            className="block mt-4 text-zinc-800 font-semibold hover:underline"
                        >
                            Github'da Görüntüle
                        </a>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
