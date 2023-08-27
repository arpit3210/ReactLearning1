import React, { useState, useEffect } from "react";

// function DataApiBindingComponent() {
//     const [mars, setMars] = useState();

//     useEffect(() => {
//         fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
//             .then(response => response.json())
//             .then(data => {
//                 setMars(data);
//             })
//     }, []);

//     return (
//         <div className="container">
//             <h2>Mars Satellite captured images Data</h2>

//             {mars && mars.photos ? (
//                 <table className="table table-hover">
//                     <thead>
//                         <tr>
//                             <th>Data ID</th>
//                             <th>Camera Name</th>
//                             <th>Rover Name</th>
//                             <th>Landing Date</th>
//                             <th>launch_date</th>
//                             <th>Preview of Captured Images</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {mars.photos.map(photo => (
//                             <tr key={photo.id}>
//                                 <td>{photo.id}</td>
//                                 <td>{photo.camera.full_name}</td>
//                                 <td>{photo.rover.name}</td>
//                                 <td>{photo.rover.landing_date}</td>
//                                 <td>{photo.rover.launch_date}</td>
//                                 <td>
//                                     <img src={photo.img_src} alt="Captured" width="100px" />
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }





function DataApiBindingComponent() {
    const [mars, setMars] = useState();

    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            .then(response => response.json())
            .then(data => {
                setMars(data);
            })
    }, []);

    return (
        <div className="container">
            <h2>Mars Satellite captured images Data</h2>
<div className="d-flex flex-wrap">

{mars && mars.photos ? (
                mars.photos.map(data =>

                    <div className="card p-2 m-2 w-25"  width="18rem">
                    <img className="card-img-top" src={data.img_src}  height="150" alt="Captured"  />
                    <div className="card-body">
                        <div className="card-header">
                            <h2>{data.camera.full_name}</h2>
                        </div>
                        <h5 className="card-title">{data.id}</h5>
                        <p className="card-text">{data.rover.name}</p>
                        <a href={data.img_src} class="btn btn-primary">View Full Picture</a>
                    </div>
                </div>
                    ) ) : (
                <p>Loading...</p>
            )}

</div>
    
        </div>
    );
}









// function DataApiBindingComponent()
// {
//     const [getSatellite, setSatellite] = useState()

// useEffect(()=>
// fetch("https://isro.vercel.app/api/customer_satellites")
// .then(response=> response.json())
// .then(data => {
//     setSatellite(data)
// } ),
// [])



// return(<>
// <div className="container">

// {getSatellite ?
// (
//     <table className="table table-hover">
// <thead>
//     <tr>
//         <th>Satellite ID</th>
//         <th>Country</th>
//         <th>Launch Date</th>
//         <th>Mass</th>
//         <th>Launcher</th>
//     </tr>
// </thead>
// <tbody>
//     {getSatellite.customer_satellites.map(product_data=>
//         <tr>
//             <td key={product_data.id}>{product_data.id}</td>
//             <td key={product_data.country}>{product_data.country}</td>
//             <td key={product_data.launch_date}>{product_data.launch_date}</td>
//             <td key={product_data.mass}>{product_data.mass}</td>
//             <td key={product_data.launcher}>{product_data.launcher}</td>
//         </tr>
//         )}
// </tbody>
// </table>
// )
// : (<p>Loading</p>)}

// </div>
// </>)
// }

export default DataApiBindingComponent;
