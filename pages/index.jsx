import Link from "next/link"
import colors from "../config/colors.json"
import project from "../config/project.json"

const CardLink = ({ href, children }) => (
    <>
        
        <Link href={href}>
            <a className="link rounded bordered alt flex col">
                {children}
            </a>
        </Link>

        <style jsx>{`
            .link {
                color: var(--text);
                font-size: 1.25rem;
                border-bottom: 2px solid var(--accent);
                padding: 4px 12px;
                transition: 0.2s border-width, 0.2s padding-bottom, 0.2s text-shadow;
            }

            .link:hover {
                border-width: 4px;
                padding-bottom: 2px;
                text-shadow: 0 0 8px var(--accent);
            }
        `}</style>
    </>
)

const Home = () => {

    return (
        <>
            <div className="page-container row center-m center-a">
                <div className="link-grid">
                    <Link href="/vault">
                        <a className="link vault rounded bordered alt row center-a center-m">
                            <div className="symbol-text-container col center-m">
                                <img src="/symbols/1.svg" />
                                <div>Deposit DAI to mint bcUSD</div>
                            </div>
                        </a>
                    </Link>

                    <Link href="/farm">
                        <a className="link farm rounded bordered alt row center-a center-m">
                            <div className="symbol-text-container col center-m">
                                <img src="/symbols/2.svg" />
                                <div>Farm BCN, BCN LP, bcUSD LP</div>
                            </div>
                        </a>
                    </Link>

                    <Link href="/swap">
                        <a className="link swap rounded bordered alt row center-a evenly">
                            <div className="symbol-text-container col center-m">
                                <img src="/symbols/3.svg" />
                                <div>Transmute bcUSD to DAI 1:1</div>
                            </div>

                            <div className="symbol-text-container col center-m">
                                <img src="/symbols/4.svg" />
                                <div>Swap bcUSD to DAI on Curve</div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            

            <style jsx>{`
                .page-container {
                    height: calc(100vh - 70px);
                    width: 100%;
                    overflow-x: none;
                    overflow-y: auto;
                }

                .link-grid {
                    display: grid;
                    grid-template-columns: 50% 50%;
                    grid-template-rows: 50% 50%;
                    max-width: 800px;
                    width: 100%;
                    gap: 24px;
                }

                .link {
                    padding: 40px 20px;
                    box-shadow: 0 0 8px var(--accent);
                }

                .link:hover img {
                    filter: drop-shadow(0 0 8px var(--accent));
                }

                .symbol-text-container img {
                    height: 100px;
                    margin-bottom: 20px;
                    transition: 0.2s filter;
                }

                .symbol-text-container div {
                    text-align: center;
                    font-size: 1.5rem;
                }

                .link.vault {
                    grid-area: 1 / 1 / 2 / 2;
                }

                .link.farm {
                    grid-area: 1 / 2 / 2 / 3;
                }

                .link.swap {
                    grid-area: 2 / 1 / 3 / 3;
                }
            `}</style>
        </>
    )
}

export default Home