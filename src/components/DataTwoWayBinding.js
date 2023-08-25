

export default function DataTwoWayBinding()
{
 
    var username = "John";

    return (
        < >



<h1>Text Input </h1>
<input type="text" value={username} />
<br />

Hello ! {username}
      
        
        </>
    );
}