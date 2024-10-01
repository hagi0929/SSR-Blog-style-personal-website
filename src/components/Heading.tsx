import React from 'react'

const Heading = ({ heading, subheading }: { heading: string, subheading?: string }) => {
  return (
    <div className="w-full flex flex-col justify-start gap-4">
      <span className="text-3xl font-bold">
        {heading}
      </span>
      {subheading && (
        <span className="text-lg font-medium">
          {subheading}
        </span>
      )}
    </div>
  )
}

export default Heading