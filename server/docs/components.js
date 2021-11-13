module.exports = {
  components: {
    schemas: {
      // User Model
      user: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            description: "User's first name.",
            example: 'John',
          },
          lastName: {
            type: 'string',
            description: "User's last name.",
            example: 'Doe',
          },
          email: {
            type: 'string',
            description: "User's email address.",
            example: 'john@doe.com',
          },
          password: {
            type: 'string',
            description:
              'Password for user account. password must be at least 6 characters long and contain a lowercase letter, an uppercase letter, a numeric digit and a special character.',
            example: 'Abc123!@',
          },
          acceptedTerms: {
            type: 'boolean',
            description: "Confirms the user accepts t's & c's on sign up.",
            example: 'true',
          },
          createdOnDate: {
            type: 'boolean',
            description:
              'A human readable format of the date the user was created.',
            example: '12/11/2021',
          },
          customerId: {
            type: 'string',
            description:
              'A unique code used to add stamp if the user qr code doesnt work.',
            example: '_ur1s4psp',
          },
          userUID: {
            type: 'string',
            description: 'A UUID for the user object.',
            example: '8eac14c0-83b4-46f7-a9ef-bef5ded8997f',
          },
          qrCode: {
            type: 'string',
            description: 'A QR Code image encoded in base64.',
            example:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK9SURBVO3BQW7kQAwEwSxC//9yro88NSBIM2sTjIg/WGMUa5RijVKsUYo1SrFGKdYoxRqlWKMUa5RijVKsUYo1SrFGKdYoxRrl4qEkfJPKHUnoVO5IwjepPFGsUYo1SrFGuXiZypuScJKETqVT6ZLQqdyh8qYkvKlYoxRrlGKNcvFhSbhD5Q6VLgnflIQ7VD6pWKMUa5RijVKsUYo1SrFGKdYoF39cEjqVO5LQqfxlxRqlWKMUa5SLD1P5JJUuCScqb1L5TYo1SrFGKdYoFy9LwjcloVPpkvCmJPxmxRqlWKMUa5T4g0GS0Kl0SThR+cuKNUqxRinWKBcPJaFT6ZLQqXRJ6FS6JHQqJypdEk5UnkhCp3KShE7lTcUapVijFGuUiy9LwkkSOpWTJHQqJyonSehU3qTSJaFTeaJYoxRrlGKNcvGQyolKl4ROpUtCl4ROpVN5Igl3JOEkCf9TsUYp1ijFGuXioSR0KicqXRJOVE6ScKJyovKEyhNJeFOxRinWKMUa5eJlSThRuSMJJypPJOFEpVPpknCi0iWhU3lTsUYp1ijFGuXiIZUnVJ5IQqdykoROpUvCJ6l8UrFGKdYoxRrl4qEkfJNKp3KShDtUuiTcoXKShBOVJ4o1SrFGKdYoFy9TeVMS7khCp9IloUvCiUqXhE6lS0Kn0ql8UrFGKdYoxRrl4sOScIfKHUnoVO5QOUnCSRJ+k2KNUqxRijXKxR+n0iXhROUJlS4JdyShU3lTsUYp1ijFGuXij0vCE0noVDqVJ5LQqXRJ6FSeKNYoxRqlWKNcfJjKJ6l0SehUTlROktCpnKicJKFTeVOxRinWKMUa5eJlSfimJDyRhE7liSR0KidJ6FSeKNYoxRqlWKPEH6wxijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKN8g8Z7xTx+lBJBQAAAABJRU5ErkJggg==',
          },
          current_stamps: {
            type: 'number',
            description: 'Number of current stamps the user has.',
            example: '0',
          },
          completed_cards: {
            type: 'array',
            description: 'Record of completed cards.',
            example: '[]',
          },
          transactions: {
            type: 'array',
            description: 'Record of completed transactions.',
            example: '[]',
          },
          isAdmin: {
            type: 'boolean',
            description: 'Defines if the user is an admin.',
            example: 'false',
          },
          userActive: {
            type: 'boolean',
            description: 'Defines if the user confirmed their email address.',
            example: 'false',
          },
          userAcquisitionLocation: {
            type: 'string',
            description:
              'Defines where the user opened their account, via the sign up form or using goolge credentials.',
            example: 'Manual Registration Form',
          },
        },
      },
      loginInput: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'user email',
            example: 'john@doe.com',
          },
          password: {
            type: 'string',
            description: 'user password',
            example: 'Abc123!@',
          },
          rememberMe: {
            type: 'boolean',
            description: 'Defines if user is to remain logged in',
            example: 'true',
          },
        },
      },
      createUser: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            description: "User's first name.",
            example: 'John',
          },
          lastName: {
            type: 'string',
            description: "User's last name.",
            example: 'Doe',
          },
          email: {
            type: 'string',
            description: "User's email address.",
            example: 'john@doe.com',
          },
          password: {
            type: 'string',
            description:
              'Password for user account. password must be at least 6 characters long and contain a lowercase letter, an uppercase letter, a numeric digit and a special character.',
            example: 'Abc123!@',
          },
          password2: {
            type: 'string',
            description: 'A repeat of the first password',
            example: 'Abc123!@',
          },
          acceptedTerms: {
            type: 'boolean',
            description: "Confirms the user accepts t's & c's on sign up.",
            example: 'true',
          },
        },
      },
    },
  },
};
