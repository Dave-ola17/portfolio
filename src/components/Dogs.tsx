import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

    const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    };

    
   

const Dogs = () => {

    // useStates for the loader
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const fetchDogImage = async () => {
        setLoading(true);
        try{
            const response = await fetch('https://dog.ceo/api/breed/hound/ibizan/images/random')
            if (response.ok) {
                const data = await response.json();
                setDogUrlApi(data.message);
            } else {
                alert('Error fetching data from Api')
            }
        }catch(error) {
            console.error('there was a problem fetching data from Api ', error)
        }finally{
            setLoading(false);
        }
    };
    // useStates for the DogApi
    const [ dogUrlApi, setDogUrlApi ] = useState("");
    useEffect(() => {
        
        fetchDogImage();
    }, []);
    const changeImageFunction = () => {
        fetchDogImage();
    };
  return (
    <div>
        <h3 className="  underline pb-2 border-blue-400 text-gray-500 ">Dog's Section </h3>

        <div className=" flex flex-col items-center py-20 ">
           {
            loading ? (
                <ClipLoader size={50} color={'#123abc'} loading={loading} />
            ) : (
                <img className="text-center items-center"  src={dogUrlApi} alt="dog images" width={300} height={300} />                
            )
           }
           <button className=" mt-5 rounded px-2 py-1 text-white border border-gray-400 " onClick={changeImageFunction} >Next Image</button>
        </div>

    </div>
  )
}

export default Dogs