const graphql = require('graphql');
const _ = require('lodash');
const Resident = require('../models/resident');
const Home = require('../models/home');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} = graphql;

const ResidentType = new GraphQLObjectType({
  name: 'Resident',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    idproofnumber: { type: GraphQLString },
    dob: { type: GraphQLString },
    gender: { type: GraphQLString },
    home: {
      type: HomeType,
      resolve(parent, args) {
        return Home.findById(parent.homeId);
      }
    }
  })
});

const HomeType = new GraphQLObjectType({
  name: 'Home',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    bedding: { type: GraphQLInt },
    password: { type: GraphQLString },
    ownername: { type: GraphQLString },
    owneridnumber: { type: GraphQLString },
    owneremail: { type: GraphQLString },
    ownercontactnumber: { type: GraphQLString },
    residents: {
      type: new GraphQLList(ResidentType),
      resolve(parent, args) {
        return Resident.find({ homeId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    resident: {
      type: ResidentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Resident.findById(args.id);
      }
    },
    home: {
      type: HomeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Home.findById(args.id);
      }
    },
    residents: {
      type: new GraphQLList(ResidentType),
      resolve(parent, args) {
        return Resident.find({});
      }
    },
    homes: {
      type: new GraphQLList(HomeType),
      resolve(parent, args) {
        return Home.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addHome: {
      type: HomeType,
      args: {
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        bedding: { type: GraphQLInt },
        password: { type: GraphQLString },
        ownername: { type: GraphQLString },
        owneridnumber: { type: GraphQLString },
        owneremail: { type: GraphQLString },
        ownercontactnumber: { type: GraphQLString }
      },
      resolve(parent, args) {
        let home = new Home({
          name: args.name,
          address: args.address,
          bedding: args.bedding,
          password: args.password,
          ownername: args.ownername,
          owneridnumber: args.owneridnumber,
          owneremail: args.owneremail,
          ownercontactnumber: args.ownercontactnumber
        });
        return home.save();
      }
    },
    addResident: {
      type: ResidentType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        idproofnumber: { type: GraphQLString },
        dob: { type: GraphQLString },
        gender: { type: GraphQLString },
        homeId: { type: GraphQLID }
      },
      resolve(parent, args) {
        let resident = new Resident({
          name: args.name,
          idproofnumber: args.idproofnumber,
          dob: args.dob,
          gender: args.gender,
          homeId: args.homeId
        });
        return resident.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
