import cloudbase from "@cloudbase/js-sdk";

const cb = cloudbase.init({
  env: "lunwen-1g548pr72117e67f",
  region: "ap-guangzhou"
});

const auth = cb.auth({
  persistence: "none"
});

if (!auth.hasLoginState()) {
  auth.anonymousAuthProvider().signIn()
}

const db = cb.database()

export { cb, db, auth }