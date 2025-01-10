const Videoplayer = () => {
  return (
    <div className="w-full h-[845px] flex justify-center items-center">
      <iframe className="shadow-2xl" width="840" height="472.5" src="https://www.youtube.com/embed/WOCUYdKakN8?si=4kwr9sNRKT9ofuGn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}
 
export default Videoplayer;