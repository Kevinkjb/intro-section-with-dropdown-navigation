import databiz from '../images/client-databiz.svg'
import maker from '../images/client-maker.svg'
import meet from '../images/client-meet.svg'
import audiophile from '../images/client-audiophile.svg'
import hero from '../images/image-hero-desktop.png'



const HomePage = () =>{
    return(
        <div className='main-hero'>
            <div className='home-one'>
                <h1 className="header">
                    Make remote work
                </h1>
                <p className='home-text'> 
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
                <button className='learn-more'>Learn more</button>
                <div className='logo'>
                    <img className='sponsors' src={databiz} alt="databiz"/>
                    <img className='sponsors' src={maker} alt="maker"/>
                    <img className='sponsors' src={meet} alt="meet"/>
                    <img className='sponsors' src={audiophile} alt="audiophile"/>
                </div>
            </div>
            <div>
                <img className='hero--img' src={hero} alt="hero"/>
            </div>

        </div>
    )
}

export default HomePage