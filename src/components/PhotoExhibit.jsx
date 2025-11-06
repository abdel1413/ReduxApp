export default function PhotoExhibit(){
    return <>
     <div className="main-container grid grid-cols-3 gap-8">
      <ul>
        <li className="card rounded-md p-3">
          <img src="https://cdn.freecodecamp.org/curriculum/labs/colosseo.jpg" alt="colosseum picture" className="rounded-md"/>
          <h3 className="subheading text-500 text-lg font-semibold">Colosseum, Rome</h3>
          <p className="description text-xl">
            There is so much history and beauty. The light hits it just right.
          </p>
        </li>
        <li className="card rounded-md p-3">
          <img src="https://cdn.freecodecamp.org/curriculum/labs/alps.jpg" alt="alps picture" className="rounded-md"/>
          <h3 className="subheading rounded-md text-lg font-semibold"> The Alps</h3>
          <p className="description text-xl">
            
The mountains go on forever and the view is breathtaking.
          </p>
        </li>
        <li className="card rounded-md p-3">
          <img src="https://cdn.freecodecamp.org/curriculum/labs/sea.jpg" alt="seascape picture" className="rounded-md"/>
          <h3 className="subheading rounded-md text-lg font-semibold">Seascape</h3>
          <p className="description text-lg">
            
The water was still, the air was cool and the feeling is pure peace.
          </p>
        </li>
       
      </ul>
    </div>
    </>
}