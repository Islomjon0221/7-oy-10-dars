import "../App.css"
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import {HashLoader} from "react-spinners"

function Product() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true)
        axios.get("https://strapi-store-server.onrender.com/api/products")
            .then(res => {
                setData(res.data.data);
                console.log(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            } )
    }, []);

    return (
        <div className="Product container-xl">
            {
                loading && <div className="mx-auto px-[50%] mt-40"><HashLoader color="#0009ff" /></div>
            }
            <div className="">
                <div className="wrapper-product flex items-center flex-wrap justify-between">
                    {
                        data.map((res, i) => {
                            let x = res.attributes.price
                            const y = x.toString().split('').slice(0, -2).join('')
                            const newNum = Number(y)
                            return (
                                <Card ui={res} values={newNum} key={i}></Card>
            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product