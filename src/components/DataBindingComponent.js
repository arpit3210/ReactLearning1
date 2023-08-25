
export default function DataBindingComponent() {
    var Product = {
        Name: "Samsung TV",
        Price: 8374256.872,
        Stock: false
    }



    // Binding Collection of data array

    var categories = ["All", "Electronics", "Footwear", "Fashion"]

    return (
        <div className="container">
            <h1>Product Details (Binding Objects)</h1>
            <dl>
                <dt>Name</dt>
                <dd>
                    {Product.Name}
                </dd>
                <dt>Price</dt>
                <dd>
                    {Product.Price}
                </dd>
                <dt>Stock</dt>
                <dd>
                    {(Product.Stock === true) ? "Available" : "Not Available Out of Stock"}
                </dd>
            </dl>





            <h2>Categories  (Binding data collection/array   to   print/show/get)</h2>
            <ol>
                {
                    categories.map(category =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>


            <select>

                {

                    categories.map(category =>
                        <option key={category} value={category}> {category}</option>
                    )
                }



            </select>
        </div>
    )

}