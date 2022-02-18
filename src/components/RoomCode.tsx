import copyImg from '../assets/imgs/copy.svg';

import '../styles/room-code.scss';

export function RoomCode() {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #1238123767123</span>
        </button>
    )
}