module.exports = {
  post: {
    tags: ["Stamp CRUD Operations"],
    description: "Adds a stamp to a card in a customer.",
    operationId: "addStamp",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/addStamp",
          },
        },
      },
    },
  },
  responses: {
    400: {
      description: "The provided email is not registered.",
      description: "Email and password do not match.",
    },
    200: {
      description: "Successfully logged in.",
    },
    500: {
      description: "Something went wrong.",
    },
  },
};
