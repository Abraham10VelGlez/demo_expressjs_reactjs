import Log from './formlog'
import Log2 from './formlog2'
import './indexapp.css'

export default function LayoutCube() {
    return (
        <>
            <div className="area">
                <ul className="box">
                    
                    <li></li>
                    <li></li>
                    <li></li>
                    <div className='log-avg3'></div>
                    <div className='log-avg'>
                        <Log></Log>
                    </div>
                    <div className='log-avg2'>
                        <Log2></Log2>
                       
                    </div>
                    <li></li>
                    <li></li>
                    <li></li>


                </ul>
            </div>
        </>
    )
}

