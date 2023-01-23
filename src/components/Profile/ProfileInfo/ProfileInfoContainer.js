import React from "react";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import Preloader from "../../common/Preloader";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {API} from "../../DAL/api";


// eslint-disable-next-line no-undef
class ProfileInfoAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId ? this.props.router.params.userId : 2
        API.profile.getProfileInfo(userId).then(responce => {
                this.props.setProfile(responce)
            }
        )
    }

    render() {
        if (this.props.profile == null) {
            return <Preloader/>
        }
        return (<ProfileInfo {...this.props.profile}/>);
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

let withURLProfileContainer = withRouter(ProfileInfoAPIContainer)

const ProfileInfoContainer = connect(mapStateToProps, {
    setProfile,
})(withURLProfileContainer)

export default ProfileInfoContainer;