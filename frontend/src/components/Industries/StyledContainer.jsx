import React from 'react'

function StyledContainer({children}) {
  return (
    <div className='py-[40px] bg-blue-600'>

        {children}
    </div>
  )
}

export default StyledContainer