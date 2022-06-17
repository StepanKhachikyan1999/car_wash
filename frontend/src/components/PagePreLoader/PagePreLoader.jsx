import react from 'react'
import {Preloader,Rings,Puff} from "react-preloader-icon";

const PagePreLoader = () => {
    return (
        <div>
            <Preloader
            use={Puff}
            size="250"
            strokeWidth={13}
            strokeColor="#007bff"
            duration={2095}
            />
        </div>
    )
}

export default PagePreLoader