import React from 'react';
import './Header.css'
import "bootstrap-icons/font/bootstrap-icons.css";



export default function Header() {
    return (
        <>
        <div className="header">
        <img className="header-logo" src="src/images/mercatura.png" />
            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <i className="bi bi-search"></i>
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-lineOne">
                     Hello Guest
                    </span>
                    <span className="header-option-lineTwo">
                     Sign In
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-option-lineOne">
                     Returns
                    </span>
                    <span className="header-option-lineTwo">
                     & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-option-lineOne">
                     Your
                    </span>
                    <span className="header-option-lineTwo">
                     Prime
                    </span>
                </div>
                <div className="header-optionBasket">
                  <i class="bi bi-basket3-fill"></i>
                 <span className="header-option-lineTwo header-basketCount">
                    0
                 </span>
                </div>
            </div>

        </div>
        </>
    )
}