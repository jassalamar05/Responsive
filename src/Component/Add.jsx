import { useState } from "react"

export default function Add(){
    const[data,setData]=useState([])
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[category,setCategory]=useState("")

    const[load,setLoad]=useState(false)
    const[err,setErr]=useState(null)


    // we have to create our adding fucntionality

    const foodadd=async()=>{
        try{
            setLoad(true)
            setErr(null)


        const fooddata=await fetch("http://localhost:5000/api/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name ,price,category})
        })

        const result=await fooddata.json()
        setData(prev=>[...prev,result.data])
        }catch(err){
            setErr(err)
        }finally{
            setLoad(false)
        }
    }
    return(
        <>
    <section className="bg-sky-600 h-screen">
    <div className="flex justify-center gap-2">
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <input type="text" name="" id="" onChange={(e)=>setPrice(e.target.value)}/>
        <input type="text" name="" id="" onChange={(e)=>setCategory(e.target.value)} />
        <button onClick={foodadd}>Add</button>
    </div>

    {Array.isArray(data) && data.map((item,index)=>(
        <div key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
        </div>
    ))}
    </section>
        </>
    )
}