import testProfile from '../../assets/img/first-icon.jpg'
import companyLogo from '../../assets/img/company-logo.png'
import './index.css'

export  function Profile() {
    return(
        <div className='display-flex gap-155 justify-center margin-top-155'>
            <div className="icon-profile-container display-flex items-center flex-direction-col">
                <img className='user-profile' src={testProfile} alt="firstIcon" />
                <img className='company-main-logo border-radius-19' src={companyLogo} alt="company logo" />
            </div>
            <div className='info-text-container'>
                <div>
                    PHIL Janet anderson
                </div>
                <div>
                    Sales Representative
                </div>
                <div>
                    +123-456-789
                </div>
                <div>
                    Hello@reallygreatsite.com
                </div>
                <div>
                    www.reallygreatsite.com
                </div>
                <div>
                    123 AnyWhere st., Any City, st 1234
                </div>
            </div>
        </div>

    )
}