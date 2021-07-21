import  {useEffect}  from "react";

//Custom Hook.
const useTittleCount = (count) =>{
    useEffect(() => {
        console.log("I am first!!");
        if (count >= 1) {
            document.title = 'Carnage '+count;
        }
        else{
            document.title = 'Carnage'
        }
    }, [count]);
}

export default useTittleCount;