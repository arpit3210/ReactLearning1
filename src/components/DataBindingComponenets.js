

export default function DataBindingComponents() {

    let menu = [
        { Category: "Blockchain", Product: ["Corda", "Ethereum", "Polygon", "Bianance Chain", "Polcadot"] },
        { Category: "Defi Projects", Product: ["Realestate", "Liquidity", "Yield Farming", "Bianance Chain", "Polcadot"] }
    ]


    return (
        <>
            <ol>
                {
                    menu.map(items =>
                        <li key={items.Category}> {items.Category}
                            <ul key={items.Product}>
                                {items.Product}
                            </ul>
                        </li>
                    )
                }
            </ol>





            <ol>
                {
                    menu.map(items =>
                        <li key={items.Category}> {items.Category}
                            <ul>
                                {items.Product.map(products =>
                                    <li key={products}> {products} </li>)}
                            </ul>
                        </li>
                    )
                }
            </ol>




<h2>Select a Product</h2>

<select>
{
    menu.map(items => 
    <optgroup key={items.Category} label={items.Category}>
        {
            items.Product.map(products =>
                <option key={products} >{products}</option>
                )
        }
    </optgroup>
    )
}
</select>
      
        </>
    );
}