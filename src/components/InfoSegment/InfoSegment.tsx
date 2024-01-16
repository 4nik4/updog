import { IonIcon } from "@ionic/react"
import { flash } from "ionicons/icons"
import "./InfoSegment.css"

const InfoSegment: React.FC = ({ }) => {
    return (
        <div className='info-segment'>
            <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>

            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className="colorful">
                <div className="title">
                    <h2>
                        Trained professional
                    </h2>
                    <h2>
                        <IonIcon icon={flash}></IonIcon>
                    </h2>
                </div>
                
                <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    )
}

export default InfoSegment