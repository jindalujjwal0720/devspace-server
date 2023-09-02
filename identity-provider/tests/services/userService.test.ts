/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import UserService from "../../services/userService";
import AuthService from "../../services/authService";
import IUser from "../../models/User.d";
import IAuth from "../../models/Auth.d";

describe("UserService", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  var USER = <IUser>{}; // Sample user object to be used in tests
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
        USER = createdUser;
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

  describe("update", () => {
    describe("when the user does not exist", () => {
      it("should throw an error if _id is not provided", async () => {
        const user = <IUser>{
          email: "test@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
        };
        await expect(UserService.update(user)).rejects.toThrow();
      });
      it("should throw an error if email is not provided", async () => {
        const user = <IUser>{
          firstName: "Test",
          displayName: "Tester",
        };
        await expect(UserService.update(user)).rejects.toThrow();
      });
      it("should throw an error if firstName is not provided", async () => {
        const user = <IUser>{
          email: "test@iitism.ac.in",
          displayName: "Tester",
        };
        await expect(UserService.update(user)).rejects.toThrow();
      });
      it("should throw an error if displayName is not provided", async () => {
        const user = <IUser>{
          email: "test@iitism.ac.in",
          firstName: "Test",
        };
        await expect(UserService.update(user)).rejects.toThrow();
      });
      it("should throw an error if email is invalid", async () => {
        const user = <IUser>{
          email: "test",
          firstName: "Test",
          displayName: "Tester",
        };
        await expect(UserService.update(user)).rejects.toThrow();
      });
      it("should throw an error if user does not exist", async () => {
        const user = <IUser>{
          email: "test@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
        };
        await expect(UserService.update(user)).rejects.toThrow();
      });
    });
    describe("when the user with email already exists", () => {
      it("should update a new user if required fields are provided", async () => {
        const user = <IUser>{
          _id: USER._id,
          email: "test@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
        };
        // update the user
        const updatedUser = await UserService.update(user);
        expect(updatedUser).toBeDefined();
        expect(updatedUser?._id).toBeDefined();
        expect(updatedUser?.email).toBe(user.email);
        expect(updatedUser?.firstName).toBe(user.firstName);
        expect(updatedUser?.displayName).toBe(user.displayName);
      });
    });
  });
  describe("deleteById", () => {
    describe("when the user does not exist", () => {
      it("should throw an error if _id is not provided", async () => {
        await expect(UserService.deleteById("")).rejects.toThrow();
      });
      it("should throw an error if user does not exist", async () => {
        await expect(UserService.deleteById("123")).rejects.toThrow();
      });
    });
    describe("when the user with email already exists", () => {
      it("should delete the user", async () => {
        //creating a new user
        const user = <IUser>{
          email: "test6@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
        };
        const createdUser = await UserService.create(user);
        // delete the user
        const deletedUser = await UserService.deleteById(createdUser._id);
        expect(deletedUser).toBeDefined();
        expect(deletedUser?._id).toBeDefined();
        expect(deletedUser?.email).toBe(createdUser.email);
        expect(deletedUser?.firstName).toBe(createdUser.firstName);
        expect(deletedUser?.displayName).toBe(createdUser.displayName);
        expect(UserService.deleteById(createdUser._id)).rejects.toThrow();
      });
    });
  });
});

describe("AuthService", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  var USER = <any>{}; // Sample user object to be used in tests
  describe("register", () => {
    describe("when the user does not exist", () => {
      it("should throw an error if email is not provided", async () => {
        const user = <any>{
          firstName: "Test",
          displayName: "Tester",
          passwordHash: "Test",
        };
        await expect(AuthService.register(user)).rejects.toThrow();
      });
      it("should throw an error if passwordHash is not provided", async () => {
        const user = <any>{
          email: "test1@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
        };
        await expect(AuthService.register(user)).rejects.toThrow();
      });
      it("should throw an error if email is invalid", async () => {
        const user = <any>{
          email: "test1",
          firstName: "Test",
          displayName: "Tester",
          passwordHash: "Test",
        };
        await expect(AuthService.register(user)).rejects.toThrow();
      });
      it("should throw an error if firstName is not provided", async () => {
        const user = <any>{
          email: "test1@iitism.ac.in",
          displayName: "Tester",
          passwordHash: "Test",
        };
        await expect(AuthService.register(user)).rejects.toThrow();
      });
      it("should throw an error if displayName is not provided", async () => {
        const user = <any>{
          email: "test1@iitism.ac.in",
          firstName: "Test",
          passwordHash: "Test",
        };
        await expect(AuthService.register(user)).rejects.toThrow();
      });

      it("should register a new user if required fields are provided", async () => {
        const user = {
          email: "test1@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
          passwordHash: "Test",
        };
        const createdUser = await AuthService.register(user);
        expect(createdUser).toBeDefined();
        expect(createdUser).toBeDefined();
        expect(createdUser?._id).toBeDefined();
        expect(createdUser?.email).toBe(user.email);
        expect(createdUser?.firstName).toBe(user.firstName);
        expect(createdUser?.displayName).toBe(user.displayName);
        USER = createdUser;
      });
    });
    describe("when the user with email already exists", () => {
      it("should throw an error", async () => {
        const user = <any>{
          email: "test2@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
          passwordHash: "Test",
        };
        //creating a new user
        await AuthService.register(user);
        // Try to create the same user again
        await expect(AuthService.register(user)).rejects.toThrow();
      });
    });
  });
});
