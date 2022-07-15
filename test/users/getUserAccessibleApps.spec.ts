import { managementClient } from "../client";

describe("getUserAccessibleApps", () => {
  let userIds: string[] = [];

  beforeAll(async () => {
    const { data } = await managementClient.listUsers({
      withCustomData: true,
      withIdentities: true,
      withDepartmentIds: true,
    });
    userIds = data.list.map((x) => x.userId);
  });

  describe("Success", () => {
    it("default", async () => {
      const { statusCode, data } = await managementClient.getUserAccessibleApps(
        {
          userId: userIds[0],
        }
      );
      expect(statusCode).toEqual(200);

      expect(Array.isArray(data)).toBeTruthy();
    });
  });

  describe("Fail", () => {
    it("userId is invalid", async () => {
      const { statusCode, message } =
        await managementClient.getUserAccessibleApps({
          userId: "",
        });
      expect(statusCode).toEqual(400);
      expect(message).toEqual("参数 userId 格式错误");
    });
  });
});
