import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SelectMenu({ categoryOptions }) {  // Lägg till setSelectedCategory i props

    const navigate = useNavigate();

    const { categoryId } = useParams("");
    
    const [defaultValue, setDefaultValue] = useState("");

    useEffect(() => {

        setDefaultValue(categoryId ? categoryId : "Kategorier");

    }, [categoryId]);

    function handleSelect(categoryValue) {
        navigate(`/category/${categoryValue}`, { replace: true });
    }

    return (
        <>
            <div className="categories-container">
                <label htmlFor="category"></label>
                <select
                    className="category-select"
                    name="category"
                    onChange={(e) => handleSelect(e.target.value)} // Uppdatera kategorin baserat på användarens val
                    value={defaultValue}
                >
                    <option className="default-select-value" defaultValue="Kategorier" hidden>Kategorier</option>
                    {categoryOptions}
                </select>
            </div>
        </>
    );
}

