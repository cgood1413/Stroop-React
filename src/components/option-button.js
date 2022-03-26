export const OptionButton = props => {

    return (
        <div>
            <button className="color-button" key={props.key} style={{backgroundColor: props.style, width: 80, height: 80}} onClick={props.handleClick}></button>
        </div>
    );
    
}