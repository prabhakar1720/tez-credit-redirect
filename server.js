import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/tez-credit-click", async (req, res) => {
  try {
    const {
      clickid,
      pid,
      sub2,
      sub7,
      sub4,
      sub6,
      sub8,
      offer_id,
      os_version
    } = req.query;

    if (!clickid) {
      return res.status(400).send("Missing clickid");
    }

    const serverSeenIp =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress;

    const serverSeenUa = req.get("user-agent") || "";

    console.log({
      offer: "tez_credit",
      time: new Date().toISOString(),
      clickid,
      pid,
      sub2,
      sub7,
      idfa: sub4,
      publisherIp: sub6,
      publisherUa: sub8,
      serverSeenIp,
      serverSeenUa,
      offer_id,
      os_version
    });

    const oneLink = new URL("https://tezcredit.onelink.me/b2RS");

    oneLink.searchParams.set("pid", "crichit67_int");
    oneLink.searchParams.set("af_siteid", `${pid || "unknown"}_${sub2 || "na"}_${sub7 || "na"}`);
    oneLink.searchParams.set("c", "Adsphire");

    if (offer_id) oneLink.searchParams.set("af_c_id", offer_id);

    if (pid) {
      oneLink.searchParams.set("af_ad", pid);
      oneLink.searchParams.set("af_adset", pid);
    }

    oneLink.searchParams.set("af_ad_id", `${pid || "unknown"}_${sub2 || "na"}`);
    oneLink.searchParams.set("af_channel", `${pid || "unknown"}_${sub2 || "na"}`);
    oneLink.searchParams.set("af_click_lookback", "7d");
    oneLink.searchParams.set("clickid", clickid);

    if (sub4) oneLink.searchParams.set("idfa", sub4);
    if (os_version) oneLink.searchParams.set("af_os_version", os_version);

    oneLink.searchParams.set("af_prt", "adsphiremein143");
    oneLink.searchParams.set("af_additionalpostback", "1");

    if (sub6) oneLink.searchParams.set("af_ip", sub6);
    if (sub8) oneLink.searchParams.set("af_ua", sub8);

    console.log("Redirecting to:", oneLink.toString());

    return res.redirect(302, oneLink.toString());
  } catch (error) {
    console.error("Tez Credit redirect error:", error);
    return res.status(500).send("Internal tracking error");
  }
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Tracking server running on port ${PORT}`);
});
