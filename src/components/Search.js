import React from 'react'

function Search() {
    return (
        <div>
            <form className="form-inline">
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                <div className="input-group mb-2 mr-sm-2">
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" name="usernmame" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Search</button>
            </form>
        </div>
    )
}

export default Search