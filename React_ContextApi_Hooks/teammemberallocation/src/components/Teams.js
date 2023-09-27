import React from "react";

const Teams = ({team, handleSelect}) => {
    return (
        <select className="form-select form-select-lg" value={team} onChange={handleSelect}>
            <option value='TeamA'>TeamA</option>
            <option value='TeamB'>TeamB</option>
            <option value='TeamC'>TeamC</option>
            <option value='TeamD'>TeamD</option>
        </select>)

}

export default Teams;