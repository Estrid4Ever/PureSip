import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SelectMenu({ categoryOptions }) {

    const navigate = useNavigate();
    const { categoryId } = useParams();
    const [defaultValue, setDefaultValue] = useState("");

    useEffect(() => {
        setDefaultValue(categoryId ? categoryId : "Kategorier");
    }, [categoryId]);

    function handleSelect(categoryValue) {
        navigate(`/category/${categoryValue}`, { replace: true });
    }

    return (
        <div className="categories-container">
            <label htmlFor="category"></label>
            <select
                className="category-select"
                name="category"
                onChange={(e) => handleSelect(e.target.value)}
                value={defaultValue}
            >
                <option className="default-select-value" value="" hidden>Kategorier</option>
                <option value="lätt">Lätt</option>
                <option value="medel">Medel</option>
                <option value="svår">Svår</option>
                {categoryOptions}
            </select>
        </div>
    );
}


