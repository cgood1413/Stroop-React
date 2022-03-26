export const OptionButton = props => {

    return (
        <button id={props.id} className="color-button" style={{backgroundColor: props.style}} onClick={props.handleClick}></button>
    );
    
}