import { DotLoader} from 'react-spinners'

function Loader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <DotLoader color="#FFFF00" size={80} />
        </div>
    )
}

export default Loader;
