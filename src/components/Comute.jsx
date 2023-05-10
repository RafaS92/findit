import { useLoadScript } from '@react-google-maps/api'
import Map from "./Map"
import React from 'react'

function Comute() {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyAVmLdsY4QISPZDOd39pTsFpyfxuxYPxXk",
        libraries: ['places']
    })

    if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <Map />
            </div>
        )
    }
}

export default Comute