import React, { Component } from 'react'

export default class Map extends Component {
    componentDidMount = () => {
      // 百度地图API功能
        var BMap = window.BMap;
        var map = new BMap.Map("main");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        map.enableScrollWheelZoom(true);
        map.addControl(new BMap.NavigationControl());    
        map.addControl(new BMap.ScaleControl());    
        map.addControl(new BMap.OverviewMapControl());    
        map.addControl(new BMap.MapTypeControl());
        var geolocation = new BMap.Geolocation();
        
        geolocation.getCurrentPosition(function(r){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                alert('您的位置：'+r.point.lng+','+r.point.lat);
                   
        },{enableHighAccuracy: true})
    };
  render() {
    return (
      <div id={'main'}>
        
      </div>
    )
  }
}
