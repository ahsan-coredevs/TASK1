import React, {useState} from 'react'

function Youtube({videoId}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    setIsVideoPlaying(true);
    
  };
  return (
    
        <div>
            <div className="relative w-[350px] h-[200px] bg-gray-200 rounded-lg overflow-hidden py-4 px-4">
            <div
          className="w-full h-full bg-cover bg-center cursor-pointer rounded"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
          }}
          onClick={handleClick}
        >
          {/* Overlay play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="text-white text-4xl bg-black bg-opacity-50 p-4 rounded-full">
              ▶
            </button>
          </div>
        </div>
    </div>

    {
        isVideoPlaying &&  <div className="fixed backdrop-blur-xl top-0 bottom-0 left-0 right-0 z-30 w-full h-full">
            <div className="flex justify-end cursor-pointer" onClick={()=>setIsVideoPlaying(prev=>!prev)}> X</div>
       <div className="flex justify-center w-full h-full">
       <iframe
          className="px-10 py-10 max-w-[1200px] w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
       </div>
      </div>
    }
        </div>
  )
}

export default Youtube