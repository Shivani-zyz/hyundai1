
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Nav({ pop, setpop,pop1, setpop1,pop2, setpop2,pop3, setpop3,pop4, setpop4 }) {


    const [a, seta] = useState(false)
    useEffect(() => {

        function dd() {
            if (window.scrollY > 0) {
                seta(true)
            }
            else {
                seta(false)
            }
        }
        window.addEventListener("scroll", dd)

        return () => {
            window.removeEventListener("scroll", dd)
        }

    }, [])



    return (

        <>


        

            <div className="aa">

            </div>
            <div className="a" style={{ backgroundColor: a ? "yellow" : "white" }}>


                <ul>
                    <li style={{ marginTop: "-33px" }}>
                        <Link to="/"><img src="https://logohistory.net/wp-content/uploads/2023/01/Hyundai-Logo.svg" alt="" width={"140px"} height={"80px"} /></Link>
                    </li>
                </ul>

                <ul className="link2">
                    <li style={{ cursor: "pointer" }} onClick={() => setpop(!pop)}>Find a Car</li>
                    <li style={{ cursor: "pointer" }} onClick={() => setpop1(!pop1)}>Click to Buy</li>
                    <li style={{ cursor: "pointer" }} onClick={() => setpop2(!pop2)}>connect to Service</li>
                    <li style={{ cursor: "pointer" }} onClick={() => setpop3(!pop3)}>Hyundai Story</li>
                    <li style={{ cursor: "pointer" }} onClick={() => setpop4(!pop4)}>Mobility Solutions</li>
                    <li ><Link style={{ textDecoration: "none" }} to="/investors">Investors Relations</Link></li>
                    <li ><Link style={{ textDecoration: "none" }} to="/contact">Contact Us</Link></li>
                    <li ><Link style={{ textDecoration: "none" }} to="/ad">AD</Link></li>

                </ul>

                <ul>
                    <li><Link to="/profile"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" /> <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" /></svg></Link></li>

                    <li><Link to="/location"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" /><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg></Link></li>

                    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16"><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></svg></li>

                    <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" /></svg></li>

                </ul>



            </div>
        </>
    )
}
export default Nav
