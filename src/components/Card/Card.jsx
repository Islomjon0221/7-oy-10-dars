import { useNavigate } from "react-router-dom";

function Card(props) {
    const values = props.values
    const {image, title} = props.ui.attributes
    const {id} = props.ui
    const navigate = useNavigate()
    function handleRedirect() {
        navigate(`about/${id}`)
    }
    return (
        <div onClick={handleRedirect} className=" w-96 h-80 p-4 rounded-md text-center bg-white mb-8 shadow-md">
            <img width="320" className="object-cover h-48 rounded-md mb-5" height='192' src={image} alt="" />
            <h3 className="card-h3 text-xl font-semibold text-blue-800 capitalize">{title}</h3>
            <p className="card-p mt-5 text-indigo-900">${values}.99</p>
        </div>
    )
}

export default Card