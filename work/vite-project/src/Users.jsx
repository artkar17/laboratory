import axios from 'axios'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'


export default function Users () { 
    const users = [

       /* useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com')
            .then(data => {
                console.log(data.data)
            })
            .catch(e=>{
                console.log('Ощибка',e.message);
            })

        },[]) */
        {
            name: 'Як',
            surname: 'Рыло',
            thirname: 'Борывыч',
            age: '666',
            phone: '+794224666' 
        },
        {
            name: 'Андарсан',
            surname: 'Рыwdwdло',
            thirname: 'Бwdwwdwd',
            age: '666',
            phone: '+794wdwd224666'    
        }, 
    ]
    return (
        <div className='user-card'>

            {users.map((el,id) => (
                <div className='user' key={id}>
                    <div className='card'>
                        <p>Имя: {el.name}</p>
                        <p>Фамилия: {el.surname}</p>
                        <p>Отчество: {el.thirname}</p>
                        <p>Возраст:{el.age}</p>
                        <p>Телефон: {el.phone}</p>
                    </div>
                    <Link to ='/users/1'><button className='but'>Подробнее</button></Link>
                </div>
                ))
            }
        </div>
    )
}