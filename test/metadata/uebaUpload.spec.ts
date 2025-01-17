import { AutoParseUEBAInfo, ReserveKey, UEBAInfo } from "../../src/models";
import { uebaModel } from "../client";

interface CustomUEBAInfo extends UEBAInfo {
  someKey: string;
}

const history = {} as CustomUEBAInfo & AutoParseUEBAInfo & ReserveKey;

// UEBA
describe("MetadUEBAata", () => {
  // 上传用户行为
  it("upload", async () => {
    //请求
    const { statusCode, data } = await uebaModel.capture<CustomUEBAInfo>({
      appId: "xxxxx",
      timestamp: Date.now(),
      ip: "183.95.62.38",
      ua: "Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1 Edg/111.0.0.0",
      originalIdentity: "123456789",
      behaviorType: "login",
      actionType: "Read",
      loginType: "wechat",
      someKey: "这是自定义的",
    });
    // 处理
    Object.assign(history, data);
    expect(statusCode).toEqual(200);
  });
});
