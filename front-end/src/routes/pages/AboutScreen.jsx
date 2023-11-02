export const AboutScreen = () =>  {



    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_BASE_URL;

    return (
      <>
        <h1>soy About </h1>
        <h2>{apiKey}</h2>
        <h2>{apiUrl}</h2>
      </>
    )
  }
  