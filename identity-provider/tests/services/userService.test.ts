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

  var USER = <IUser>{}; // Sample user object to be used in tests

  describe("create", () => {
    it("should throw an error if email is not provided", async () => {
      const user = <IUser>{
        firstName: "Test",
        displayName: "Tester",
      };
      await expect(UserService.create(user)).rejects.toThrow();
    });

    it("should throw an error if firstName is not provided", async () => {
      const user = <IUser>{
        email: "test-user@iitism.ac.in",
        displayName: "Tester",
      };
      await expect(UserService.create(user)).rejects.toThrow();
    });

    it("should throw an error if displayName is not provided", async () => {
      const user = <IUser>{
        email: "test-user@iitism.ac.in",
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

    describe("when the user does not exist", () => {
      it("should create a new user if required fields are provided", async () => {
        const user = <IUser>{
          email: "test-user@iitism.ac.in",
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
          email: "test-user@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
        };
        // Try to create the same user again
        await expect(UserService.create(user)).rejects.toThrow();
      });
    });
  });

  describe("update", () => {
    it("should throw an error if _id is not provided", async () => {
      const user = <IUser>{
        email: "test-user@iitism.ac.in",
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
        email: "test-user@iitism.ac.in",
        displayName: "Tester",
      };
      await expect(UserService.update(user)).rejects.toThrow();
    });

    it("should throw an error if displayName is not provided", async () => {
      const user = <IUser>{
        email: "test-user@iitism.ac.in",
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

    describe("when the user does not exist", () => {
      it("should throw an error", async () => {
        const user = <IUser>{
          email: "test-user@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
        };
        await expect(UserService.update(user)).rejects.toThrow();
      });
    });
    describe("when the user with _id exists", () => {
      it("should update the user if required fields are provided", async () => {
        const user = <IUser>{
          _id: USER._id,
          email: "test-user@iitism.ac.in",
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
    it("should throw an error if _id is not provided", async () => {
      const _id = "";
      await expect(UserService.deleteById(_id)).rejects.toThrow();
    });

    describe("when the user with _id does not exist", () => {
      it("should throw an error", async () => {
        const _id = "1234567890";
        await expect(UserService.deleteById(_id)).rejects.toThrow();
      });
    });

    describe("when the user with _id exists", () => {
      it("should delete the user", async () => {
        const deletedUser = await UserService.deleteById(USER._id);
        expect(deletedUser).toBeDefined();
        expect(deletedUser?._id).toBeDefined();
        expect(deletedUser?.email).toBe(USER.email);
        expect(deletedUser?.firstName).toBe(USER.firstName);
        expect(deletedUser?.displayName).toBe(USER.displayName);
      });
    });
  });
});
