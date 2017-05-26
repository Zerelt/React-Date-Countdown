import React from 'react';

var ColorTheme = React.createClass({
  render: function() {
    return(
      <div className='colorTheme'>
        <div className='colorTheme-inner'>
          {/* <div className='selector-g'>Turquoise <span></span></div>
          <div className='selector-o'>Red-orange <span></span></div>
          <div className='selector-p'>Razzmatazz <span></span></div> */}
          <label>
            Turquoise
            <input type="radio" name="newColorTheme" id="selector-g" value='selector-g'
              checked={this.props.newTheme==='selector-g'}
              onClick={this.props.newColor}/>
          </label>
          <label>
            Red-orange
            <input type="radio" name="newColorTheme" id="selector-o" value='selector-o'
              checked={this.props.newTheme==='selector-o'}
              onClick={this.props.newColor}/>
          </label>
          <label>
            Razzmatazz
            <input type="radio" name="newColorTheme" id="selector-p" value='selector-p'
              checked={this.props.newTheme==='selector-p'}
              onClick={this.props.newColor}/>
          </label>
        </div>
      </div>
    )
  }
});

module.exports = ColorTheme;
