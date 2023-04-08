const JumbotronBox = (props) => {
  return (
      <section id={"__jumbotroncard-wrapper"} className={"p-3 border-2 border-primary-dark"}>
        <div className={"text-xl"}>{props.Header}</div>
      </section>
  )
}

export default JumbotronBox;