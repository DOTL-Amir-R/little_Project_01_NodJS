import testProfile from '../../assets/img/first-icon.jpg'
import companyLogo from '../../assets/img/company-logo.png'
import './index.css'

export  function Profile() {
    return(
        <div>
            <div className="icon-profile-container">
                <img className='user-profile' src={testProfile} alt="firstIcon" />
                <img className='border-radius-32 width-7-precen' src={companyLogo} alt="company logo" />
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