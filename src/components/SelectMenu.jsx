import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SelectMenu({ categoryOptions }) {

    const navigate = useNavigate();

    const { categoryId } = useParams("");

    const [defaultValue, setDefaultValue] = useState("");

    //sets the displayed text on the select depending on url param
    useEffect(() => {

        setDefaultValue(categoryId ? categoryId : "Kategorier");

    }, [categoryId]);

    //routs to categories on selected category
    function handleSelect(categoryValue) {
        if (categoryValue !== "Kategorier") {

            navigate(`/category/${categoryValue}`, { replace: true });
        }
    }

    return (
        <>
            <div className="categories-container">
                <label htmlFor="category"></label>
                <select
                    className="category-select"
                    name="category"
                    onChange={(e) => handleSelect(e.target.value)} // update the category on input
                    value={defaultValue}
                >
                    <option className="default-select-value" defaultValue="Kategorier" hidden>Kategorier</option>
                    {categoryOptions} {/* list of avalible categories */}
                </select>
            </div>
        </>
    );
}

