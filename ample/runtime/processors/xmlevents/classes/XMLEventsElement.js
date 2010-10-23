/*
 * Ample SDK - JavaScript GUI Framework
 *
 * Copyright (c) 2009 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 * See: http://www.amplesdk.com/about/licensing/
 *
 */

var cXMLEventsElement	= function(sLocalName) {
	this.localName	= sLocalName;
};
cXMLEventsElement.prototype	= new cAMLElement;
cXMLEventsElement.prototype.namespaceURI	= sNS_XEVENTS;
cXMLEventsElement.prototype.localName		= "#element";

//
cXMLEventsElement.prototype.$getTag	= function() {
	return '';
};

// Register Element
fAmple_extend(cXMLEventsElement);
