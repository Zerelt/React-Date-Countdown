import React from 'react';

var TwoButtons = React.createClass({

  render: function() {
    return(
      <div id={ !this.props.showing ? 'glyphiconsBox' : 'glyphiconsBoxFalse'}>
        <div className="glyphicons" onClick={this.props.handleClickPlus0}>
          {/* {'\u002b'} */}
          <svg version="1.1" id="Layer_1" className='svgCircle'
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            viewBox="0 0 46.3 46.3">
            <g id="XMLID_1_">
            	<g id="XMLID_8_">
            		<circle id="XMLID_11_" className={this.props.newTheme+'-circle'} cx="23.1" cy="23.1" r="23.1"/>
            	</g>
            	<g id="XMLID_94_">
            		<path id="XMLID_207_" className={this.props.newTheme+'-fill'} style={{fill:'#fa0055'}} d="M25.6,36h-5c-0.9,0-1.6-0.7-1.6-1.6V11.9c0-0.9,0.7-1.6,1.6-1.6h5c0.9,0,1.6,0.7,1.6,1.6
            			v22.5C27.3,35.3,26.5,36,25.6,36z"/>
            		<path id="XMLID_186_" className={this.props.newTheme+'-fill'} style={{fill:'#fa0055'}} d="M36,20.6v5c0,0.9-0.7,1.6-1.6,1.6H11.9c-0.9,0-1.6-0.7-1.6-1.6v-5c0-0.9,0.7-1.6,1.6-1.6
            			h22.5C35.3,19,36,19.7,36,20.6z"/>
            	</g>
            </g>
          </svg>
        </div>
        <div className="glyphicons" onClick={this.props.handleClosest}>
          {/* {'\u02c4'} */}
          <svg version="1.1" id="Layer_1" className='svgCircle'
            xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px"
            viewBox="0 0 46.3 46.3">
            <g id="XMLID_1_">
            	<g id="XMLID_14_">
            		<circle id="XMLID_10_" className={this.props.newTheme+'-circle'} cx="23.1" cy="23.1" r="23.1"/>
            	</g>
            	<g id="XMLID_169_">
            		<path id="XMLID_223_" className={this.props.newTheme+'-fill'} style={{fill:'#fa0055'}} d="M26.3,28.7H13.4c-1.1,0-2-0.9-2-2V13.8c0-1.1,0.9-2,2-2h12.9c1.1,0,2,0.9,2,2v12.9
            			C28.4,27.8,27.5,28.7,26.3,28.7z"/>
                <path id="XMLID_218_" className={this.props.newTheme+'-stroke'} style={{fill:'none',stroke:'#fa0055',strokeWidth:4,strokeMiterLimit:10}} d="M17.4,32.5h14.2c0.7,0,1.3-0.6,1.3-1.3V14"/>
            	</g>
            </g>
          </svg>
        </div>
      </div>
    )
  }
});

module.exports = TwoButtons;
