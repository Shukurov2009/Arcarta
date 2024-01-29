import "./footer.css"
import footerlogo from "../../assets/img/logo.png"
import bada from "../../assets/img/bada.png"
import law from "../../assets/img/law.png"
import people from "../../assets/img/people.png"
import twitter from "../../assets/img/twitter.png"
import insta from "../../assets/img/instagram.png"
import youtube from "../../assets/img/youtube.png"

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-boxes">
                            <div className="footer-box-1">
                                <ul className="footer-logo-list">
                                    <li className="footer-logo-item">
                                        <a href="#" className="footer-logo-link">
                                            <img src={footerlogo} alt="logo" width={150} height={30} />
                                        </a>
                                    </li>
                                </ul>
                                <p className="footer-box-1-text-1">
                                    Our Customer Due Diligence platform helps you avoid fines or
                                    losing clients due to AML while protecting you from cybercrime.
                                </p>
                                <h3 className="footer-box-1-title-1">
                                    Approved Service Provider
                                </h3>
                                <img className="bada" src={bada} alt="bada" width={76} height={76} />
                                <h3 className="footer-box-1-title-2">
                                    In Partnership with
                                </h3>
                                <img src={law} alt="law" className="law" width={158} height={67} />
                                <p className="footer-text-2">
                                    Registered with the Information Commissioner's Office (ICO) Registration number: ZA679248
                                </p>
                                <p className="footer-text-3">
                                    © Arc-Pay Ltd 2021
                                </p>
                            </div>
                            <div className="footer-box-2">
                                <div className="footer-link-1">
                                    <h3 className="footer-box-2-title">
                                        Links
                                    </h3>
                                    <ul className="footer-box-2-list-1">
                                        <li className="footer-box-2-item-1">
                                            Home
                                        </li>
                                        <li className="footer-box-2-item-2">
                                            About us
                                        </li>
                                        <li className="footer-box-2-item-3">
                                            Why arcarta
                                        </li>
                                        <li className="footer-box-2-item-4">
                                            Success Stories
                                        </li>
                                        <li className="footer-box-2-item-5">
                                            FAQ's
                                        </li>
                                        <li className="footer-box-2-item-6">
                                            Contact Us
                                        </li>
                                        <li className="footer-box-2-item-7">
                                            Join
                                        </li>
                                        <li className="footer-box-2-item-8">
                                            Invite
                                        </li>
                                        <li className="footer-box-2-item-9">
                                            Compliance Quiz
                                        </li>
                                        <li className="footer-box-2-item-10">
                                            ID Document Quiz
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-box-3">
                                    <div className="footer-link-3">
                                        <h3 className="footer-box-2-title">
                                            Solutions
                                        </h3>
                                        <ul className="footer-box-2-list-2">
                                            <li className="footer-box-2-item-11">
                                                For Galleries
                                            </li>
                                            <li className="footer-box-2-item-12">
                                                For Advisors
                                            </li>
                                            <li className="footer-box-2-item-13">
                                                For Auctioneers
                                            </li>
                                            <li className="footer-box-2-item-14">
                                                For Secure Payments
                                            </li>
                                            <li className="footer-box-2-item-15">
                                                For Buyers & Collectors
                                            </li>
                                            <li className="footer-box-2-item-16">
                                                Online AML Training
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-box-4">
                                    <div className="footer-link-3">
                                        <h3 className="footer-box-3-title">
                                            Resources
                                        </h3>
                                        <ul className="footer-box-2-list-2">
                                            <li className="footer-box-2-item-17">
                                                Articles
                                            </li>
                                            <li className="footer-box-2-item-18">
                                                Resources
                                            </li>
                                            <li className="footer-box-2-item-19">
                                                Help Centre
                                            </li>
                                            <li className="footer-box-2-item-20">
                                                The Bigger Picture
                                            </li>
                                            <li className="footer-box-2-item-21">
                                                Login
                                            </li>
                                            <li className="footer-box-2-item-22">
                                                Brand Assets
                                            </li>
                                            <li className="footer-box-2-item-23">
                                                The Art Market Report
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-footer">
                            <img src={people} alt="people" width={161} height={76} />
                            <div className="footer-footer-links">
                                <p className="footer-footer-text">
                                Privacy & Terms
                                </p>
                                <ul className="footer-footer-icons-list">
                                    <li className="footer-footer-item-1">
                                        <a href="#" className="footer-footer-link-1">
                                            <img src={twitter} alt="twitter" className="twitter" width={22} height={22} />
                                        </a>
                                    </li>
                                    <li className="footer-footer-item-2">
                                        <a href="#" className="footer-footer-link-1">
                                            <img src={insta} alt="insta" className="instagram" width={22} height={22} />
                                        </a>
                                    </li>
                                    <li className="footer-footer-item-3">
                                        <a href="#" className="footer-footer-link-1">
                                            <img src={youtube} alt="youtube" className="youtube" width={22} height={22} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
