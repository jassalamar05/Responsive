

export default function Nav(){
    const school=["amar","singh"]

    return(
        <>
        <div>
            {school.map((item,index)=>{
                return(
                    <p>{item}</p>
                )
            })}
        </div>
        
        </>
    )
}