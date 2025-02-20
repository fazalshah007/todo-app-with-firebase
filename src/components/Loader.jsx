import ScaleLoader from "react-spinners/ScaleLoader"



const Loader = () => {

    return (

        <>
            <div className="w-screen h-screen grid place-items-center">
               <div>
               <ScaleLoader
                    color={"#00008B"}
                    height={45}
                    width={6}
                    margin={4}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
               </div>
            </div>
        </>
    )
}

export default Loader