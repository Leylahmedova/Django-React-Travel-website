
const TextAndButtonContent = ({title,paragraf}) => {
  return (
    <section>
    <div className="container_main">
    <div className="text__button__content ">
    <div>           
    <h1>{title}</h1>
    <p>{paragraf}</p>
    </div>
    <button>See All</button>
    </div>
</div>
</section>
  )
}

export default TextAndButtonContent