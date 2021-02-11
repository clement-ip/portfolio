import React from "react";

function Footer(){
    const getCurrentYear = () => {
        return new Date().getFullYear();  
    };

    return(
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    <strong><span>&copy; {getCurrentYear()} Clement Ip</span></strong>
                </div>
            </div>
        </footer>
    );
}

export default Footer;