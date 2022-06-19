import style from "./index.module.css";
import Image from "next/image";
import { useState } from "react";

interface SecondaryBreedProps {
  image: string;
  breedName: string;
  description: string;
  url: string;
  breedOrigin:string
}

const SecondaryBread = ({
  image,
  breedName,
  description,
  url,
  breedOrigin
}: SecondaryBreedProps) => {
  const [show, setShow] = useState(false);
  const handelShow = () => setShow(!show);
  
if(image===undefined){
  image = "https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
}



  return (
    <div>
      <Image
        alt="random breed picture"
        width={200}
        height={200}
        src={image}
        onClick={handelShow}
      />
      {show && (
        <div>
          <h1>{breedName}</h1>
          <p>{description}</p>
          <p><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
        </div>
      )}

      {!show &&
      (<div>
         <h2>{breedName}</h2>
      <p>{breedOrigin}</p>
      </div>
      )}
    </div>
  );
};

export default SecondaryBread;
