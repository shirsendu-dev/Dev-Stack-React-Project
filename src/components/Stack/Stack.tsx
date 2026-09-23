import type { TechTypes } from "../../Types";
import StackItem from "./StackItem";

interface StackProps {
    selectedTechs: TechTypes[],
    handleRemoveTech: (tech: TechTypes) => void,
    handleRemoveAll: () => void
}

const Stack = ({ selectedTechs, handleRemoveTech, handleRemoveAll }: StackProps) => {

    return (
        <div className="border border-[#E2E8F0] rounded-2xl p-5 bg-white shadow-sm h-fit">

            <h2 className="text-[18px] font-bold text-[#0F172A]">
                Your Stack
            </h2>

            <p className="text-[#94A3B8] text-[12px] mt-1">
                {selectedTechs.length} {selectedTechs.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>


            {
                selectedTechs.length === 0 ?

                <div className="border border-dashed border-[#CBD5E1] rounded-xl py-9 px-3 mt-5 text-center">

                    <p className="text-[#94A3B8] text-[12px]">
                        Your stack is empty.
                    </p>

                </div>

                :

                <div>

                    <div className="flex flex-col gap-2 mt-5">

                        {
                            selectedTechs.map(tech =>
                                <StackItem
                                    key={tech.id}
                                    tech={tech}
                                    handleRemoveTech={handleRemoveTech}
                                ></StackItem>
                            )
                        }

                    </div>


                    <button
                        onClick={handleRemoveAll}
                        className="w-full border border-red-300 text-red-500 rounded-lg py-2 mt-8 text-sm cursor-pointer hover:bg-red-50"
                    >
                        Remove All
                    </button>

                </div>
            }

        </div>
    );
};

export default Stack;