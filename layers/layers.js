ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([80.502568, 16.460661, 80.513008, 16.466082]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Buildings_1 = new ol.format.GeoJSON();
var features_Buildings_1 = format_Buildings_1.readFeatures(json_Buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_1.addFeatures(features_Buildings_1);
var lyr_Buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_1, 
                style: style_Buildings_1,
                popuplayertitle: 'Buildings',
                interactive: true,
                title: '<img src="styles/legend/Buildings_1.png" /> Buildings'
            });
var format_ROADNETWORK_2 = new ol.format.GeoJSON();
var features_ROADNETWORK_2 = format_ROADNETWORK_2.readFeatures(json_ROADNETWORK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ROADNETWORK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADNETWORK_2.addFeatures(features_ROADNETWORK_2);
var lyr_ROADNETWORK_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADNETWORK_2, 
                style: style_ROADNETWORK_2,
                popuplayertitle: 'ROAD NETWORK',
                interactive: true,
                title: '<img src="styles/legend/ROADNETWORK_2.png" /> ROAD NETWORK'
            });
var format_PlantLocation_3 = new ol.format.GeoJSON();
var features_PlantLocation_3 = format_PlantLocation_3.readFeatures(json_PlantLocation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PlantLocation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantLocation_3.addFeatures(features_PlantLocation_3);
var lyr_PlantLocation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantLocation_3, 
                style: style_PlantLocation_3,
                popuplayertitle: 'Plant Location',
                interactive: true,
                title: '<img src="styles/legend/PlantLocation_3.png" /> Plant Location'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Buildings_1.setVisible(true);lyr_ROADNETWORK_2.setVisible(true);lyr_PlantLocation_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Buildings_1,lyr_ROADNETWORK_2,lyr_PlantLocation_3];
lyr_Buildings_1.set('fieldAliases', {'Names': 'Names', });
lyr_ROADNETWORK_2.set('fieldAliases', {'id': 'id', 'LENGTH': 'LENGTH', });
lyr_PlantLocation_3.set('fieldAliases', {'Plant Name': 'Plant Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Buildings_1.set('fieldImages', {'Names': '', });
lyr_ROADNETWORK_2.set('fieldImages', {'id': 'TextEdit', 'LENGTH': 'Range', });
lyr_PlantLocation_3.set('fieldImages', {'Plant Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Buildings_1.set('fieldLabels', {'Names': 'no label', });
lyr_ROADNETWORK_2.set('fieldLabels', {'id': 'header label - visible with data', 'LENGTH': 'inline label - visible with data', });
lyr_PlantLocation_3.set('fieldLabels', {'Plant Name': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', });
lyr_PlantLocation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});