import project from "../config/project.json"
import colors from "../config/colors.json"
import Head from "next/head"
import Error from "next/error"
import Layout from "../components/Layout.jsx"
import { EthereumContextProvider } from "../state/EthereumContext.js"


const Metadata = ({ page }) => {
    const title = `${project.name}${project.suffix ? ` ${project.suffix}` : ""}${page ? ` - ${page}` : ""}`
    return (
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width"></meta>
            <meta name="description" content={project.desc}></meta>
            <meta property="og:title" content={title}></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image" content={`https://${project.domain}${project.logo}`}></meta>
            <meta property="og:description" content={project.desc}></meta>

            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:site" content={project.twitter}></meta>
            <meta name="twitter:title" content={title}></meta>
            <meta name="twitter:description" content={project.desc}></meta>
            <meta name="twitter:image" content={`https://${project.domain}${project.logo}`}></meta>
            <meta name="twitter:creator" content={project.twitter}></meta>

            <title>{title}</title>
            <link rel="icon" href={project.logo}></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href={`https://fonts.googleapis.com/css2?family=${project.googleFont}:wght@300;400;500;600;700;900&display=swap`} rel="stylesheet"></link>
        </Head>
    )
}

const App = ({ Component, pageProps }) => {
    if (pageProps.statusCode) {
        return <Error statusCode={pageProps.statusCode}></Error>
    }

    return (
        <>
            <Metadata page={pageProps.page}></Metadata>
            <EthereumContextProvider>
                <Layout>
                    <Component {...pageProps}></Component>
                </Layout>
            </EthereumContextProvider>

            <style jsx global>{`
                :root {
                    ${Object.entries(colors.colors).map(mapping => `--${mapping[0]}: ${mapping[1]};`).join("")}
                    ${Object.entries(colors.theme).map(mapping => `--${mapping[0]}: var(--${mapping[1]});`).join("")}
                    --border-radius: 8px;
                }

                * {
                    font-family: "${project.googleFont}", sans-serif;
                    color: var(--text);
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    background-color: var(--bg);
                    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23${colors.colors[colors.theme["bg-light"]].slice(1)}' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
                }

                h1, h2, h3 {
                    font-size: initial;
                    margin: 0;
                }

                p {
                    margin: 0;
                }

                a {
                    color: initial;
                    text-decoration: initial;
                    cursor: pointer;
                }

                button {
                    cursor: pointer;
                    background-color: transparent;
                    border: none;
                    padding: 0;
                }

                .rounded {
                    border-radius: var(--border-radius);
                }

                .bordered {
                    border: 1px solid var(--accent);
                    box-shadow: 0 0 4px var(--accent);
                }

                .alt {
                    background-color: var(--bg-alt);
                }

                .main {
                    background-color: var(--bg);
                }

                .padded-s {
                    padding: 6px 20px;
                }

                .row {
                    display: flex;
                    flex-direction: row;
                }

                .col {
                    display: flex;
                    flex-direction: column;
                }

                .center-m {
                    justify-content: center;
                }

                .center-a {
                    align-items: center;
                }

                .evenly {
                    justify-content: space-evenly;
                }

                .between {
                    justify-content: space-between;
                }
            `}</style>
        </>
    )
}

export default App