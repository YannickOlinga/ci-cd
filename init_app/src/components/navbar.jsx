import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function navbar() {
  return (
    <div>
        <nav>
            <div className="logo">OpenClassRooms</div>
            <ul className="nav-links">
                <li><a href="#">FORMMATIONS</a></li>
                <li><a href="#">ALTERNANCE</a></li>
                <li><a href="#">FINANCEMENT</a></li>
                <li><a href="#">POUR LES EMPLOYEURS</a></li>
                <FaSearch />
                <FaRegQuestionCircle className='info_icon' />
            </ul>
        </nav>



    </div>
  )
}
