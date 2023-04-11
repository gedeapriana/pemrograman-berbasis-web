const TextBox = (props) => {
  return (
    <div id={"__box-wrapper"} className={"relative"}>
      <div className={"font-bold z-10 text-primary-light bg-primary-dark dark:bg-primary-light py-3 px-5 dark:text-primary-dark"}>{props.Text}</div>
    </div>
  )
}

export default  TextBox;

