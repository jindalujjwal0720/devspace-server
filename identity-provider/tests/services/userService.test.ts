import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import UserService from "../../services/userService";
import IUser from "../../models/User.d";

describe("UserService", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe("create", () => {
    describe("when the user does not exist", () => {
      it("should throw an error if email is not provided", async () => {
        const user = <IUser>{
          firstName: "Test",
          displayName: "Tester",
        };
        await expect(UserService.create(user)).rejects.toThrow();
      });
      it("should throw an error if firstName is not provided", async () => {
        const user = <IUser>{
          email: "test@iitism.ac.in",
          displayName: "Tester",
        };
        await expect(UserService.create(user)).rejects.toThrow();
      });
      it("should throw an error if displayName is not provided", async () => {
        const user = <IUser>{
          email: "test@iitism.ac.in",
          firstName: "Test",
        };
        await expect(UserService.create(user)).rejects.toThrow();
      });
      it("should throw an error if email is invalid", async () => {
        const user = <IUser>{
          email: "test",
          firstName: "Test",
          displayName: "Tester",
        };
        await expect(UserService.create(user)).rejects.toThrow();
      });
      it("should create a new user if required fields are provided", async () => {
        const user = <IUser>{
          email: "test@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
        };
        const createdUser = await UserService.create(user);
        expect(createdUser).toBeDefined();
        expect(createdUser._id).toBeDefined();
        expect(createdUser.email).toBe(user.email);
        expect(createdUser.firstName).toBe(user.firstName);
        expect(createdUser.displayName).toBe(user.displayName);
      });
    });
    describe("when the user with email already exists", () => {
      it("should throw an error", async () => {
        const user = <IUser>{
          email: "test@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
        };
        // Try to create the same user again
        await expect(UserService.create(user)).rejects.toThrow();
      });
    });
  });
});
