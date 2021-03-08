const { gql } = require("apollo-server");

const TypeDefs = gql `

    " Query for get Tracks array for the home page "
    type Query {
        tracksForHome: [Track!]
    }

    " a Track is a group of modules that teaches about a specific topic"

    type Track {
        id: ID!
        title: String!
        author: String!
        thumbnail: String
        length: Int
        ModulesCount: Int
    }

    " Author of a complete Track "

    type Author {
        id: ID!
        name: String!
        photo: String
    }
`;

module.exports = TypeDefs;