// Google Map
var map;

var image = "data:image/png;base64,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"

// markers for map
var markers = [];

// info window
var info = new google.maps.InfoWindow();

// execute when the DOM is fully loaded
$(function() {

    // styles for map
    // https://developers.google.com/maps/documentation/javascript/styling
    var styles = [

        // hide Google's labels
        {
            featureType: "all",
            elementType: "labels",
            stylers: [
                {visibility: "off"}
            ]
        },

        // hide roads
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {visibility: "off"}
            ]
        }

    ];

    // options for map
    // https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var options = {
        center: {lat: 37.4236, lng: -122.1619}, // Stanford, California
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 14,
        panControl: true,
        styles: styles,
        zoom: 13,
        zoomControl: true
    };

    // get DOM node in which map will be instantiated
    var canvas = $("#map-canvas").get(0);

    // instantiate map
    map = new google.maps.Map(canvas, options);

    // configure UI once Google Map is idle (i.e., loaded)
    google.maps.event.addListenerOnce(map, "idle", configure);
    

});

/**
 * Adds marker for place to map.
 */
function addMarker(place)
{
    var latitude = place['latitude'];
    var longitude = place['longitude'];
    var postal_code = place['postal_code'];
    var myLatLng = {lat: latitude, lng: longitude};
    var sent_data = {geo: postal_code};
    var marker = new google.maps.Marker({
    position: myLatLng,
    icon: image
  });
    var the_content = "<ul>";
    $.getJSON(Flask.url_for('articles'), sent_data)
    .done(function(data, textStatus, jqXHR) {
    // call typeahead's callback with search results (i.e., places)
        console.log('success:');
        var content_length = data.length;
        for (var i = 0; i < content_length; i++)
        {
            the_content += "<li><a href='" + data[i]['link'] + "'>" + data[i]['title'] + "</a></li>";
        }
        the_content += "</ul>";
        console.log(the_content);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        // log error to browser's console
        console.log(errorThrown.toString());
    });
    
    marker.addListener('click', function(){
        showInfo(this, the_content);
    });
        
    markers.push(marker);
}

function showMarkers(){
    var the_length = markers.length;
    for (var j = 0; j < the_length; j++){
        markers[j].setMap(map);
    }
}

/**
 * Configures application.
 */
function configure()
{
    // update UI after map has been dragged
    google.maps.event.addListener(map, "dragend", function() {

        // if info window isn't open
        // http://stackoverflow.com/a/12410385
        if (!info.getMap || !info.getMap())
        {
            update();
        }
    });

    // update UI after zoom level changes
    google.maps.event.addListener(map, "zoom_changed", function() {
        update();
    });
    

    // configure typeahead
    $("#q").typeahead({
        highlight: false,
        minLength: 1
    },
    {
        display: function(suggestion) { return null; },
        limit: 10,
        source: search,
        templates: {
            suggestion: Handlebars.compile(
                "<div>" +
                "{{place_name}}, {{admin_name1}}, {{postal_code}}" +
                "</div>"
            )
        }
    });

    // re-center map after place is selected from drop-down
    $("#q").on("typeahead:selected", function(eventObject, suggestion, name) {

        // set map's center
        map.setCenter({lat: parseFloat(suggestion.latitude), lng: parseFloat(suggestion.longitude)});

        // update UI
        update();
    });

    // hide info window when text box has focus
    $("#q").focus(function(eventData) {
        info.close();
    });

    // re-enable ctrl- and right-clicking (and thus Inspect Element) on Google Map
    // https://chrome.google.com/webstore/detail/allow-right-click/hompjdfbfmmmgflfjdlnkohcplmboaeo?hl=en
    document.addEventListener("contextmenu", function(event) {
        event.returnValue = true; 
        event.stopPropagation && event.stopPropagation(); 
        event.cancelBubble && event.cancelBubble();
    }, true);

    // update UI
    update();

    // give focus to text box
    $("#q").focus();

}

/**
 * Removes markers from map.
 */
function removeMarkers()
{
    var the_length = markers.length;
    for (var n = 0; n < the_length; n++) 
    {
        markers[n].setMap(null);
    }
    markers = [];
}

/**
 * Searches database for typeahead's suggestions.
 */
function search(query, syncResults, asyncResults)
{
    // get places matching query (asynchronously)
    var parameters = {
        q: query
    };
    $.getJSON(Flask.url_for("search"), parameters)
    .done(function(data, textStatus, jqXHR) {
     
        // call typeahead's callback with search results (i.e., places)
        asyncResults(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {

        // log error to browser's console
        console.log(errorThrown.toString());

        // call typeahead's callback with no results
        asyncResults([]);
    });
}

/**
 * Shows info window at marker with content.
 */
function showInfo(marker, content)
{
    // start div
    var div = "<div id='info'>";
    if (typeof(content) == "undefined")
    {
        // http://www.ajaxload.info/
        div += "<img alt='loading' src='/static/ajax-loader.gif'/>";
    }
    else
    {
        div += content;
    }

    // end div
    div += "</div>";

    // set info window's content
    info.setContent(div);

    // open info window (if not already open)
    info.open(map, marker);
}

/**
 * Updates UI's markers.
 */
function update() 
{
    // get map's bounds
    var bounds = map.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();

    // get places within bounds (asynchronously)
    var parameters = {
        ne: ne.lat() + "," + ne.lng(),
        q: $("#q").val(),
        sw: sw.lat() + "," + sw.lng()
    };
    $.getJSON(Flask.url_for("update"), parameters)
    .done(function(data, textStatus, jqXHR) {

       // remove old markers from map
       removeMarkers();

       // add new markers to map
       for (var i = 0; i < data.length; i++)
       {
           addMarker(data[i]);
       }
       
       showMarkers();
    })
    .fail(function(jqXHR, textStatus, errorThrown) {

        // log error to browser's console
        console.log(errorThrown.toString());
    });
}