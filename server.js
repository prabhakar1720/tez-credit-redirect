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


app.get("/angel-one-click", async (req, res) => {
  try {
    const {
      clickid,
      pid,
      sub2,
      sub7,
      sub3,
      sub4,
      sub6,
      sub8,
      offer_id
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
      offer: "angel_one",
      time: new Date().toISOString(),
      clickid,
      pid,
      sub2,
      sub7,
      gaid: sub3,
      idfa: sub4,
      publisherIp: sub6,
      publisherUa: sub8,
      serverSeenIp,
      serverSeenUa,
      offer_id
    });

    const afUrl = new URL("https://app.appsflyer.com/com.msf.angelmobile");

    afUrl.searchParams.set("pid", "adsphiremx8_int");

    afUrl.searchParams.set(
      "af_siteid",
      `${pid || "unknown"}_${sub2 || "na"}_${sub7 || "na"}`
    );

    afUrl.searchParams.set("c", "APP_Inno_Adsphire_adsphiremx8_int");

    if (offer_id) {
      afUrl.searchParams.set("af_ad_id", offer_id);
    }

    afUrl.searchParams.set(
      "af_adset_id",
      `${pid || "unknown"}_${sub2 || "na"}`
    );

    afUrl.searchParams.set(
      "af_ad",
      "AngelOneforEveryoneCreative-1-320x250"
    );

    afUrl.searchParams.set("af_click_lookback", "7d");
    afUrl.searchParams.set("clickid", clickid);

    if (sub3) {
      afUrl.searchParams.set("advertising_id", sub3);
    }

    if (sub4) {
      afUrl.searchParams.set("idfa", sub4);
    }

    afUrl.searchParams.set("af_prt", "adsphirein749");

    if (pid) {
      afUrl.searchParams.set("af_c_id", pid);
      afUrl.searchParams.set("af_channel", pid);
    }

    // Publisher IP and UA from Affise/publisher
    if (sub6) {
      afUrl.searchParams.set("af_ip", sub6);
      afUrl.searchParams.set("af_sub1", sub6);
    }

    if (sub8) {
      afUrl.searchParams.set("af_ua", sub8);
      afUrl.searchParams.set("af_sub2", sub8);
    }

    console.log("Redirecting Angel One to:", afUrl.toString());

    return res.redirect(302, afUrl.toString());
  } catch (error) {
    console.error("Angel One redirect error:", error);
    return res.status(500).send("Internal tracking error");
  }
});


app.get("/gcash-click", async (req, res) => {
  try {
    const {
      clickid,
      pid,
      sub2,
      sub3,
      sub4,
      sub6,
      sub8,
      offer_id
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
      offer: "gcash",
      time: new Date().toISOString(),
      clickid,
      pid,
      sub2,
      gaid: sub3,
      idfa: sub4,
      publisherIp: sub6,
      publisherUa: sub8,
      serverSeenIp,
      serverSeenUa,
      offer_id
    });

    const afUrl = new URL("https://app.appsflyer.com/com.globe.gcash.android");

    afUrl.searchParams.set("pid", "adsphirenas_int");
    afUrl.searchParams.set("af_siteid", `${pid || "unknown"}_${sub2 || "na"}`);
    afUrl.searchParams.set("af_channel", `${pid || "unknown"}_${sub2 || "na"}`);

    if (offer_id) {
      afUrl.searchParams.set("af_c_id", offer_id);
    }

    afUrl.searchParams.set(
      "af_ad_id",
      `${pid || "unknown"}_${sub2 || "na"}`
    );

    afUrl.searchParams.set("af_click_lookback", "7d");
    afUrl.searchParams.set("clickid", clickid);

    if (sub3) {
      afUrl.searchParams.set("advertising_id", sub3);
    }

    if (sub4) {
      afUrl.searchParams.set("idfa", sub4);
    }

    afUrl.searchParams.set("af_prt", "adsphirediin572");
    afUrl.searchParams.set("c", "PM_APP_RGNAC_UAC_ACQUI_REGIONALACQUI_0-0");

    afUrl.searchParams.set(
      "af_ad",
      "PerfMktgAcqui_May_02_JoshuaScanToPayVoucher_1200x628.png"
    );

    afUrl.searchParams.set(
      "af_adset",
      "STP_COPY02_JOSHUAVOUCHER_MAY50"
    );

    // Optional debugging visibility
    if (sub6) {
      afUrl.searchParams.set("af_ip", sub6);
      afUrl.searchParams.set("af_sub1", sub6);
    }

    if (sub8) {
      afUrl.searchParams.set("af_ua", sub8);
      afUrl.searchParams.set("af_sub2", sub8);
    }

    console.log("Redirecting GCash to:", afUrl.toString());

    return res.redirect(302, afUrl.toString());
  } catch (error) {
    console.error("GCash redirect error:", error);
    return res.status(500).send("Internal tracking error");
  }
});


app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Tracking server running on port ${PORT}`);
});
