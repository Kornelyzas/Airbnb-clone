import React, { useState } from 'react'
import './banner.css'
import { Button } from "@material-ui/core"
import Search from '../search/Search';
import { Link, useHistory } from 'react-router-dom'

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner_search'>
                {/* when clicked if true gonna become false and opposite */}
                    <Button onClick={() => 
                    setShowSearch(!showSearch)} className='banner_search_button' variant='outlined'>
                        {showSearch ? "Hide" : "Search Dates"}
                    </Button>
                {showSearch && <Search/>}
            </div>

            <div className='banner_info'>
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    Plan a different getaway to uncover
                    the hidden gems near you.
                </h5>
                    <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
