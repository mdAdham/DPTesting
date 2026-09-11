import NetCard from "./NetCard";

// function Netflix() {
//     return (
//         <div className="netflix"
//             style={{display:"flex", justifyContent:"space-around"}}>

//             <NetCard plan='Mobile' quality='480p' price='₹149'
//                 video_sound_quality='Fair'
//                 resolution='480p'
//                 supported_device='Mobile phone, tablet'
//                 concurrent_watching='1'
//                 download_device='1'/>
//             <NetCard plan='Basic' quality='720p' price='₹199'
//                 video_sound_quality='Good'
//                 resolution='720p (HD)'
//                 supported_device='TV, computer, mobile phone, tablet'
//                 concurrent_watching='1'
//                 download_device='1'/>
//             <NetCard plan='Standard' quality='1080p' price='₹499'
//                 video_sound_quality='Great'
//                 resolution='1080p (Full HD)'
//                 supported_device='TV, computer, mobile phone, tablet'
//                 concurrent_watching='2'
//                 download_device='2'/>
//             <NetCard plan='Premium' quality='4K + HDR' price='₹649'
//                 video_sound_quality='Best'
//                 resolution='4K (Ultra HD) + HDR'
//                 special_audio='Included'
//                 supported_device='TV, computer, mobile phone, tablet'
//                 concurrent_watching='4'
//                 download_device='4'/>
//         </div>
//     );
// }

function Netflix() {
    const cards = [
        {
            "plan": "Mobile",
            "quality": "480p",
            "price": "₹149",
            "video_sound_quality": "Fair",
            "resolution": "480p",
            "supported_device": "Mobile phone, tablet",
            "concurrent_watching": "1",
            "download_device": "1",
            "special_audio": "Not Included"
        },
        {
            "plan": "Basic",
            "quality": "720p",
            "price": "₹199",
            "video_sound_quality": "Good",
            "resolution": "720p",
            "supported_device": "TV, computer, mobile phone, tablet",
            "concurrent_watching": "1",
            "download_device": "1",
            "special_audio": "Not Included"
        },
        {
            "plan": "Standard",
            "quality": "1080p",
            "price": "₹499",
            "video_sound_quality": "Great",
            "resolution": "1080p",
            "supported_device": "TV, computer, mobile phone, tablet",
            "concurrent_watching": "2",
            "download_device": "2",
            "special_audio": "Not Included"
        },
        {
            "plan": "Premium",
            "quality": "4K + HDR",
            "price": "₹649",
            "video_sound_quality": "Best",
            "resolution": "4K (Ultra HD) + HDR",
            "supported_device": "TV, computer, mobile phone, tablet",
            "concurrent_watching": "4",
            "download_device": "4",
            "special_audio": "Included"
        }
    ]

    return (
        <div className="netflix"
            style={{display:"flex", justifyContent:"space-around"}}>

            {cards.map((item)=>(<NetCard key={item.plan} {...item}/>))}
            {/* {cards.map((item)=>(console.log(item)))} */}
        </div>
    );
}

export default Netflix;