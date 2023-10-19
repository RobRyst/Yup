'use client'
import Head from "next/head";
import { GET, POST } from "../api/catfacts";
import { useEffect, useState } from "react";

const Animals = () => {
    const [catfacts, setCatFacts] = useState([])
    const [data, setData] = useState("")

    GET()
    .then((data) => {
        //console logger riktig
        console.log(data);
        setCatFacts(data);
    })
    .catch((error) => {
        console.error("Error fetching cat facts: ", error);
    });

    async function postCatFacts() {
        try {
            const data = { data };
            const response = await POST(data);
            console.log('POST Request Response:', response.data);
            setData(response?.data?.data)
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    }
    
    useEffect(() => {
        GET();
    }, [])

    return (
        <>
        <Head>
            <title>CAT FACTS</title>
        </Head>
            <h1>CAT FACTS</h1>
            <section>
                <input
                    type="text"
                    value={catfacts}
                    onChange={(e) => setFact(e.target.value)}
                />
                <button onClick={postCatFacts}>Post Cat Fact</button>
                <ul>
                    {catfacts.map((catFact) => (
                        <li key={catFact._id}>{catFact.text}</li>
                    ))}
                    {/* 
                    {JSON.stringify(data)} gjør at siden krasjer, men den skriver ut arrayene i consollen. Ikke fått den til å hente ut riktig info
                    og at den ikke krasjer siden. Den vil bare hente ut info om siden krasjer. 
                    Prøvd å legge til const [data, setData] = useState("") men da slutter den også å funke. 
                    */
                    }
                    <div>
                    {JSON.stringify([data])}
                    </div>
                </ul>
            </section>
            
        </>
    )
}

export default Animals;