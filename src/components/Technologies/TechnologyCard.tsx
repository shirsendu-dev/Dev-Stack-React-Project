import type { TechTypes } from "../../Types";

interface TechnologyCardProps {
    tech: TechTypes,
    handleAddTech: (tech: TechTypes) => void,
    isSelected: boolean
}

const TechnologyCard = ({ tech, handleAddTech, isSelected }: TechnologyCardProps) => {

    return (
        <div className="border border-[#E2E8F0] rounded-2xl p-5 bg-white shadow-sm flex flex-col justify-between min-h-[310px]">

            <div>

                <div className="flex justify-between items-start mb-5">

                    <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-[35px] h-[35px] object-contain"
                    />

                    <span className="text-[11px] bg-[#E0F2FE] text-[#0284C7] px-3 py-1 rounded-full font-medium">
                        {tech.badge}
                    </span>

                </div>

                <h2 className="text-[20px] font-bold text-[#0F172A] mb-2">
                    {tech.name}
                </h2>


                <p className="text-[#64748B] text-[13px] leading-5 mb-5">
                    {tech.description}
                </p>

            </div>

            <div>

                <div className="border-t border-gray-100 pt-4 flex justify-between items-center gap-2">

                    <span className="bg-[#F1F5F9] text-[#64748B] text-[11px] px-2 py-1 rounded">
                        {tech.category}
                    </span>

                    <span className="text-[#64748B] text-[11px]">
                        {tech.difficulty}
                    </span>

                    <span className="text-[#F59E0B] text-[12px]">
                        ★ {tech.rating}
                    </span>

                </div>

                <button
                    onClick={() => handleAddTech(tech)}
                    disabled={isSelected}
                    className={`w-full py-2.5 mt-4 rounded-lg text-sm transition-colors duration-300 ${isSelected ? 'bg-[#CBD5E1] text-[#64748B] cursor-not-allowed' : 'bg-[#0F172A] text-white cursor-pointer hover:bg-[#334155]'}`}
                >
                    {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
                </button>

            </div>

        </div>
    );
};

export default TechnologyCard;