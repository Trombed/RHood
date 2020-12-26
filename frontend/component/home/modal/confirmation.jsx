import React from 'react';
import {closeModal} from '../../actions/modal_action';
import {connect} from 'react-redux';


function Confirmation({modal, closeModal}) {
  if (!modal) {
    window.onscroll = function() {};
    return null;
  }

  const share = modal.shareToBuy === '1' ? 'share' : 'shares';
  window.onscroll = function() {
    window.scrollTo(0, 0);
  };
  if (modal.boxState === 'BUY') {
    return (
      <div className="Modal-Container">

        <div className="Modal-Body" onClick={ (e) => e.stopPropagation()}>
          <div className="Modal-Top">
            <div className="Modal-Success">
              SUCCESS:
            </div>
            <div className="Modal-Success-Message">
              You BOUGHT {modal.shareToBuy} {share} of {modal.symbol} for
              &nbsp;{modal.sharesBuyingPrice}
            </div>
          </div>

          <div className="Modal-Button-Buy"
            onClick={ (e) => closeModal()}>CLOSE
          </div>

        </div>

      </div>
    );
  } else if (modal.boxState === 'SELL') {
    return (
      <div className="Modal-Container" onClick={ (e) => closeModal()}>

        <div className="Modal-Body" onClick={ (e) => e.stopPropagation()}>
          <div className="Modal-Top">
            <div className="Modal-Success">
                            SUCCESS:
            </div>
            <div className="Modal-Success-Message">
              You SOLD {modal.shareToBuy} {share} of {modal.symbol}
              &nbsp;for {modal.sharesBuyingPrice}
            </div>
          </div>

          <div className="Modal-Button-Sell"
            onClick={ (e) => closeModal()}>CLOSE
          </div>

        </div>

      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
