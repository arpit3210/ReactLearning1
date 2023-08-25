
export default function DataBindingComponent() {
    var Product = {
        Name: "Samsung TV",
        Price: 8374256.872,
        Stock: false
    }



    // Binding Collection of data array

    var categories = ["All", "Electronics", "Footwear", "Fashion"]


    let StockDetails =[
        
            {Name : 'Samsung TV', Price : 23465.435},
            {Name : 'Blockchain', Price : 5.435}
        
    ]

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

{/* How to show data in table format */}

<h1>Table for StockDetails and Price</h1>
<table className="table table-hover">
    <thead>
       <tr>
        <th>Name</th>
        <th>Price</th>

       </tr>
    </thead>
    <tbody>
        {
            StockDetails.map(items => 
                <tr>
                    <td>{items.Name}</td>
                    <td>{items.Price}</td>
                </tr>
                )
        }
    </tbody>
</table>

        </div>
    )

}