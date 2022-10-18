import './littleTitle.css';

const LittleTitle = ({title, dark}) => {
  return (
    <div className={dark ? 'little-title true':'little-title'}>
           <span>{"/"}</span>
            {title}
            <span>{"/"}</span>
    </div>
  )
}

export default LittleTitle