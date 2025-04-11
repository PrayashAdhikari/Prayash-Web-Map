var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Roads_1 = new ol.format.GeoJSON();
var features_Roads_1 = format_Roads_1.readFeatures(json_Roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_1.addFeatures(features_Roads_1);
var lyr_Roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_1, 
                style: style_Roads_1,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_1.png" /> Roads'
            });
var format_SolarPannels_2 = new ol.format.GeoJSON();
var features_SolarPannels_2 = format_SolarPannels_2.readFeatures(json_SolarPannels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolarPannels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolarPannels_2.addFeatures(features_SolarPannels_2);
var lyr_SolarPannels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolarPannels_2, 
                style: style_SolarPannels_2,
                popuplayertitle: 'Solar Pannels',
                interactive: true,
                title: '<img src="styles/legend/SolarPannels_2.png" /> Solar Pannels'
            });
var format_Buildings_3 = new ol.format.GeoJSON();
var features_Buildings_3 = format_Buildings_3.readFeatures(json_Buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_3.addFeatures(features_Buildings_3);
var lyr_Buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_3, 
                style: style_Buildings_3,
                popuplayertitle: 'Buildings',
                interactive: true,
                title: '<img src="styles/legend/Buildings_3.png" /> Buildings'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Roads_1.setVisible(true);lyr_SolarPannels_2.setVisible(true);lyr_Buildings_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Roads_1,lyr_SolarPannels_2,lyr_Buildings_3];
lyr_Roads_1.set('fieldAliases', {'Road': 'Road', 'Road Lengt': 'Road Lengt', });
lyr_SolarPannels_2.set('fieldAliases', {'Solar': 'Solar', 'Area': 'Area', });
lyr_Buildings_3.set('fieldAliases', {'Names': 'Names', 'Area': 'Area', });
lyr_Roads_1.set('fieldImages', {'Road': 'TextEdit', 'Road Lengt': '', });
lyr_SolarPannels_2.set('fieldImages', {'Solar': '', 'Area': '', });
lyr_Buildings_3.set('fieldImages', {'Names': '', 'Area': '', });
lyr_Roads_1.set('fieldLabels', {'Road': 'inline label - visible with data', 'Road Lengt': 'header label - visible with data', });
lyr_SolarPannels_2.set('fieldLabels', {'Solar': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_Buildings_3.set('fieldLabels', {'Names': 'header label - visible with data', 'Area': 'header label - visible with data', });
lyr_Buildings_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});