import Link from "next/link"
import colors from "../config/colors.json"
import project from "../config/project.json"

const NavLink = ({ href, external, margin, disabled, children }) => (
    <>
        
        { disabled ? (
            <div className="link">
                {children}
            </div>
        ) : external ? (
            <a className="link" href={href} target="_blank">
                {children}
            </a>
        ) : (
            <Link href={href}>
                <a className="link">
                    {children}
                </a>
            </Link>
        )}
        <style jsx>{`

        `}</style>
    </>
)

const NavBar = () => (
    <>
        <nav className="nav">
            <img className="logo" src={project.logo}></img>
            <div className="title">{project.name}</div>
            <NavLink href={``}>
                {/* todo: put in pages from project.json */}
            </NavLink>
        </nav>

        <style jsx>{`
        
        `}</style>
    </>
)

const Footer = () => (
    <>
    </>
)

const Layout = ({ children }) => (
    <>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
    </>
)

export default Layout