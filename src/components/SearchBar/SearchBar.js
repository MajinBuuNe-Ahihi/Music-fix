
import TextField from "@mui/material/TextField";

import {Search} from './SearchBar-styled'

function SearchBar() {
    return (
        <Search>
            <div className="search">
                <TextField
                id="outlined-basic"
                // class="searchText"
                variant="outlined"
                fullWidth
                label="Search"
                />
            </div>
        </Search>
    )
}


export default SearchBar