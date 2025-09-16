import useAnimated from '../../hooks/useAnimateds'
import './style.css'

function NotFound() {

    const {
        dots,
        parent

    } = useAnimated();



    return (
        <div className="format">
            <h1 >Produto Não Encontrado</h1>
            <h2>Reredisionando
                <span ref={parent} style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    {dots}
                </span>
            </h2>
        </div>
    )
}

export default NotFound