db = new Mongo().getDB("reservations");

db.createCollection('periods', {capped: false});

db.periods.insert([
    {"value": "9-10"},
    {"value": "10-11"},
    {"value": "11-12"},
    {"value": "12-13"},
    {"value": "14-15"},
    {"value": "15-16"},
    {"value": "16-17"},
    {"value": "17-18"},
])
