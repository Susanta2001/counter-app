import React from 'react'
import PropTypes from 'prop-types'

function CounterMechanism(props) {
  return (
    <>
    <div className="container bg-dark my-3">
        <p className="text-light text-center" style={{fontSize:'350px'}}>{props.counterValue}</p>
        <div className="container d-flex justify-content-center" style={{gap: '40px', paddingBottom: '20px'}}>
            <button className='btn btn-success' disabled={props.counterValue<=0} onClick={props.handleOnMinus}><span className="material-symbols-outlined text-center">remove</span></button>
            <button className='btn btn-success' onClick={props.handleOnReset}><span className="material-symbols-outlined text-center">restart_alt</span></button>
            <button className='btn btn-success' onClick={props.handleOnPlus}>
            <span className="material-symbols-outlined text-center">add</span></button>
        </div>
    </div>
    </>
  )
}

CounterMechanism.propTypes = {
    counterValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    handleOnPlus: PropTypes.func,
    handleOnReset: PropTypes.func,
    handleOnMinus: PropTypes.func
}

export default CounterMechanism
