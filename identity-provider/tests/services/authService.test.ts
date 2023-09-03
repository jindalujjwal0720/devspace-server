/*
 * Devspace IIT(ISM) Dhanbad
 *
 * This software and related documentation are owned by Devspace IIT(ISM) Dhanbad.
 * Unauthorized copying, reproduction, or modification via any medium is strictly prohibited.
 * Proprietary and confidential. All rights reserved.
 */

import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import AuthService from "../../services/authService";

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
        email: "test-auth@iitism.ac.in",
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
        email: "test-auth@iitism.ac.in",
        displayName: "Tester",
        passwordHash: "Test",
      };
      await expect(AuthService.register(user)).rejects.toThrow();
    });

    it("should throw an error if displayName is not provided", async () => {
      const user = <any>{
        email: "test-auth@iitism.ac.in",
        firstName: "Test",
        passwordHash: "Test",
      };
      await expect(AuthService.register(user)).rejects.toThrow();
    });

    describe("when the user does not exist", () => {
      it("should register a new user if required fields are provided", async () => {
        const user = {
          email: "test-auth@iitism.ac.in",
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
          email: "test-auth@iitism.ac.in",
          firstName: "Test",
          displayName: "Tester",
          passwordHash: "Test",
        };
        // Try to create the same user again
        await expect(AuthService.register(user)).rejects.toThrow();
      });
    });
  });
});
