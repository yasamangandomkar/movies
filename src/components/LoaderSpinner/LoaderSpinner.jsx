import DotLoader from 'react-spinners/DotLoader'
const LoaderSpinner = () => {
    return (
        <div className='  w-full h-full flex justify-center items-center'>
            <DotLoader color="#ffff" size={100}
                aria-label="Loading Spinner"
                data-testid="loader" />
        </div>
    )
}

export default LoaderSpinner