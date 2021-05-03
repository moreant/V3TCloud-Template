import cloudbase from "@cloudbase/js-sdk";
import * as extSms from "@cloudbase/extension-sms";

const cb = cloudbase.init({
  env: "xiacun-6gd35jvte361355e",
});

cb.registerExtension(extSms)

const auth = cb.auth({
  persistence: "none"
});

// if (!auth.hasLoginState()) {
//   auth.anonymousAuthProvider().signIn()
// }

const db = cb.database()

export { cb, db, auth, extSms }