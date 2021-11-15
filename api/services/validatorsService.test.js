const { validateEmail, validatePassword } = require("./validatorsService");

describe("email validator", () => {
  const testEmail = "test@test.com";
  const badTestEmail = "aaaaa";
  it("should return true on a valid email", () => {
    expect(validateEmail(testEmail)).toBeTruthy();
  });
  it("should return false on an invalid email", () => {
    expect(!validateEmail(badTestEmail)).toBeFalsy();
  });
});

describe("password validator", () => {
  const goodPassword = "Abc123!";
  const badPassword = "acv";
  it("should return true on a valid password", () => {
    expect(validatePassword(goodPassword)).toBeTruthy();
  });
  it("should return false on an invalid password", () => {
    expect(!validatePassword(badPassword)).toBeFalsy();
  });
});
