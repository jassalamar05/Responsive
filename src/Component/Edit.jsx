import { useEffect, useState } from "react"

export default function Edit() {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)
  const [err, setErr] = useState(null)

  useEffect(() => {
    const getall = async () => {
      try {
        setLoad(true)
        setErr(null)

        const res = await fetch("http://3.108.184.141:5000/api/get")
        const result = await res.json()

        setData(result.data || [])
      } catch (error) {
        setErr(error.message)
      } finally {
        setLoad(false)
      }
    }

    getall()
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-300 via-sky-200 to-sky-100 p-6">

      {/* Glass Container */}
      <div className="max-w-6xl mx-auto rounded-2xl bg-white/40 backdrop-blur-xl shadow-xl p-6">

        <h1 className="text-2xl font-bold text-sky-900 mb-6 text-center">
          Product List
        </h1>

        {/* States */}
        {load && (
          <p className="text-center text-sky-700 font-medium">Loading...</p>
        )}

        {err && (
          <p className="text-center text-red-500 font-medium">{err}</p>
        )}

        {!load && data.length === 0 && (
          <p className="text-center text-sky-600">No data found</p>
        )}

        {/* Responsive Table */}
        {data.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead className="bg-sky-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Category</th>
                </tr>
              </thead>

              <tbody className="bg-white/70">
                {data.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-sky-100 transition"
                  >
                    <td className="py-3 px-4 font-medium text-sky-900">
                      {item.name}
                    </td>
                    <td className="py-3 px-4 text-sky-700">
                      ₹ {item.price}
                    </td>
                    <td className="py-3 px-4 text-sky-700">
                      {item.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
