import "./art.css"
import artimg from "../../assets/img/artimg.png"
import ellipse from "../../assets/img/Ellipse.png"

export const Art = () => {
    return (
        <>
            <section className="art">
                <div className="container">
                    <div className="art-inner">
                        <div className="card">
                            <img src={artimg} alt="img" width={346} height={325} />
                            <div className="art-box">
                                <h2 className="art-title">
                                    Art world insight.
                                </h2>
                                <p className="art-text">
                                    Receive our newsletter direct to your inbox to follow updates to legislation and the EU art-market's response.
                                </p>
                                <div className="art-input">
                                    <p className="art-inp-placeholder">
                                        Your email
                                    </p>
                                    <img src={ellipse} alt="ellipse" width={29} height={29} className="art-arrow"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
