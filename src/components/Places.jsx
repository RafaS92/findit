
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
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Input from '@mui/joy/Input';

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
        <div className="search-container">
          <ImageSearchIcon />
          <ComboboxInput 
          value={value}
          onChange={e => setValue(e.target.value)} 
          className="combobox-input"
          disabled={!ready}
          placeholder="Ex:742 Evergreen Terrace St"
          />
        </div>

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