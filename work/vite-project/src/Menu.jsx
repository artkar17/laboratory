
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <ul className='menu-flex'>
            <li><Link className='menu-li' to="/">Главная</Link></li>
            <li ><Link className='menu-li' to="users">Пользователи</Link></li>
            <li className='menu-li'>Группы</li>
        </ul>
    )
}