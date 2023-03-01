import React from "react"
export default function FilterBtn({ handleFilter }) { // handleFilter props jbnaha m home.jsx
	return (
		<select onChange={(e) => handleFilter(e)}> {/* handleFilter constante jenaha m home.jsx*/}
			<option value="all">All</option>
			<option value="guere">guere</option>
			<option value="action">action</option>
            <option value="documentaire">documentaire</option>
            <option value="aventure">aventure</option>
		</select>
	)
}
