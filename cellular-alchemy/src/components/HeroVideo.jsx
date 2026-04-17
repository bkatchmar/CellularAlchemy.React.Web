function HeroVideo() {
    return (
        <section className="hero-video-wrapper">
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://cellularalchemyrx.com/wp-content/uploads/2023/07/web_header.jpg"
            >
                <source src="https://cellularalchemyrx.com/wp-content/uploads/2023/06/shutterstock_5109041_720.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-overlay"></div>
        </section>
    )
}

export default HeroVideo