// Example 1
db.companies.find({
  founded_year: {
    $ne: null
  }
}, {
  name: 1,
  founded_year: 1
}).limit(5).sort({
  founded_year: 1
})
// Returns results 

// Example 2
db.companies.find({}, {
  name: 1,
  founded_year: 1
}).sort({
  founded_year: 1
}).limit(5)
// Returns companies that have a founded year of null

// Example 3
db.companies.find({
  "name": 1,
  "founded_year": 1
}).sort({
  founded_year: 1
}).limit(5)
// Returns no results 

// Example 4
db.companies.find({
  founded_year: {
    $ne: null
  }
}, {
  name: 1,
  founded_year: 1
}).sort({
  founded_year: 1
}).limit(5)
// Returns results 

db.trips.find({
  "birth year": {
    $ne: null
  }
}, {
  "birth year": 1
}).sort({
  "birth year": -1
}).limit(5)
db.trips.find({
  "birth year": 1
}, {
  "birth year": -1
}).sort({
  "birth year": -1
}).limit(3)