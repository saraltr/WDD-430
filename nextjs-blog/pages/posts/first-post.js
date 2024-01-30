import Link from "next/link"
import Head from "next/head"

// next/script is an extension of the HTML <script> element and optimizes when additional scripts are fetched and executed.
import Script from "next/script"

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First Post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    // strategy controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time

                    onLoad={() =>
                        // onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                >
                </Script>
            </Head>
            <h1>Fist Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}