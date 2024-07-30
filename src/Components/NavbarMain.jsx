import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavbarMain =()=>{
    return(
        <>
        <Navbar className="bg-dark ">
            <NavbarBrand className="text-white fw-bold fs-1 me-auto">My Shop 🛍️</NavbarBrand>
            <Nav className="fs-5 fw-bold me-auto">
                <NavLink className="m-5 "><Link to="/" style={{color:"white"}}>Beauty</Link></NavLink>
                <NavLink className="m-5"><Link to="bevarage" style={{color:"white"}}>Bevarages</Link></NavLink>
                <NavLink className="m-5"><Link to="games" style={{color:"white"}}>Games</Link></NavLink>
            </Nav>
        </Navbar>
        </>
    )
}
export default NavbarMain;