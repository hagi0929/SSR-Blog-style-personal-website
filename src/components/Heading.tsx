import React from 'react'

const Heading = ({ heading, subheading} : { heading: string, subheading: string}) => {
  return (
    <div className="w-full flex flex-col justify-start py-10 gap-4">
        <span className="text-3xl font-bold">
            {heading}
        </span>
        <span className="text-lg">
            {subheading}
        </span>
    </div>
  )
}

export default Heading