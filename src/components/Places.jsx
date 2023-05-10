
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

function Places({setPlace}) {
    const {ready,value,setValue,suggestions:{status,data},clearSuggestions} = usePlacesAutocomplete()

    const handleSelect = async (place) => {
      setValue(place,false)
      clearSuggestions()

      const resulst = await getGeocode({address:place})
      const {lat,lng} = await getLatLng(resulst[0])
      setPlace({lat,lng})
    }

  return (
    <Combobox onSelect={handleSelect}>
        <ComboboxInput 
         value={value}
         onChange={e => setValue(e.target.value)} 
         className="combobox-input"
         disabled={!ready}
         placeholder="Where you going?"
        />
         <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' && data.map(suggestion => (
              <ComboboxOption key={suggestion.place_id} value={suggestion.description} /> 
            ))}
          </ComboboxList>
         </ComboboxPopover>
    </Combobox>
  )
}

export default Places