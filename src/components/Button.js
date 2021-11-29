

const Button = () => {
    return (
        <div >
           <button
           className = 'btn'
           type='submit'
          >Berechnen</button> 
        </div>
    )
}

Button.defaultProps ={
    color: 'blue'
}

export default Button
