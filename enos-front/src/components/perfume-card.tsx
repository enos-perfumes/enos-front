
interface PerfumeCardProps {
    perfume: Perfume;
}

const PerfumeCard: React.FC<PerfumeCardProps> = ({ perfume }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <img className="w-full h-64 object-cover object-center mb-6" src={perfume.image} alt={perfume.name} />
            <h2 className="text-2xl font-medium text-gray-900 mb-4">{perfume.name}</h2>
            <p className="text-gray-700 mb-4">{perfume.description}</p>
            <p className="text-xl font-semibold text-gray-900 mb-4">${perfume.price}</p>
            <a
                href={`https://wa.me/?text=I'm%20interested%20in%20the%20perfume:%20${perfume.name}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                target="_blank"
                rel="noopener noreferrer"
            >
                Más información
            </a>
        </div>
    );
};

export default PerfumeCard;
