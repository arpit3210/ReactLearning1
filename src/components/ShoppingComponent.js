

import { useState, useEffect } from "react";

export default function ShoppingComponent() {
    const [Categories, SetCategories] = useState([]);


    function LoadCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => 
               { 
                data.unshift('All');
                SetCategories(data);
            } )
    }

    useEffect(() => {
        LoadCategories();
    }, [])


    return (
        <>
            <div className="container-fluid">
                <header className="bg-danger text-white text-center p-2">
                    <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
                </header>

                <section>
                    <nav className="col-3">
                        <div>
                            <label> Select a Category</label>
                            <div>
                                <select className="form-select">
                              {Categories.map(
                                Category =>
                                <option key={Category}> {Category.toUpperCase()}</option>
                              )}
                                </select>
                            </div>
                        </div>
                    </nav>

                    <main className="col-9">

                    </main>
                </section>
            </div>
        </>
    )
}