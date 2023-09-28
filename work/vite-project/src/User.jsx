import { useParams } from "react-router-dom"

export default function User () { 

    const param = useParams()
    
    return(
        <div className="user1">
            {param.id}
            <h1>Рыло Рылович</h1>
            <p>1666 от рождества христова</p>
        </div>
    )
}