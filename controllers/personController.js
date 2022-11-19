let Person = require('../models/person')


exports.savePerson = async (req, res) => {
let msg = new Person({
  name: 'Saibi mohammed',
  age:21,
  favoriteFoods:["milk","lorem","lorem"],
        })
    msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
};



exports.createPerson = async (req, res) => {
const docs = await Person.create([
  {
  name: 'said ikr',
  age:21,
  favoriteFoods:["milk","caps","lo"],
    },
    {
  name: 'lorem impsum',
  age:21,
  favoriteFoods:["2milk","chicken","soda"],
        },
])
   .then(doc => {
     console.log(doc)
     res.send(doc)
   })
   .catch(err => {
     console.error(err)
   })
};

exports.getAllPerson = async (req, res) => {
    
    try{
    
        const docs = await Person.find()
        console.log(docs);
        res.send(docs);
    }
   catch (err) {
    res.status(err.status).send(err.message);
  }
};


exports.findPerson = async (req, res) => {
    
    try{
    
        const docs = await Person.find()
        console.log(docs);
        res.send(docs);
    }
   catch (err) {
    res.status(err.status).send(err.message);
  }
};


exports.findOnePerson = async (req, res) => {
    try{
        const docs = await Person.find({favoriteFoods:["milk","lorem","lorem"]})
        console.log(docs);
        res.send(docs);
    }
   catch (err) {
    res.status(err.status).send(err.message);
  }
};



exports.findOnePersonById = async (req, res) => {
    try{
        const docs = await Person.find({_id:"6379171eb1bedde77b5c8154"})
        console.log(docs);
        res.send(docs);
    }
   catch (err) {
    res.status(err.status).send(err.message);
  }
};

exports.findOnePersonByIdAndUpdate = async (req, res) => {
    try{
        const docs = await Person.findOneAndUpdate({_id:"637912cdec98dd65f34906ec"},{favoriteFoods:"Hamburger"},
        {
          new: true,
          useFindAndModify: false,
        })
        console.log(docs);
        res.send(docs);
    }
   catch (err) {
    res.status(500).send(err.message);
  }
};

exports.findOnePersonByIdAndDelete = async (req, res) => {
    try{
        const docs = await Person.findOneAndDelete({_id:"6379171eb1bedde77b5c8154"})
        console.log("removed");
        res.send("person removed");
    }
   catch (err) {
    res.status(500).send(err.message);
  }
};

