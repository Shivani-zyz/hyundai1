import { useState } from "react"

function AD({ f1 }) {


    const [pr, setPr] = useState("")
    const [gd, setGd] = useState("")
    const [mp, setMp] = useState("")
    const [cd, setCd] = useState("")
    const [ct, setCt] = useState("")
    const [vt, setVt] = useState("")
    const [pic, setpic] = useState(null)
    // const data={pr,gd,mp,cd,ct,vt,pic}


    // const all={todo,pr,gd,mp,cd,ct,vt,pic}


    // const f1=(all)=> {

    //     if (all.pic) {
    //         const a = URL.createObjectURL(pic)

    //         const as = [...todo, { a:all.a, pr:all.pr, gd:all.gd, mp:all.mp, cd:all.cd, ct:all.ct, vt:all.vt, pic:all.pic }]
    //         settodo(as)

    //     }



    //   }



    return (
        <>

            <div className="f" style={{ display: "flex", flexDirection: "column" }}>


                <div className="f1">
                    <input type="file" onChange={(e) => setpic(e.target.files[0])} /><br /><br />

                    <ul>


                        <li>
                            <p>Price</p>
                            <input onChange={(e) => setPr(e.target.value)} type="text" /></li><br /><br />


                        <li>
                            <p>GDi Petrol</p>
                            <input onChange={(e) => setGd(e.target.value)} type="text" /><br /><br />
                            <p>MPi Petrol</p>
                            <input onChange={(e) => setMp(e.target.value)} type="text" /><br /><br />
                            <p>CRDi Diesel</p>
                            <input onChange={(e) => setCd(e.target.value)} type="text" />
                        </li><br /><br />

                        <li>
                            <p>DCT Speed</p>
                            <input onChange={(e) => setCt(e.target.value)} type="text" /><br /><br />
                            <p>IVT Speed</p>
                            <input onChange={(e) => setVt(e.target.value)} type="text" /></li><br /><br />

                    </ul>


                    <center><button onClick={() => { f1(pr, gd, mp, cd, ct, vt, pic) }} >ADD</button></center><br />


                </div>



            </div>





            {/* <div className="f2">


                    {todo.map((item) => <>
                        <img src={item.a} width={"600px"} />

                        <ul>
                            <li><th>Starting at</th>
                            <td>{item.pr}</td>
                            <td>*Ex Showroom Price</td></li>
                        

                        
                            <li><th>Engine</th>
                            <td>{item.gd}</td>
                            <td>{item.mp}</td>
                            <td>{item.cd}</td></li>
                        
                        
                            <li><th>Transmission available</th>
                            <td>{item.ct}</td>
                            <td>{item.vt}</td></li>
                        </ul>
                    </>
                    )}

            </div> */}
        </>
    )
}
export default AD