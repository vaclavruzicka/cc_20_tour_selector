//DestinationSelector Component

//Importing React
import React, { useState } from "react";

//Creating a function that extracts all different tour names.
const DestinationSelector = ({ tours, onDestinationChange }) => {
    const [selectedDestination, setSelectedDestination] = useState("");
    const differentDestinations = [
        "All Destinations",
        ...new Set(
            tours.map((tour) => {

                //Splits the tour name into two words.
                const words = tour.name.split("")

                //Extracts a third word, and uses an empty string if the thrid word does not exist.
                return words[2] || ""

                //Removes any empty stings.
            }).filter((destination) => destination)
        )
    ]

    //Creating a function that takes care of any dropdown changes.
    const handleChange = (event) => {
        const destination = event.target.value;
        setSelectedDestination(destination)
        onDestinationChange(destination === "All Destinations" ? "" : destination)
    }

    return (
        <div className="destination-selector">
            <label htmlFor="destination">Select a Destination</label>
            <select 
            id="destination"
            value={selectedDestination}
            onChange={handleChange}>
                {differentDestinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    )
}

//Exports DestinationSelector
export default DestinationSelector