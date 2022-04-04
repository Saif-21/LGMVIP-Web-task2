import './Card.css'

const Cards = (props) => {
    const { data } = props
    return (
        <>
            <div className="column">
                <div className="card">
                    <img src={data.avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-title">First Name : {data.first_name}</p>
                        <p className="card-title">Last Name : {data.last_name}</p>
                        <p className="card-text">Email : {data.email} </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards