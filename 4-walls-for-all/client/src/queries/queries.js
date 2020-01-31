import { gql } from 'apollo-boost';

const getResidentsQuery = gql`
  {
    residents {
      name
      id
    }
  }
`;

const getHomesQuery = gql`
  {
    homes {
      name
      id
    }
  }
`;

const addResidentMutation = gql`
  mutation AddResident(
    $name: String!
    $idproofnumber: String
    $dob: String
    $gender: String
    $homeId: ID!
  ) {
    addResident(
      name: $name
      idproofnumber: $idproofnumber
      dob: $dob
      gender: $gender
      homeId: $homeId
    ) {
      name
      id
    }
  }
`;

const addHomeMutation = gql`
  mutation AddHome(
    $name: String
    $address: String
    $bed: String
    $password: String
    $ownername: String
    $owneridnumber: String
    $owneremail: String
    $ownercontactnumber: String
  ) {
    addHome(
      name: $name
      address: $address
      bed: $bed
      password: $password
      ownername: $ownername
      owneridnumber: $owneridnumber
      owneremail: $owneremail
      ownercontactnumber: $ownercontactnumber
    ) {
      name
      id
    }
  }
`;
const getResidentQuery = gql`
  query($id: ID) {
    resident(id: $id) {
      id
      name
      idproofnumber
      home {
        id
        name
        address
        bed
        residents {
          name
          id
          idproofnumber
        }
      }
    }
  }
`;

const getHomeQuery = gql`
  query($id: ID) {
    home(id: $id) {
      id
      name
      address
    }
  }
`;

export {
  getHomesQuery,
  getResidentsQuery,
  addResidentMutation,
  addHomeMutation,
  getResidentQuery,
  getHomeQuery
};
