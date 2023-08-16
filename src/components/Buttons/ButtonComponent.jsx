import './Button.css'

export default function ButtonComponent(props) {
  // eslint-disable-next-line react/prop-types
  const { id, styles, onClick, content } = props

  return (
    <button
      onClick={props.onClick}
      className={styles}
      id={id}
    >
      {content}
    </button>
  )
}