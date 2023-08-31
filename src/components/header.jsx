


export default function Header() {
    return (
        <>
        <div className="header">
        <img className="header-logo" src="src/images/mercatura.png" />
            <div className="header-search">
                <input className="header searchIn put" type="text" />
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
            </div>

        </div>
        </>
    )
}