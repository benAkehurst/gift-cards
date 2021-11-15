module.exports = {
  components: {
    schemas: {
      user: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            description: "User's first name.",
            example: "John",
          },
          lastName: {
            type: "string",
            description: "User's last name.",
            example: "Doe",
          },
          email: {
            type: "string",
            description: "User's email address.",
            example: "john@doe.com",
          },
          password: {
            type: "string",
            description:
              "Password for user account. password must be at least 6 characters long and contain a lowercase letter, an uppercase letter, a numeric digit and a special character.",
            example: "Abc123!@",
          },
          acceptedTerms: {
            type: "boolean",
            description: "Confirms the user accepts t's & c's on sign up.",
            example: "true",
          },
          createdOnDate: {
            type: "boolean",
            description:
              "A human readable format of the date the user was created.",
            example: "12/11/2021",
          },
          userUID: {
            type: "string",
            description: "A UUID for the user object.",
            example: "8eac14c0-83b4-46f7-a9ef-bef5ded8997f",
          },
          userActive: {
            type: "boolean",
            description: "Defines if the user confirmed their email address.",
            example: "false",
          },
          userAcquisitionLocation: {
            type: "string",
            description:
              "Defines where the user opened their account, via the sign up form or using goolge credentials.",
            example: "Manual Registration Form",
          },
          cards: {
            type: "Array",
            description: "Array of cards the user is collecting",
            example: "[]",
          },
          customerId: {
            type: "String",
            description: "Human readable user id",
            example: "_dasdd",
          },
          qrCode: {
            type: "string",
            description: "A QR Code image encoded in base64.",
            example:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK9SURBVO3BQW7kQAwEwSxC//9yro88NSBIM2sTjIg/WGMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRrl4qEkfJPKHUnoVO5IwjepPFGsUYo1SrFGuXiZypuScJKETqVT6ZLQqdyh8qYkvKlYoxRrlGKNcvFhSbhD5Q6VLgnflIQ7VD6pWKMUa5RijVKsUYo1SrFGKdYoF39cEjqVO5LQqfxlxRqlWKMUa5SLD1P5JJUuCScqb1L5TYo1SrFGKdYoFy9LwjcloVPpkvCmJPxmxRqlWKMUa5T4g0GS0Kl0SThR+cuKNUqxRinWKBcPJaFT6ZLQqXRJ6FS6JHQqJypdEk5UnkhCp3KShE7lTcUapVijFGuUiy9LwkkSOpWTJHQqJyonSehU3qTSJaFTeaJYoxRrlGKNcvGQyolKl4ROpUtCl4ROpVN5Igl3JOEkCf9TsUYp1ijFGuXioSR0KicqXRJOVE6ScKJyovKEyhNJeFOxRinWKMUa5eJlSThRuSMJJypPJOFEpVPpknCi0iWhU3lTsUYp1ijFGuXiIZUnVJ5IQqdykoROpUvCJ6l8UrFGKdYoxRrl4qEkfJNKp3KShDtUuiTcoXKShBOVJ4o1SrFGKdYoFy9TeVMS7khCp9IloUvCiUqXhE6lS0Kn0ql8UrFGKdYoxRrl4sOScIfKHUnoVO5QOUnCSRJ+k2KNUqxRijXKxR+n0iXhROUJlS4JdyShU3lTsUYp1ijFGuXij0vCE0noVDqVJ5LQqXRJ6FSeKNYoxRqlWKNcfJjKJ6l0SehUTlROktCpnKicJKFTeVOxRinWKMUa5eJlSfimJDyRhE7liSR0KidJ6FSeKNYoxRqlWKPEH6wxijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKN8g8Z7xTx+lBJBQAAAABJRU5ErkJggg==",
          },
        },
      },
      store: {
        type: "object",
        properties: {
          store_name: {
            type: "string",
            description: "the name of the shop.",
            example: "Gails",
          },
          store_admin: {
            type: "string",
            description: "The admin user who manages the store",
            example: "13243423",
          },
          unique_store_id: {
            type: "string",
            description: "A uuid for the store",
            example: "1232-2131212-213-123",
          },
          address: {
            type: "object",
            description: "Info about the store",
            example: "{}",
          },
          users_ref: {
            type: "array",
            description: "array of user ids that have a card from this store",
            example: "['asda','adsd','dasda','adsda']",
          },
        },
      },
      storeAdmin: {
        type: "object",
        properties: {
          admin_name: {
            type: "String",
            description: "the users name",
            example: "Jane Doe",
          },
          storeId: {
            type: "String",
            description: "refrence to a store model",
            example: "53438238438",
          },
        },
      },
      card: {
        type: "object",
        properties: {
          current_stamps: {
            type: "number",
            description: "Number of current stamps the user has.",
            example: "0",
          },
          completed_cards: {
            type: "array",
            description: "Record of completed cards.",
            example: "[]",
          },
          transactions: {
            type: "array",
            description: "Record of completed transactions.",
            example: "[]",
          },
        },
      },
      transaction: {
        type: "object",
        properties: {
          stamp_count: {
            type: "number",
            description: "Number of current stamps that were added.",
            example: "0",
          },
          created_date: {
            type: "string",
            description: "date the stamps were added.",
            example: "0",
          },
        },
      },
      loginInput: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "user email",
            example: "john@doe.com",
          },
          password: {
            type: "string",
            description: "user password",
            example: "Abc123!@",
          },
          rememberMe: {
            type: "boolean",
            description: "Defines if user is to remain logged in",
            example: "true",
          },
        },
      },
      createUser: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            description: "User's first name.",
            example: "John",
          },
          lastName: {
            type: "string",
            description: "User's last name.",
            example: "Doe",
          },
          email: {
            type: "string",
            description: "User's email address.",
            example: "john@doe.com",
          },
          password: {
            type: "string",
            description:
              "Password for user account. password must be at least 6 characters long and contain a lowercase letter, an uppercase letter, a numeric digit and a special character.",
            example: "Abc123!@",
          },
          password2: {
            type: "string",
            description: "A repeat of the first password",
            example: "Abc123!@",
          },
          acceptedTerms: {
            type: "boolean",
            description: "Confirms the user accepts t's & c's on sign up.",
            example: "true",
          },
        },
      },
      addStamp: {
        type: "object",
        properties: {},
      },
    },
  },
};
