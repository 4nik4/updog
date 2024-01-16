
import { IonDatetime } from '@ionic/react'
import './AvailabilitySegment.css'

const AvailabilitySegment: React.FC = ({ }) => {

    return (
        <div className='availability-segment'>
            <IonDatetime dayValues="5,10,15,20,25,30"></IonDatetime>
        </div>
    )
 }

export default AvailabilitySegment