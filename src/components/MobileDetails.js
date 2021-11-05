import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { buyMobile,sellMobile } from './../redux/actions/mobile-action';

// gh'' GH""
function MobileDetails({buyMobile,sellMobile,noOfMobiles}) {

    const styles = {
        btn: {
            padding: 30,
            margin: 10,
            borderRadius: 10,
            border: 0,
            cursor: 'pointer',
        }
    }
    return (
        <div>
            <h1>Number of Mobiles {noOfMobiles}</h1>
            <button style={styles.btn} onClick={() => buyMobile()}>Buy Mobile</button>
            <button style={styles.btn} onClick={() => sellMobile()}>Sell Mobile</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noOfMobiles: state.noOfMobiles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        buyMobile,
        sellMobile
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MobileDetails)