import project from "../config/project.json"
import colors from "../config/colors.json"
import Head from "next/head"
import Error from "next/error"
import Layout from "../components/Layout.jsx"
import { EthereumContextProvider } from "../state/EthereumContext.js"


const Metadata = ({ page }) => {
    const title = `${project.name}${page ? ` - ${page}` : ""}`
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
            <link href={`https://fonts.googleapis.com/css2?family=${project.googleFont}:wght@300;400;500;600;700&display=swap`} rel="stylesheet"></link>
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
                }

                * {
                    font-family: "${project.googleFont}", sans-serif;
                    color: var(--text);
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    background-color: var(--bg);
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
            `}</style>
        </>
    )
}

export default App