import React, { useEffect, useState } from 'react';
import { getPerfumes } from '../../api/perfumes.api';
import PerfumeCard from '../../components/perfume-card';


interface Perfume {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

const HomePage: React.FC = () => {
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);

    useEffect(() => {
        const fetchPerfumes = async () => {
            const data = await getPerfumes();
            setPerfumes(data);
        };
        fetchPerfumes();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center my-8">Perfumes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {perfumes.map(perfume => (
                    <PerfumeCard key={perfume._id} perfume={perfume} />
                ))}
            </div>
        </div>
    );
};


export default HomePage;
