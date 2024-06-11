import React, { useState, useEffect } from 'react';
import { getPerfumes, createPerfume, deletePerfume } from '../../api/perfumes.api';


const AdminPage: React.FC = () => {
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);
    const [form, setForm] = useState<Perfume>({ name: '', description: '', price: 0, image: '' });

    useEffect(() => {
        const fetchPerfumes = async () => {
            const data = await getPerfumes();
            setPerfumes(data);
        };
        fetchPerfumes();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPerfume = await createPerfume(form);
        setPerfumes([...perfumes, newPerfume]);
        setForm({ name: '', description: '', price: 0, image: '' });
    };

    const handleDelete = async (id: string) => {
        await deletePerfume(id);
        setPerfumes(perfumes.filter(perfume => perfume._id !== id));
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center my-8">Admin Panel</h1>
            <form onSubmit={handleSubmit} className="mb-8">
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 mb-2 w-full"
                />
                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="border p-2 mb-2 w-full"
                />
                <input
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="border p-2 mb-2 w-full"
                />
                <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="border p-2 mb-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Add Perfume
                </button>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {perfumes.map(perfume => (
                    <div key={perfume._id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-medium text-gray-900 mb-4">{perfume.name}</h2>
                        <p className="text-gray-700 mb-4">{perfume.description}</p>
                        <p className="text-xl font-semibold text-gray-900 mb-4">${perfume.price}</p>
                        <button
                            onClick={() => handleDelete(perfume._id!)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPage;
