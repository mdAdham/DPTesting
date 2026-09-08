import "./NetCard.css"

function NetCard(props) {
    return (
        <div className={props.plan == "Basic" ? "net-card most-popular" : "net-card"}>
            <div
                className="popular"
                style={{ display: props.plan === "Basic" ? "block" : "none" }}>
                <h5>Most Popular</h5>
            </div>
            <div className={`topic ${props.plan}`}>
                <h2>{props.plan}</h2>
                <h3>{props.quality}</h3>
            </div>
            <div className="details">
                <div className="points">
                    <p>Monthly price</p>
                    <h4>{props.price}</h4>
                </div>
                <div className="points">
                    <p>Video and sound quality</p>
                    <h4>{props.video_sound_quality}</h4>
                </div>
                <div className="points">
                    <p>Resolution</p>
                    <h4>{props.resolution}</h4>
                </div>

                <div className="points"
                    style={{display: props.plan === "Premium" ? "block": "none"}}>
                    <p>Special audio (immersive sound)</p>
                    <h4>{props.special_audio}</h4>
                </div>

                <hr />
                <div className="points">
                    <p>Supported devices</p>
                    <h4>{props.supported_device}</h4>
                </div>
                <hr />
                <div className="points">
                    <p>Devices your household can watch at the same time</p>
                    <h4>{props.concurrent_watching}</h4>
                </div>
                <div className="points">
                    <p>Download devices</p>
                    <h4>{props.download_device}</h4>
                </div>
            </div>
        </div>
    );
}

export default NetCard;