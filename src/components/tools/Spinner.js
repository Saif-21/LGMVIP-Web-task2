import loader from './Loader.gif'

const Spinner = (props) => {
    const { loaderProp } = props;

    return (
        <div style={{ display: `${loaderProp === true ? 'block' : 'none'},`, textAlign: 'center', marginTop: '23px' }}>
            <img src={loader} alt="Loading" />
        </div>
    )
}

export default Spinner