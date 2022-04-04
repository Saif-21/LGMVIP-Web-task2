import './Home.css'
import '../tools/Navbar.css'
import React, { useContext, useState } from 'react'
import UserDataContext from '../../context/UserDataContext'
import Cards from './Cards';
import loadergif from '../tools/Loader.gif'



const Home = () => {
    const GetData = useContext(UserDataContext);

    const { data, fetchData } = GetData;
    const [page, setPage] = useState(null);
    const [loader, setLoader] = useState(false)
    const [button, setbutton] = useState(false);

    console.log(page, "START")

    const handleClick = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            fetchData(page)
            setbutton(true)
            console.log("GET", page)
        }, 100);
        setPage(page + 2)
    }



    const NextFetch = async () => {
        fetchData(page)
        setPage(page - 1)

    }

    const previousFetch = () => {
        if (page === 1) {
            fetchData(page)
            console.log(page)
            setPage(page + 1)
        }
    }

    return (
        <>
            {/* // ! Navigation */}

            <nav className='nav'>
                <div className='brandName'>
                    <h1>API</h1>
                </div>
                <div className="options">
                    <ul className='ul'>
                        <li className='listItem'><button className='btnNav' disabled={page >= 1} onClick={handleClick}>Get User</button></li>
                    </ul>
                </div>
            </nav>

            {/* //! Spinner  */}
            <div style={{ display: `${loader === true ? 'block' : 'none'}`, textAlign: 'center' }}>
                <img src={loadergif} alt="Loading" />
            </div>

            {/* //! Cards */}
            <div className="row ">
                {data.map((e) => {

                    return <Cards data={e} key={e.id} />
                })}

            </div>
            {/* //! Next and previous buttions */}
            {button === true ?
                <div className="container">
                    <button disabled={page < 1} className='btn' onClick={previousFetch} >Previous</button>
                    <button disabled={page < Math.ceil(12 / 6)} className='btn' id='nextbutton' onClick={NextFetch} >Next</button>
                </div>
                : ''}

        </>
    )
}

export default Home