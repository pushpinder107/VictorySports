import {connect} from "react-redux";
import Header from "../Header";
import {showModal} from "../../redux/actions/ModalActions";

const mapDispatchToProps = dispatch => {
  return {
    showModal: modalId => dispatch(showModal(modalId))
  }
};

function mapStateToProps(state) {
    return {
        user: state.data.fetchedData && state.data.fetchedData.userAndPermissions
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
