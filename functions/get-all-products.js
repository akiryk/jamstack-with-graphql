const sendQuery = require('./utils/send-query');

const GET_ALL_PRODUCTS = `
  query getProducts {
    allProducts {
       data {
          name
          desc
          cost
       }
     }
   }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_PRODUCTS);
  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ todos: data.allProducts.data }),
  };
};
