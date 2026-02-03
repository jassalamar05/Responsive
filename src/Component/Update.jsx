import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Update() {
const API = import.meta.env.VITE_API_URL;
  const [data, setData] = useState([])
  const [edit, setEdit] = useState(null)
  const [load, setLoad] = useState(false)
  const [err, setErr] = useState(null)

  // GET DATA
  useEffect(() => {
    const getall = async () => {
      try {
        setLoad(true)
        const res = await fetch(`${API}/api/get`);
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

  // UPDATE
  const update = async () => {
    if (!edit) return

    try {
      setLoad(true)

      const res = await fetch(`${API}/api/update/${edit._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: edit.name,
            price: edit.price,
            category: edit.category
          })
        }
      )

      const result = await res.json()

      if(!res.ok){
        throw new Error("something wwnt worng")
      }

      setData(prev =>
        prev.map(item =>
          item._id === edit._id ? result.data : item
        )
      )
      toast.success("updated success")

      setEdit(null)

    } catch (error) {
      setErr(error.message)
      toast.error("something wrong")
    } finally {
      setLoad(false)
    }
  }

  return (
    <section className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-4">

        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Update Food
        </h2>

        {err && <p className="text-red-500 mb-3">{err}</p>}
        {load && <p className="mb-3 text-blue-600">Loading...</p>}

        {/* RESPONSIVE TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map(item => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  {/* NAME */}
                  <td className="p-3">
                    {edit?._id === item._id ? (
                      <input
                        className="border px-2 py-1 w-full rounded"
                        value={edit.name}
                        onChange={e =>
                          setEdit({ ...edit, name: e.target.value })
                        }
                      />
                    ) : (
                      item.name
                    )}
                  </td>

                  {/* PRICE */}
                  <td className="p-3">
                    {edit?._id === item._id ? (
                      <input
                        className="border px-2 py-1 w-full rounded"
                        value={edit.price}
                        onChange={e =>
                          setEdit({ ...edit, price: e.target.value })
                        }
                      />
                    ) : (
                      `₹ ${item.price}`
                    )}
                  </td>

                  {/* CATEGORY */}
                  <td className="p-3">
                    {edit?._id === item._id ? (
                      <input
                        className="border px-2 py-1 w-full rounded"
                        value={edit.category}
                        onChange={e =>
                          setEdit({ ...edit, category: e.target.value })
                        }
                      />
                    ) : (
                      item.category
                    )}
                  </td>

                  {/* ACTION */}
                  <td className="p-3 text-center space-x-2">
                    {edit?._id === item._id ? (
                      <>
                        <button
                          onClick={update}
                          disabled={load}
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 disabled:opacity-50"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEdit(null)}
                          className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setEdit({ ...item })}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
