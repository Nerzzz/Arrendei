import React from 'react'

function ActionButton(props) {
  return (
    <button type="submit" className="bg-linear-to-r from-primary to-accent p-[15px] text-white rounded-[10px] cursor-pointer flex text-[12pt] justify-center items-center" disabled={props.isLoading}>
          {!props.isLoading && <span>{props.text}</span>}
          {props.isLoading && <img src="./icons/loading.svg" className='w-[16pt] h-[16pt] animate-spin invert' alt="" />}
    </button>
  )
}

export default ActionButton