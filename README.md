json-join
=========

Simple functions that allow you to join two json aray objects together inspirted by SQL.

Examples:
```
var users = [

  { uid: 0, name: "david" },
  { uid: 1, name: "terry" },
  { uid: 2, name: "ben" }
  
];

var positions = [

  { pid: 0, title: "Technical Director" },
  { pid: 1, title: "Art Director" },
  { pid: 2, title: "Managing Director" }
]

// Embed
var result = users.Embed(positions,"position", "uid", "pid");

// Join
var result = users.Join(positions,"uid","pid",["title"],["title"]);
```

Results:
```
// Embed
var result = [

  { uid: 0, name: "david", position: [ { pid: 0, title: "Technical Director" } ] },
  { id: 1, name: "terry", position: [ { pid: 1, title: "Art Director" } ] },
  { id: 2, name: "ben", position: [ { pid: 2, title: "Managing Director" } ] }
  
];

// Join
var result = [

  { uid: 0, name: "david", title: "Technical Director" },
  { id: 1, name: "terry", title: "Art Director" },
  { id: 2, name: "ben", title: "Managing Director" }
  
];
```
