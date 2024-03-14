import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import {HashLoader} from "react-spinners"

function About() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [product , setProduct] = useState({})
    const [loading , setLoading] = useState(false)
    const [active, setActive] = useState(0)
    useEffect(() =>{
        setLoading(true)
        if(!id) {
            navigate('/')
        } else {
            axios.get(`https://strapi-store-server.onrender.com/api/products/${id}`)
            .then(res => {
                setProduct(res.data.data.attributes);
                console.log(res.data.data.attributes);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            } )
        }
    }, [])
  return (
    <div className="container-xl flex justify-between gap-4">
        {loading && <div className="mx-auto px-[50%] mt-40"><HashLoader color="#0009ff" /></div>}
        <div className="image">
            <img className=" object-cover" src={product.image} alt="" />
        </div>
        <div className="info">
            <h3 className="text-left capitalize">{product.title}</h3>
            <h3 className="text-left">{product.company}</h3>
            <h3 className="text-left">${product.price}</h3>
            <p className="text-left w-[750px]">{product.description}</p>
            {
                product.colors && product.colors.map((el, index) => {
                    return (<span className={`w-5 inline-block h-5 ${index == active ? "border-black" : ""} rounded-full mr-2 border cursor-pointer bg-{${el}}`} key={index}></span>)
                })
            }

            <p>Colors</p>

        </div>
    </div>
  )
}

export default About