import { use, useState } from "react";
import { toast } from "react-toastify";
import type { TechTypes } from "../../Types";
import TechnologyCard from "./TechnologyCard";
import Stack from "../Stack/Stack";

const Technologies = ({ techsPromise }: { techsPromise: Promise<TechTypes[]> }) => {

    const allTechs = use(techsPromise);

    const [selectedTechs, setSelectedTechs] = useState<TechTypes[]>([]);


    const handleAddTech = (tech: TechTypes) => {

        const alreadyExists = selectedTechs.find(selectedTech => selectedTech.id === tech.id);

        if (alreadyExists) {
            toast.warning(`${tech.name} is already added`);
            return;
        }

        const newSelectedTechs = [...selectedTechs, tech];

        setSelectedTechs(newSelectedTechs);

        toast.success(`${tech.name} added to your stack`);
    };


    const handleRemoveTech = (tech: TechTypes) => {

        const remainingTechs = selectedTechs.filter(selectedTech => selectedTech.id !== tech.id);

        setSelectedTechs(remainingTechs);

        toast.info(`${tech.name} removed from your stack`);
    };


    const handleRemoveAll = () => {

        if (selectedTechs.length === 0) {
            toast.warning("Your stack is already empty");
            return;
        }

        setSelectedTechs([]);

        toast.info("All technologies removed from your stack");
    };


    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {allTechs.length === 0 && <p>No Data Found!</p>}

                {
                    allTechs.map(tech => {

                        const isSelected = selectedTechs.some(selectedTech => selectedTech.id === tech.id);

                        return (
                            <TechnologyCard
                                key={tech.id}
                                tech={tech}
                                handleAddTech={handleAddTech}
                                isSelected={isSelected}
                            ></TechnologyCard>
                        );
                    })
                }

            </div>


            <div className="lg:col-span-1">
                <Stack
                    selectedTechs={selectedTechs}
                    handleRemoveTech={handleRemoveTech}
                    handleRemoveAll={handleRemoveAll}
                ></Stack>
            </div>

        </div>
    );
};

export default Technologies;