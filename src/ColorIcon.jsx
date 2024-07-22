import './ColorIcon.css'

export default function ColorIcon({colors,colorPlateFun}){

    function handleColorChanger(color){
        colorPlateFun(color);
    }
    

    return(
        <div className='colors'>
            {
                colors.map((item) => (
                    <li style={{backgroundColor: item.color}} className='single-color-item' onClick={ () => handleColorChanger(item.color)}>{item.color}</li>
                ))
            }
        </div>
    )
}