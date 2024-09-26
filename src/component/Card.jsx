
function Card() {
    return (
        <div className="card card-side bg-base-100 shadow-xl w-[25vw]  border-stone-200	rounded-s border-4">
            <figure className="w-[20vw]">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
            </figure>
            <div className=" w-[20vw] p-1">
                <h2 className="card-title">New movi</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    )
}

export default Card
