import { BiTrash, BiPencil } from "react-icons/bi";


export default function SingleDuty({ duty, deleteDuty, openModal }) {

    return (
        <>
            <div className="duty-single-line">
                <span>{duty.name}</span>
                <span><u>{duty.boss}</u>&emsp;{duty.par1}&emsp;{duty.par2}</span>
                <BiPencil cursor="pointer" onClick={() => openModal(duty.name)} />
                <BiTrash cursor="pointer" onClick={() => deleteDuty(duty.dutyID)} />
            </div>
        
        </>
    )
}