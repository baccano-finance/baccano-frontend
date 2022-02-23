import Link from "next/link"
import colors from "../config/colors.json"
import project from "../config/project.json"
import { useState, useEffect, useContext } from "react"
import EthereumContext from "../state/EthereumContext.js"

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
            .link {
                color: var(--text);
                font-size: 1.4rem;
                border-bottom: 2px solid var(--accent);
                padding: 5px 12px;
                transition: 0.2s border-width, 0.2s padding-bottom, 0.2s text-shadow;
            }

            .link:hover {
                border-width: 4px;
                padding-bottom: 3px;
                text-shadow: 0 0 8px var(--accent);
            }
        `}</style>
    </>
)

const WalletManager = () => {
    const { enabled, chainId, account } = useContext(EthereumContext)
    const [ buttonText, setButtonText ] = useState("Connect Wallet")
    const [ buttonState, setButtonState] = useState(0)

    // Called on state change
    function setText() {
        const stateTextMapping = {
            0: () => "Install Wallet",
            1: () => "Connect Wallet",
            2: () => "Switch Chain",
            3: () => `${account.slice(0, 6)}...${account.slice(-4)}`
        }

        setButtonText(stateTextMapping[buttonState]())
    }

    // Button State
    useEffect(() => {
        if (enabled) {
            if (account) {
                if (chainId === project.chainId.toLowerCase()) {
                    setButtonState(3)
                } else {
                    setButtonState(2)
                }
            } else {
                setButtonState(1)
            }
        } else {
            setButtonState(0)
        }
    }, [enabled, account, chainId])

    // Update button text when state changes
    useEffect(() => {
        setText()
    }, [buttonState])

    // Called on click
    function clickAction() {
        const stateActionMapping = {
            0: () => {
                window.open('https://metamask.io/download/', '_blank');
            },
            1: () => {
                ethereum.request({
                    method: "eth_requestAccounts"
                })
            },
            2: () => {
                ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: project.chainId }]
                })
            },
            3: () => {
                window.open(`${project.explorer}/address/${account}`, '_blank');
            }
        }

        stateActionMapping[buttonState]()
    }

    return (
        <>
            <button className="bordered rounded main padded-s" onClick={clickAction}>{buttonText}</button>
            <style jsx>{`
                button {
                    font-size: 1.4rem;
                    color: var(--text);
                    font-weight: 700;
                    transition: 0.2s text-shadow;
                }

                button:hover {
                    text-shadow: 0 0 8px var(--accent);
                }
            `}</style>
        </>
    )
}

const NavBar = () => (
    <>
        <nav className="nav flex row center-m">
            <div className="nav-container row center-a between">
                <Link href="/">
                    <a className="logo-title flex row center-a">
                        <img className="logo" src={project.logo}></img>
                        <div className ="title">{project.name}</div>
                    </a>
                </Link>

                <div className="nav-links flex row center-a">
                    <NavLink href={`/vault`}>Vault</NavLink>
                    <NavLink href={`/swap`}>Swap</NavLink>
                    <NavLink href={`/farm`}>Farm</NavLink>
                </div>

                <WalletManager />
            </div>
        </nav>

        <style jsx>{`
            .nav {
                height: 70px;
                background-color: var(--bg-alt);
                border-bottom: 1px solid var(--accent);
                box-shadow: 0 0 8px var(--accent);
                padding: 10px 40px;
            }

            .nav-container {
                height: 100%;
                max-width: 1000px;
                width: 100%;
            }

            .logo-title {
                height: 100%;
            }

            .title {
                font-size: 2.15rem;
                font-weight: 700;
            }

            .logo {
                height: 100%;
                margin-right: 14px;
                filter: drop-shadow(0 0 3px var(--accent));
                transition: 0.2s filter;
            }

            .logo-title:hover .logo {
                filter: drop-shadow(0 0 8px var(--accent))
            }

            .nav-links {
                gap: 48px;
            }
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