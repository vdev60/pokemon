import { gql } from "@apollo/client";

export const getRicks = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        id
        name
        image
        species
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

export const getRick = (id)=>{
    return gql`
    query{
      character(id: ${id}) {
        id
        name
        status
        gender
        image
        species
      }
    }
  `;
}
