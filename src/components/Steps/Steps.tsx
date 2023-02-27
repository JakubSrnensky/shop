import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Steps.scss'

export default function Steps() {

    const [ currentPage, setCurrentPage ] = useState<any>()

    const { pathname } = useLocation()

    useEffect(() => {
        setCurrentPage(pathname)
    }, [pathname])

    return (
        <ul className="steps">
            <li className={currentPage?.includes("cart") ? 'isActive' : ''}><span>01</span></li>
            <li className={currentPage?.includes("udaje") ? 'isActive' : ''}><span>02</span></li>
            <li className={currentPage?.includes("konec") ? 'isActive' : ''}><span>03</span></li>
        </ul>
    )
}