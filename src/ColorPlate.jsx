import ColorIcon from "./ColorIcon"
import './ColorPlate.css'

export default function ColorPlate({colors,appFun}){

    function ColorPlateFun(color){
        appFun(color);
    }

    return(
        <div className="color-tab">
            <ColorIcon colors={colors} colorPlateFun={ColorPlateFun}/>
        </div>
    )
}