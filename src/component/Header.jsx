
import '../App.css'

const Header = (Props) => {
    let { header } = Props;
    let { title, home, about, service, contact } = header;
    return (
        <div>
             <div className="header_sec">
                <div className="container">
                    <div className="header_area">
                        <div className="logo">{title}</div>
                        <div className="menuItem">
                            <ul>
                                <li><a href="#">{home}</a></li>
                                <li><a href="#">{about}</a></li>
                                <li><a href="#">{service}</a></li>
                                <li><a href="#">{contact}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;