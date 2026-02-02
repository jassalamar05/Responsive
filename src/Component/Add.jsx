import { useState } from "react";
import toast from "react-hot-toast";

export default function Add() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);

  const foodadd = async () => {
    try {
      setLoad(true);
      setErr(null);

      const fooddata = await fetch("http://localhost:5000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, category }),
      });

        // ✅ RESPONSE STATUS CHECK
    if (!fooddata.ok) {
      throw new Error("Food failed to insert");
    }
  

      const result = await fooddata.json();
      setData((prev) => [...prev,result.data]);
      // clear inputs
      setName("");
      setPrice("");
      setCategory("");
    toast.success("Food item inserted");


  

    
    } catch (err) {
      setErr(err.message);
      toast.error("Something went wrong")
    } finally {
      setLoad(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-500 to-sky-700 p-4">
      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-sky-600 mb-6">
          Add Food Item 🍔
        </h1>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Food name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={foodadd}
            disabled={load}
            className="bg-sky-600 text-white px-8 py-2 rounded-full hover:bg-sky-700 transition disabled:opacity-50"
          >
            {load ? "Adding..." : "Add Food"}
          </button>
        </div>

        {/* Error */}
        {err && (
          <p className="text-red-500 text-center mt-4">{err}</p>
        )}
      </div>

      {/* Data List */}
      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(data) &&data.map((item, index) => (
            <div key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold text-sky-600">{item.name}</h2>
              <p className="text-gray-600">₹ {item.price}</p>
              <p className="inline-block mt-2 text-sm bg-sky-100 text-sky-600 px-3 py-1 rounded-full">
                {item.category}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
