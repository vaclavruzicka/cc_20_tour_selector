//Gallery.jsx

//Importing React, useState, and useEffect from React and TourCard component.

import React, { useState, useEffect } from "react";
import TourCard from "./TourCard";

//Creating the TourFilter component which fetches the tours from the API and displays them.
const TourFilter = ({ tours, setTours, onRemove }) => {
    
    //State to manage the loading and error states.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    //Function to fetch tours from the API.
    const fetchTours = async () => {
        try {
            const response = await fetch("https://course-api.com/react-tours-project")
            if (!response.ok) {
                throw new Error("Error fetching tours.")
            }
            const data = await response.json()
            setTours(data)
        } catch (error) {
            setError(true)
            console.error("Error fetching tours:", error)
        } finally {
            setLoading(false)
        }
    }

    //A function handle the loading of tours and the event of no tours being present.
    useEffect(() => {
        fetchTours()
    }, [])
    if (loading) {
        return <h1>Loading tours...</h1>
    }
    if (error) {
        return <h1>Error fetching tours. Please try again later.</h1>
    }
    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No Tours Left</h2>
                <button className="refresh" onClick={fetchTours}>Refresh</button>
            </div>
        )
    }

    //If tours are found, map goes through the tours array and returns a TourCard component for each tour.
    return (
        <section className="tours-list">
            {tours.map((tour) => {
                return (
                    <TourCard
                        key={tour.id}
                        {...tour}
                        onRemove={onRemove}
                        />
                )
            })
        }
        </section>
    )
}

//Exports the TourFilter
export default TourFilter