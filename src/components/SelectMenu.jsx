export default function SelectMenu( {recepies} ) {
	
    const categories = recepies.map(drink => {
        for (const category of drink.categories) {
            <option >{category}</option>
        }
    });

    return (
		<>
			<div>
				<select name="" id="">
					{categories}
				</select>
			</div>
		</>
	);
}
