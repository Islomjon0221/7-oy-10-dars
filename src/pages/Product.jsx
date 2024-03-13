import "../App.css"
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

function Product() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://strapi-store-server.onrender.com/api/products")
            .then(res => {
                setData(res.data.data);
                console.log(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="Product">
            <div className="containers">
                <div className="wrapper-product flex items-center flex-wrap justify-between">
                    {
                        data.map((res, i) => {
                            let x = res.attributes.price
                            const y = x.toString().split('').slice(0, -2).join('')
                            const newNum = Number(y)
                            return (
                                <Card ui={res.attributes} values={newNum} key={i}></Card>
            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product