import React from 'react'

function DisplayData({formData}) {
  return (
    <div className='mt-6'>
        <h2 className="text-lg font-semibold">Stored Data:</h2>
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}

export default DisplayData