(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{693:function(l,d,c){"use strict";c.r(d);var t=c(1),a=Object(t.a)({},(function(){var l=this,d=l.$createElement,c=l._self._c||d;return c("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[c("h1",{attrs:{id:"integrating-ibc-middleware-into-a-chain"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#integrating-ibc-middleware-into-a-chain"}},[l._v("#")]),l._v(" Integrating IBC middleware into a chain")]),l._v(" "),c("p",[l._v("Learn how to integrate IBC middleware(s) with a base application to your chain. The following document only applies for Cosmos SDK chains.")]),l._v(" "),c("p",[l._v("If the middleware is maintaining its own state and/or processing SDK messages, then it should create and register its SDK module with the module manager in "),c("code",[l._v("app.go")]),l._v(".")]),l._v(" "),c("p",[l._v("All middleware must be connected to the IBC router and wrap over an underlying base IBC application. An IBC application may be wrapped by many layers of middleware, only the top layer middleware should be hooked to the IBC router, with all underlying middlewares and application getting wrapped by it.")]),l._v(" "),c("p",[l._v("The order of middleware "),c("strong",[l._v("matters")]),l._v(", function calls from IBC to the application travel from top-level middleware to the bottom middleware and then to the application. Function calls from the application to IBC goes through the bottom middleware in order to the top middleware and then to core IBC handlers. Thus the same set of middleware put in different orders may produce different effects.")]),l._v(" "),c("h2",{attrs:{id:"example-integration"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#example-integration"}},[l._v("#")]),l._v(" Example integration")]),l._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gYXBwLmdvIHBzZXVkb2NvZGUKCi8vIG1pZGRsZXdhcmUgMSBhbmQgbWlkZGxld2FyZSAzIGFyZSBzdGF0ZWZ1bCBtaWRkbGV3YXJlLCAKLy8gcGVyaGFwcyBpbXBsZW1lbnRpbmcgc2VwYXJhdGUgc2RrLk1zZyBhbmQgSGFuZGxlcnMKbXcxS2VlcGVyIDo9IG13MS5OZXdLZWVwZXIoc3RvcmVLZXkxLCAuLi4sIGljczRXcmFwcGVyOiBjaGFubmVsS2VlcGVyLCAuLi4pIC8vIGluIHN0YWNrIDEgJmFtcDsgMwovLyBtaWRkbGV3YXJlIDIgaXMgc3RhdGVsZXNzCm13M0tlZXBlcjEgOj0gbXczLk5ld0tlZXBlcihzdG9yZUtleTMsLi4uLCBpY3M0V3JhcHBlcjogbXcxS2VlcGVyLCAuLi4pIC8vICBpbiBzdGFjayAxCm13M0tlZXBlcjIgOj0gbXczLk5ld0tlZXBlcihzdG9yZUtleTMsLi4uLCBpY3M0V3JhcHBlcjogY2hhbm5lbEtlZXBlciwgLi4uKSAvLyAgaW4gc3RhY2sgMgoKLy8gT25seSBjcmVhdGUgQXBwIE1vZHVsZSAqKm9uY2UqKiBhbmQgcmVnaXN0ZXIgaW4gYXBwIG1vZHVsZQovLyBpZiB0aGUgbW9kdWxlIG1haW50YWlucyBpbmRlcGVuZGVudCBzdGF0ZSBhbmQvb3IgcHJvY2Vzc2VzIHNkay5Nc2dzCmFwcC5tb2R1bGVNYW5hZ2VyID0gbW9kdWxlLk5ld01hbmFnZXIoCiAgLi4uCiAgbXcxLk5ld0FwcE1vZHVsZShtdzFLZWVwZXIpLAogIG13My5OZXdBcHBNb2R1bGUobXczS2VlcGVyMSksCiAgbXczLk5ld0FwcE1vZHVsZShtdzNLZWVwZXIyKSwKICB0cmFuc2Zlci5OZXdBcHBNb2R1bGUodHJhbnNmZXJLZWVwZXIpLAogIGN1c3RvbS5OZXdBcHBNb2R1bGUoY3VzdG9tS2VlcGVyKQopCgpzY29wZWRLZWVwZXJUcmFuc2ZlciA6PSBjYXBhYmlsaXR5S2VlcGVyLk5ld1Njb3BlZEtlZXBlcigmcXVvdDt0cmFuc2ZlciZxdW90OykKc2NvcGVkS2VlcGVyQ3VzdG9tMSA6PSBjYXBhYmlsaXR5S2VlcGVyLk5ld1Njb3BlZEtlZXBlcigmcXVvdDtjdXN0b20xJnF1b3Q7KQpzY29wZWRLZWVwZXJDdXN0b20yIDo9IGNhcGFiaWxpdHlLZWVwZXIuTmV3U2NvcGVkS2VlcGVyKCZxdW90O2N1c3RvbTImcXVvdDspCgovLyBOT1RFOiBJQkMgTW9kdWxlcyBtYXkgYmUgaW5pdGlhbGl6ZWQgYW55IG51bWJlciBvZiB0aW1lcyBwcm92aWRlZCB0aGV5IHVzZSBhIHNlcGFyYXRlCi8vIHNjb3BlZEtlZXBlciBhbmQgdW5kZXJseWluZyBwb3J0LgoKY3VzdG9tS2VlcGVyMSA6PSBjdXN0b20uTmV3S2VlcGVyKC4uLiwgc2NvcGVkS2VlcGVyQ3VzdG9tMSwgLi4uKQpjdXN0b21LZWVwZXIyIDo9IGN1c3RvbS5OZXdLZWVwZXIoLi4uLCBzY29wZWRLZWVwZXJDdXN0b20yLCAuLi4pCgovLyBpbml0aWFsaXplIGJhc2UgSUJDIGFwcGxpY2F0aW9ucwovLyBpZiB5b3Ugd2FudCB0byBjcmVhdGUgdHdvIGRpZmZlcmVudCBzdGFja3Mgd2l0aCB0aGUgc2FtZSBiYXNlIGFwcGxpY2F0aW9uLAovLyB0aGV5IG11c3QgYmUgZ2l2ZW4gZGlmZmVyZW50IHNjb3BlZEtlZXBlcnMgYW5kIGFzc2lnbmVkIGRpZmZlcmVudCBwb3J0cy4KdHJhbnNmZXJJQkNNb2R1bGUgOj0gdHJhbnNmZXIuTmV3SUJDTW9kdWxlKHRyYW5zZmVyS2VlcGVyKQpjdXN0b21JQkNNb2R1bGUxIDo9IGN1c3RvbS5OZXdJQkNNb2R1bGUoY3VzdG9tS2VlcGVyMSwgJnF1b3Q7cG9ydEN1c3RvbTEmcXVvdDspCmN1c3RvbUlCQ01vZHVsZTIgOj0gY3VzdG9tLk5ld0lCQ01vZHVsZShjdXN0b21LZWVwZXIyLCAmcXVvdDtwb3J0Q3VzdG9tMiZxdW90OykKCi8vIGNyZWF0ZSBJQkMgc3RhY2tzIGJ5IGNvbWJpbmluZyBtaWRkbGV3YXJlIHdpdGggYmFzZSBhcHBsaWNhdGlvbgovLyBOT1RFOiBzaW5jZSBtaWRkbGV3YXJlMiBpcyBzdGF0ZWxlc3MgaXQgZG9lcyBub3QgcmVxdWlyZSBhIEtlZXBlcgovLyBzdGFjayAxIGNvbnRhaW5zIG13MSAtJmd0OyBtdzMgLSZndDsgdHJhbnNmZXIKc3RhY2sxIDo9IG13MS5OZXdJQkNNaWRkbGV3YXJlKG13My5OZXdJQkNNaWRkbGV3YXJlKHRyYW5zZmVySUJDTW9kdWxlLCBtdzNLZWVwZXIxKSwgbXcxS2VlcGVyKQovLyBzdGFjayAyIGNvbnRhaW5zIG13MyAtJmd0OyBtdzIgLSZndDsgY3VzdG9tMQpzdGFjazIgOj0gbXczLk5ld0lCQ01pZGRsZXdhcmUobXcyLk5ld0lCQ01pZGRsZXdhcmUoY3VzdG9tSUJDTW9kdWxlMSksIG13M0tlZXBlcjIpCi8vIHN0YWNrIDMgY29udGFpbnMgbXcyIC0mZ3Q7IG13MSAtJmd0OyBjdXN0b20yCnN0YWNrMyA6PSBtdzIuTmV3SUJDTWlkZGxld2FyZShtdzEuTmV3SUJDTWlkZGxld2FyZShjdXN0b21JQkNNb2R1bGUyLCBtdzFLZWVwZXIpKQoKLy8gYXNzb2NpYXRlIGVhY2ggc3RhY2sgd2l0aCB0aGUgbW9kdWxlTmFtZSBwcm92aWRlZCBieSB0aGUgdW5kZXJseWluZyBzY29wZWRLZWVwZXIKaWJjUm91dGVyIDo9IHBvcnR0eXBlcy5OZXdSb3V0ZXIoKQppYmNSb3V0ZXIuQWRkUm91dGUoJnF1b3Q7dHJhbnNmZXImcXVvdDssIHN0YWNrMSkKaWJjUm91dGVyLkFkZFJvdXRlKCZxdW90O2N1c3RvbTEmcXVvdDssIHN0YWNrMikKaWJjUm91dGVyLkFkZFJvdXRlKCZxdW90O2N1c3RvbTImcXVvdDssIHN0YWNrMykKYXBwLklCQ0tlZXBlci5TZXRSb3V0ZXIoaWJjUm91dGVyKQo="}})],1)}),[],!1,null,null,null);d.default=a.exports}}]);