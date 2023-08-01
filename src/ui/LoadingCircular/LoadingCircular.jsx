import React from 'react'
import LoadingCircularEstilo from './LoadingCircularEstilo.css';
import loading from '../../img/loading.gif';

const LoadingCircular = () => {
    return (
        <div className={LoadingCircularEstilo.loader_container}>
            <img className={LoadingCircularEstilo.loader} src={loading} />
        </div>
    )
}
export default LoadingCircular