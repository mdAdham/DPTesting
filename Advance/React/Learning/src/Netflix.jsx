import NetCard from "./NetCard";

function Netflix() {
    return (
        <div className="netflix"
            style={{display:"flex", justifyContent:"space-around"}}>

            <NetCard plan='Mobile' quality='480p' price='₹149'
                video_sound_quality='Fair'
                resolution='480p'
                supported_device='Mobile phone, tablet'
                concurrent_watching='1'
                download_device='1'/>
            <NetCard plan='Basic' quality='720p' price='₹199'
                video_sound_quality='Good'
                resolution='720p (HD)'
                supported_device='TV, computer, mobile phone, tablet'
                concurrent_watching='1'
                download_device='1'/>
            <NetCard plan='Standard' quality='1080p' price='₹499'
                video_sound_quality='Great'
                resolution='1080p (Full HD)'
                supported_device='TV, computer, mobile phone, tablet'
                concurrent_watching='2'
                download_device='2'/>
            <NetCard plan='Premium' quality='4K + HDR' price='₹649'
                video_sound_quality='Best'
                resolution='4K (Ultra HD) + HDR'
                special_audio='Included'
                supported_device='TV, computer, mobile phone, tablet'
                concurrent_watching='4'
                download_device='4'/>
        </div>
    );
}

export default Netflix;