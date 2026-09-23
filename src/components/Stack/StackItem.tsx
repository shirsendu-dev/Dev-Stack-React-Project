import type { TechTypes } from "../../Types";

interface StackItemProps {
    tech: TechTypes,
    handleRemoveTech: (tech: TechTypes) => void
}

const StackItem = ({ tech, handleRemoveTech }: StackItemProps) => {

    return (
        <div className="border border-[#E2E8F0] rounded-lg px-3 py-3 flex justify-between items-center">

            <div className="flex items-center gap-3">

                <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-[32px] h-[32px] object-contain"
                />

                <div>
                    <h3 className="font-semibold text-[13px] text-[#0F172A]">
                        {tech.name}
                    </h3>

                    <p className="text-[10px] text-[#94A3B8]">
                        {tech.category}
                    </p>
                </div>

            </div>


            <button
                onClick={() => handleRemoveTech(tech)}
                className="text-[#94A3B8] hover:text-red-500 text-2xl cursor-pointer"
            >
                ×
            </button>

        </div>
    );
};

export default StackItem;