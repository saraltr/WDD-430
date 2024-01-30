import '../styles/global.css'

// functional component that takes Component and pageProps as props.
export default function App({ Component, pageProps }) {
  // the spread operator ({...pageProps}) is used to pass all properties of pageProps as props to the Component.
  return <Component {...pageProps} />;
}